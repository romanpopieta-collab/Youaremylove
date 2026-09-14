"""Build optimized assets from the source .docx and videos.

Usage: python3 tools/build_assets.py "<path to Project річниця.docx>" "<folder with mp4>"

Images come out of the docx in document order (rId7..rId66 -> 01..60),
are resized to 900px and saved as AVIF + WebP. Also builds a sprite of
thumbnails for the final heart and small crops for the КОХАЮ letters.
"""
import io, os, re, subprocess, sys, zipfile, json
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, 'assets', 'img')
VID = os.path.join(ROOT, 'assets', 'video')

SIZE = 900
AVIF_Q, WEBP_Q = 54, 76
THUMB = 150            # sprite cell (≈50 css px @3x)
SPRITE_COLS = 10

VIDEOS = {  # output name -> source filename
    'kiss':    'davinci_a_short_looping_animation_of_a_couple_kissing.mp4',
    'pool':    'davinci_small_cicle_animation (1) копія.mp4',
    'balloon': 'davinci_small_cicle_animation (1).mp4',
    'wedding': 'davinci_small_cicle_animation (2).mp4',
    'muse':    'davinci_small_cicle_animation копія.mp4',
    'cafe':    'davinci_small_cicle_animation.mp4',
}

# lock screen illustration (lives next to the videos)
LOCK_IMAGE = 'Зображення Codex 14 вер. 2026 р., 12_15_58.png'

# КОХАЮ letters: image number -> used as fill for one letter
LETTERS = [42, 45, 36, 2, 50]


def square(im, size):
    w, h = im.size
    s = min(w, h)
    im = im.crop(((w - s) // 2, (h - s) // 2, (w - s) // 2 + s, (h - s) // 2 + s))
    return im.resize((size, size), Image.LANCZOS)


def save_pair(im, base):
    im.save(base + '.avif', 'AVIF', quality=AVIF_Q, speed=4)
    im.save(base + '.webp', 'WEBP', quality=WEBP_Q, method=6)


def main(docx, video_dir):
    os.makedirs(IMG, exist_ok=True)
    os.makedirs(VID, exist_ok=True)
    z = zipfile.ZipFile(docx)
    rels = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="media/([^"]+)"',
                           z.read('word/_rels/document.xml.rels').decode()))
    squares = []
    for n in range(1, 61):
        src = Image.open(io.BytesIO(z.read('word/media/' + rels['rId%d' % (n + 6)]))).convert('RGB')
        im = square(src, SIZE)
        save_pair(im, os.path.join(IMG, '%02d' % n))
        squares.append(im)
        print('img', n)

    rows = (len(squares) + SPRITE_COLS - 1) // SPRITE_COLS
    sprite = Image.new('RGB', (SPRITE_COLS * THUMB, rows * THUMB))
    for k, im in enumerate(squares):
        sprite.paste(im.resize((THUMB, THUMB), Image.LANCZOS), ((k % SPRITE_COLS) * THUMB, (k // SPRITE_COLS) * THUMB))
    save_pair(sprite, os.path.join(IMG, 'sprite'))

    for k, n in enumerate(LETTERS):
        save_pair(squares[n - 1].resize((360, 360), Image.LANCZOS), os.path.join(IMG, 'letter%d' % (k + 1)))

    lock = os.path.join(video_dir, LOCK_IMAGE)
    if os.path.exists(lock):
        save_pair(square(Image.open(lock).convert('RGB'), SIZE), os.path.join(IMG, 'lock'))

    for name, fn in VIDEOS.items():
        src = os.path.join(video_dir, fn)
        out = os.path.join(VID, name + '.mp4')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-an',
                        '-vf', 'scale=540:540:flags=lanczos,format=yuv420p',
                        '-c:v', 'libx264', '-profile:v', 'high', '-preset', 'veryslow', '-crf', '27',
                        '-movflags', '+faststart', out], check=True)
        poster = os.path.join(VID, name + '.jpg')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', out, '-frames:v', '1',
                        '-vf', 'scale=360:360', '-q:v', '5', poster], check=True)
        pim = Image.open(poster).convert('RGB')
        pim.save(os.path.join(VID, name + '.webp'), 'WEBP', quality=70, method=6)
        os.remove(poster)
        print('video', name)

    total = 0
    for d in (IMG, VID):
        for f in os.listdir(d):
            total += os.path.getsize(os.path.join(d, f))
    print(json.dumps({'total_mb': round(total / 1e6, 2)}))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
