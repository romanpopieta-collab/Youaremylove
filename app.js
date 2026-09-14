(() => {
  'use strict';

  /* ================= content ================= */

  const SECRET = '15092018';
  const STORE = { unlocked: 'lt:unlocked', page: 'lt:page', reached: 'lt:reached' };

  const INTRO = {
    video: 'kiss',
    lead: [
      'Кохання до тебе складно описати словами. Воно розсипане по тисячі дрібниць: ранкові обійми, спільні подорожі, твої млинчики та пироги.',
      'Я зібрав ці дрібниці сюди. Разом вони і є відповідь на питання, яке я так і не вмію вимовляти вголос.'
    ]
  };

  // A string is one illustration on a page, an array of two is a pair on one page.
  const CHAPTERS = [
    {
      name: 'Always', ord: 'Chapter I', video: 'wedding',
      lead: ['Є речі, які не змінюються з роками. Вони просто були від початку — і будуть завжди.'],
      items: [
        'Повертатися думками до нашої першої зустрічі й усміхатися тобі знову',
        'Не відпускати твою долоню — навіть на мить',
        'Пам’ятати, як паморочилася голова від нашого першого поцілунку',
        'І те, як тремтіли руки, коли я освідчувався',
        ['Пам’ятати кожне слово наших клятв', 'І наш перший весільний танець'],
        'Дякувати тобі за найцінніший подарунок у моєму житті',
        'і щодня бути щасливим поруч із тобою',
        'Від нашої першої зустрічі — і досі. І завжди'
      ]
    },
    {
      name: 'Our rituals', ord: 'Chapter II', video: 'cafe',
      lead: [
        'Кохання рідко буває таким, як у кіно. Наше не завжди живе у великих жестах, а в дрібницях, які повторюються щодня: в обіймах на кухні, у цьомчиках перед сном, у серії, яку я не вмикаю без тебе.',
        'З них і зіткане моє щастя.'
      ],
      items: [
        'Обіймати тебе кожного ранку',
        'Щоранку бажати тобі гарного дня',
        'Ділитися смішними тіктоками — навіть коли ти сидиш поруч.',
        'Чути твоє «ще хвилинку»',
        'Не втриматись і вщипнути за попку',
        'Виходити на двобій із павуком, коли тобі страшно',
        'Усміхатися про себе, коли ти кажеш «тільки скуштую»',
        'Не вмикати наступну серію наодинці',
        'Складати плани на вихідні — і проводити їх у ліжку',
        'Не лягати спати без цьомчика',
        'Щороку повертатися з тобою до Гаррі Поттера, наче в перший раз',
        'Повертатися в особливі для нас місця й згадувати, якими ми були тоді.',
        'Збирати твої маленькі сюрпризи у нашу велику історію.'
      ]
    },
    {
      name: 'Unstoppable', ord: 'Chapter III', video: 'pool',
      lead: [
        'Інколи, між роботою, малючком і постійною втомою, здається, що ми стали нудними. Що все цікаве вже позаду.',
        'А потім я згадую — і бачу, скільки в нас спогадів, руху і сміху. Ми ніколи не стояли на місці. Просто іноді забуваємо озирнутися.'
      ],
      items: [
        'Відкривати нові місця — і забирати шматочок кожного з собою',
        'Крутити педалі й нікуди не поспішати',
        'Дуріти, як діти, і не озиратися',
        'Мати цілий човен — і цілий світ — тільки для нас двох',
        'Ловити наш спільний ритм',
        ['Підкорювати нові вершини', 'Та спускатися до глибин'],
        ['Захоплюватися мистецтвом', 'Та історією'],
        ['Пробувати з тобою щось незвичне — від екзотичних смаків', 'до прогулянок на верблюдах'],
        'Займатися екстрімом',
        'І забирати найкращі миті з собою'
      ]
    },
    {
      name: 'Me & You', ord: 'Chapter IV', video: 'balloon',
      lead: [
        'Є моменти, у яких немає нікого, крім нас. Ні роботи, ні побуту, ні планів, ні решти світу.',
        'Тільки ти, я.'
      ],
      items: [
        'Зустрічати захід сонця, поки ти притулилася до мого плеча',
        'А потім зустрічати світанок, не випускаючи тебе з обіймів.',
        ['П’яніти від тебе', 'до нестями'],
        'Займатися коханням під Weekend',
        'Носити тебе на руках просто тому, що хочеться.',
        'Танцювати ніби ніхто не бачить',
        'Удвох зупиняти час',
        'Сумувати, коли тебе немає поруч',
        'І мріяти про те, що буде далі'
      ]
    },
    {
      name: 'My Muse', ord: 'Chapter V', video: 'muse',
      lead: ['Я не знаю, звідки в тобі стільки енергії, тепла й віри в мене. Знаю тільки, що без цього я був би зовсім іншою людиною. Ти моя муза, мій тил і моє натхнення.'],
      items: [
        'Вчитися у тебе новому',
        'Дивитися, як ти радієш, і мимоволі усміхатися самому',
        'Бачити тебе справжньою — без нічого зайвого',
        'Надихатися твоєю фантазією й самому пробувати щось нове',
        'Заряджатися твоєю нестримною енергією',
        'Відчувати твою підтримку у важкі моменти',
        'З нетерпінням чекати улюблених смаколиків від тебе',
        'Відчувати твою безмежну турботу',
        'Кайфувати від твоїх ніжних дотиків',
        'Помічати твою турботу в дрібницях, про які я сам би не подумав.',
        'Мати змогу мовчати поруч із тобою й усе одно відчувати, що мене розуміють.',
        'Дивитися, як ти захоплено говориш про улюблену справу, — і самому чогось хотіти сильніше.',
        'Цінувати, як ти залишаєш мені час на себе.',
        'Відчувати себе на вершині, після «у тебе все вийде»'
      ]
    }
  ];

  const OUTRO = {
    title: 'To Be Continued…', video: 'kiss',
    lead: [
      'Це не кінець історії — це її середина.',
      'Попереду нові пригоди, подорожі, теплі ранки й сотні дрібниць. І я хочу прожити їх усі з тобою.'
    ]
  };

  const FINAL_IMAGE = 60;           // illustration in the centre of the heart

  /* ================= helpers ================= */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad2 = (n) => String(n).padStart(2, '0');
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const lower = (s) => s.charAt(0).toLocaleLowerCase('uk') + s.slice(1);
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
    clear() { try { Object.values(STORE).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* noop */ } }
  };

  const rng = (seed) => () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  // Torn-paper circle used for round videos.
  (() => {
    const r = rng(11);
    const pts = [];
    const n = 56;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      const rad = 49.2 - (k % 2) * 1.3 - r() * .9;
      pts.push(`${(50 + Math.cos(a) * rad).toFixed(2)}% ${(50 + Math.sin(a) * rad).toFixed(2)}%`);
    }
    document.documentElement.style.setProperty('--torn-circle', `polygon(${pts.join(',')})`);
  })();

  let EXT = 'webp';
  const avifProbe = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADrbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAETAAAAFwAAAChpaW5mAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAABqaXBycAAAAEtpcGNvAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAADGF2MUOBAAwAAAAAE2NvbHJuY2x4AAEADQAGgAAAABdpcG1hAAAAAAAAAAEAAQQBAoMEAAAAH21kYXQSAAoFGAAGBCAyDBgACiiihAAAsBKamA==';
  }).then((ok) => { if (ok) EXT = 'avif'; });

  const spritePos = (n) => {
    const i = n - 1;
    return `${((i % 10) / 9 * 100).toFixed(3)}% ${(Math.floor(i / 10) / 5 * 100).toFixed(3)}%`;
  };

  /* ---------- preloading ---------- */

  const imageUrl = (n) => `assets/img/${typeof n === 'number' ? pad2(n) : n}.${EXT}`;
  const spriteUrl = () => `assets/img/sprite.${EXT}`;
  const warmCache = new Map();

  // Fetches and decodes an image ahead of time; resolves when it is ready to paint.
  function warm(url, priority = 'low') {
    if (!warmCache.has(url)) {
      warmCache.set(url, new Promise((resolve) => {
        const im = new Image();
        if ('fetchPriority' in im) im.fetchPriority = priority;
        im.decoding = 'async';
        im.onload = () => (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).then(resolve);
        im.onerror = resolve;
        im.src = url;
      }));
    }
    return warmCache.get(url);
  }

  /* ================= templates ================= */

  function garland(seed, { depth, count } = {}) {
    const r = rng(seed * 7 + 3);
    const d = depth || .5 + r() * .3;
    const n = count || 3 + Math.floor(r() * 2);
    let lanterns = '';
    for (let k = 0; k < n; k++) {
      const u = clamp((k + .5) / n + (r() - .5) * .07, .06, .94);
      const y = 4 * u * (1 - u) * d * 100;
      const s = 9 + Math.round(r() * 4);
      lanterns += `<i class="lantern" style="left:${(u * 100).toFixed(1)}%;top:calc(${y.toFixed(1)}% + 5px);--s:${s}px;--dur:${(5.4 + r() * 2).toFixed(1)}s;--del:${(r() * 2.4).toFixed(1)}s"></i>`;
    }
    return `<div class="garland" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 Q50 ${(d * 200).toFixed(1)} 100 0" vector-effect="non-scaling-stroke"/></svg>${lanterns}</div>`;
  }

  const WAIT = '<span class="wait" aria-hidden="true">почекай секундочку…</span>';
  const img = (n) => {
    const id = typeof n === 'number' ? pad2(n) : n;
    const ph = typeof n === 'number' ? `<i class="ph" style="background-position:${spritePos(n)}"></i>${WAIT}` : '';
    return `${ph}<picture><source type="image/avif" data-srcset="assets/img/${id}.avif"><img data-src="assets/img/${id}.webp" alt="" decoding="async" draggable="false"></picture>`;
  };

  // 3A — дрібний зубець по всьому периметру
  const frameA = (n, cls = '') => `<div class="frame ${cls}"><div class="frame__paper"></div><div class="frame__img">${img(n)}</div></div>`;

  // 3C — смуга від краю до краю, рвано лише вгорі й знизу
  const frameC = (n, cls = '') => `<div class="strip ${cls}"><div class="strip__paper"></div><div class="strip__img">${img(n)}</div></div>`;

  // 3E — рваний клаптик паперу з полем і підписом почерком
  const frameE = (n, caption, d, cls = '', top = false) => {
    const cap = `<div class="note__cap ln" style="--d:${d}">…${esc(lower(caption))}</div>`;
    return `<div class="note ${cls}${top ? ' note--top' : ''}"><div class="note__shadow"><div class="note__paper"></div></div><div class="note__inner">${top ? cap : ''}<div class="note__photo">${img(n)}</div>${top ? '' : cap}</div></div>`;
  };

  function orb(video) {
    return `<div class="orb"><div class="orb__paper"></div>${WAIT}<video muted playsinline loop preload="none" disableremoteplayback data-src="assets/video/${video}.mp4" data-poster="assets/video/${video}.webp"></video></div>`;
  }

  const flourish = (d) => `<svg class="flourish ln" style="--d:${d}" viewBox="0 0 132 18" aria-hidden="true"><path d="M3 11.5c9-6.5 19-7.5 29-3.2 8.6 3.7 16 4.6 25.5-.6"/><path d="M129 11.5c-9-6.5-19-7.5-29-3.2-8.6 3.7-16 4.6-25.5-.6"/><path class="flourish__leaf" d="M66 3.2c3.2 2.6 3.2 7.6 0 11.6-3.2-4-3.2-9 0-11.6z"/></svg>`;

  const lead = (paras, d) => `<div class="lead ln" style="--d:${d}">${paras.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`;
  const refrain = () => `<div class="refrain ln" style="--d:0">Кохання — це…</div>`;
  const tag = (ch) => `<div class="tag">${esc(ch.name)}</div>`;

  const captionSize = (t) => (t.length <= 30 ? 27 : t.length <= 58 ? 23 : 20);
  const noteSize = (t) => (t.length <= 30 ? 23 : t.length <= 58 ? 20 : 18);
  const handSize = (a, b) => (Math.max(a.length, b.length) <= 30 ? 21 : 18);

  /* ================= build pages ================= */

  const PAGES = [];
  const MOMENTS = {};      // image number → { text, chapter, page }
  const add = (p) => { p.index = PAGES.length; PAGES.push(p); return p; };

  add({
    kind: 'lock', warm: true,
    html: `<div class="body lock">
      <div class="kicker ln" style="--d:0">Only for You</div>
      ${garland(1, { depth: .62, count: 5 })}
      <div class="lock__title ln" style="--d:1">Відкривається<br><i>нашою датою</i></div>
      <form class="code ln" style="--d:2" autocomplete="off" novalidate>
        <label>ДЕНЬ<input inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="дд" aria-label="День" enterkeyhint="next"></label>
        <span class="code__dot">·</span>
        <label>МІСЯЦЬ<input inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="мм" aria-label="Місяць" enterkeyhint="next"></label>
        <span class="code__dot">·</span>
        <label>РІК<input class="is-year" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="рррр" aria-label="Рік" enterkeyhint="done"></label>
      </form>
      <div class="lock__hint ln" style="--d:3" aria-live="polite">введи дату, яку ми святкуємо</div>
      ${frameA('lock', 'breathe')}
    </div>`,
    range: (w, h) => [0, Math.min(w * .74, h * .42, 290)]
  });

  add({
    kind: 'opener', warm: true, video: INTRO.video,
    html: `<div class="body">
      <div class="kicker ln" style="--d:0">15 · 09 · 2018</div>
      ${garland(2, { depth: .55, count: 5 })}
      ${orb(INTRO.video)}
      <h1 class="cover-title ln" style="--d:1">You Are <i>Love</i></h1>
      ${flourish(1.6)}
      ${lead(INTRO.lead, 2.2)}
    </div>`,
    range: (w, h) => [110, Math.min(w * .6, 230)]
  });

  const chapterStarts = [];
  let num = 0;

  // frame rhythm for single pages and layouts for pairs
  const SINGLE_FRAMES = ['A', 'E', 'C', 'A', 'C', 'E'];
  const QUERY = new URLSearchParams(location.search);
  const PREVIEW = QUERY.has('preview');           // design review: ?preview&p=32&layout=stack
  const PAIR_LAYOUTS = QUERY.get('layout') ? [QUERY.get('layout')] : ['diag', 'overlap', 'duo', 'diag-rev', 'overlap', 'duo'];
  let singleK = 0, pairK = 0;

  function singlePage(ch, ci, n, text) {
    const kind = SINGLE_FRAMES[singleK++ % SINGLE_FRAMES.length];
    let media, range;
    if (kind === 'A') {
      media = `${frameA(n, 'breathe')}<div class="caption ln" style="--d:1;--cs:${captionSize(text)}px">…${esc(lower(text))}</div>`;
      range = (w) => [150, Math.min(w, 340)];
    } else if (kind === 'C') {
      media = `${frameC(n, 'breathe')}<div class="caption ln" style="--d:1;--cs:${captionSize(text)}px">…${esc(lower(text))}</div>`;
      range = (w, h) => [150, Math.min(w + 60, 420)];
    } else {
      media = frameE(n, text, 1, 'breathe');
      range = (w) => [130, Math.min(w - 36, 300)];
    }
    return add({
      kind: 'single', frame: kind, chapter: ci, imgs: [n],
      html: `<div class="body frame-${kind}" style="--ns:${noteSize(text)}px">
        ${refrain()}
        ${garland(100 + n)}
        ${media}
        ${tag(ch)}
      </div>`,
      range
    });
  }

  function pairPage(ch, ci, n1, n2, a, b) {
    const layout = PAIR_LAYOUTS[pairK++ % PAIR_LAYOUTS.length];
    const capA = `…${esc(lower(a))}`, capB = `…${esc(lower(b))}`;
    let inner, range;
    if (layout === 'diag' || layout === 'diag-rev') {
      inner = `<div class="diag${layout === 'diag-rev' ? ' diag--rev' : ''}">
        <div class="diag__item">${frameA(n1, 'frame--sm')}<div class="hand-cap ln" style="--d:1">${capA}</div></div>
        <div class="diag__item diag__item--2">${frameA(n2, 'frame--sm')}<div class="hand-cap ln" style="--d:2">${capB}</div></div>
      </div>`;
      range = (w) => [96, Math.min(w * .64, 250)];
    } else if (layout === 'duo') {
      inner = `<div class="duo">${frameE(n1, a, 1, 'note--sm note--l')}${frameE(n2, b, 2, 'note--sm note--r')}</div>`;
      range = (w) => [84, Math.floor((w + 24 - 12) / 2 - 20)];
    } else if (layout === 'stack') {
      // V1 — два великі клаптики внахлест, підпис першого вгорі, другого внизу
      inner = `<div class="stack">${frameE(n1, a, 1, 'stack__a', true)}${frameE(n2, b, 2, 'stack__b')}</div>`;
      range = (w) => [110, Math.min(w * .74, 270)];
    } else if (layout === 'stripnote') {
      // V2 — смуга на всю ширину + клаптик, що наліз на її край
      inner = `<div class="stripnote">
        <div class="hand-cap stripnote__cap ln" style="--d:1">${capA}</div>
        ${frameC(n1)}
        ${frameE(n2, b, 2, 'note--sm stripnote__note')}
      </div>`;
      range = (w) => [150, Math.min(w + 60, 400)];
    } else if (layout === 'strips') {
      // V3 — дві смуги від краю до краю, одна під одною
      inner = `<div class="strips">
        ${frameC(n1)}<div class="hand-cap strips__cap ln" style="--d:1">${capA}</div>
        ${frameC(n2)}<div class="hand-cap strips__cap strips__cap--2 ln" style="--d:2">${capB}</div>
      </div>`;
      range = (w, h) => [120, Math.min(w * .9, 320)];
    } else if (layout === 'hero') {
      // V4 — велике фото і полароїд-вклейка на куті
      inner = `<div class="hero">
        <div class="hand-cap hero__cap ln" style="--d:1">${capA}</div>
        ${frameA(n1)}
        ${frameE(n2, b, 2, 'note--sm hero__note')}
      </div>`;
      range = (w) => [150, Math.min(w, 330)];
    } else if (layout === 'flip') {
      // V5 — одна велика рамка, фото мʼяко змінюють одне одного
      inner = `<div class="flip">
        <div class="frame flip__frame"><div class="frame__paper"></div>
          <div class="frame__img flip__img flip__img--a">${img(n1)}</div>
          <div class="frame__img flip__img flip__img--b">${img(n2)}</div>
        </div>
        <div class="flip__caps ln" style="--d:1">
          <div class="caption flip__cap flip__cap--a" style="--cs:${captionSize(a)}px">${capA}</div>
          <div class="caption flip__cap flip__cap--b" style="--cs:${captionSize(b)}px">${capB}</div>
        </div>
        <div class="flip__dots"><i></i><i></i></div>
      </div>`;
      range = (w) => [150, Math.min(w, 340)];
    } else {
      inner = `<div class="overlap">
        ${frameA(n1, 'frame--sm')}
        <div class="overlap__row">
          <div class="hand-cap overlap__cap ln" style="--d:1">${capA}</div>
          ${frameE(n2, b, 2, 'note--sm overlap__note')}
        </div>
      </div>`;
      range = (w) => [120, Math.min(w * .76, 270)];
    }
    return add({
      kind: 'pair', layout, chapter: ci, imgs: [n1, n2],
      html: `<div class="body" style="--hs:${handSize(a, b)}px;--ns:${Math.min(handSize(a, b), 19)}px">
        ${refrain()}
        ${garland(100 + n1, { depth: .45 })}
        ${inner}
        ${tag(ch)}
      </div>`,
      range
    });
  }

  CHAPTERS.forEach((ch, ci) => {
    chapterStarts.push(add({
      kind: 'opener', warm: true, video: ch.video, chapter: ci,
      html: `<div class="body">
        <div class="kicker ln" style="--d:0">${esc(ch.ord)}</div>
        ${garland(10 + ci, { depth: .5 })}
        ${orb(ch.video)}
        <h2 class="hand-title ln" style="--d:1">${esc(ch.name)}</h2>
        ${flourish(1.6)}
        ${lead(ch.lead, 2.2)}
      </div>`,
      range: (w, h) => [110, Math.min(w * .6, 230)]
    }).index);

    ch.items.forEach((item) => {
      if (Array.isArray(item)) {
        const n1 = ++num, n2 = ++num;
        const pg = pairPage(ch, ci, n1, n2, item[0], item[1]);
        MOMENTS[n1] = { text: item[0], chapter: ch.name, page: pg.index };
        MOMENTS[n2] = { text: item[1], chapter: ch.name, page: pg.index };
      } else {
        const n = ++num;
        const pg = singlePage(ch, ci, n, item);
        MOMENTS[n] = { text: item, chapter: ch.name, page: pg.index };
      }
    });
  });

  const TOTAL_MOMENTS = num;

  const outroPage = add({
    kind: 'opener', warm: true, video: OUTRO.video,
    html: `<div class="body">
      <div class="kicker ln" style="--d:0">далі буде</div>
      ${garland(50, { depth: .55, count: 5 })}
      ${orb(OUTRO.video)}
      <h2 class="hand-title hand-title--sm ln" style="--d:1">${esc(OUTRO.title)}</h2>
      ${flourish(1.6)}
      ${lead(OUTRO.lead, 2.2)}
    </div>`,
    range: (w, h) => [110, Math.min(w * .6, 230)]
  });
  MOMENTS[FINAL_IMAGE] = { text: OUTRO.lead[0], chapter: OUTRO.title, page: outroPage.index, plain: true };

  /* ---- final: heart of cards + КОХАЮ + chapter videos ---- */

  const HEART = (() => {
    const rings = [[1, 25, .13], [.7, 18, .145], [.42, 11, .158], [.16, 5, .17]];
    const r = rng(7);
    const raw = [];
    rings.forEach(([s, n, size], ri) => {
      for (let k = 0; k < n; k++) {
        const t = (k / n) * Math.PI * 2 + ri * .35;
        raw.push({
          x: 16 * Math.pow(Math.sin(t), 3) * s,
          y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * s,
          s: size, ring: ri
        });
      }
    });
    const xs = raw.map((p) => p.x), ys = raw.map((p) => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const W = 1, H = .9, pad = .085;
    const mapX = (x) => pad + ((x - minX) / (maxX - minX)) * (W - pad * 2);
    const mapY = (y) => pad + ((y - minY) / (maxY - minY)) * (H - pad * 2);

    const slots = raw.map((p) => ({ l: mapX(p.x), t: mapY(p.y), s: p.s, z: 1 + p.ring }));
    slots.push({ l: mapX(0), t: mapY(1.6), s: .27, z: 6, center: true });

    // images 1..59 shuffled deterministically so neighbours differ; 60 sits in the centre
    const imgs = Array.from({ length: TOTAL_MOMENTS }, (_, i) => i + 1);
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
    imgs.push(FINAL_IMAGE);

    let delay = 80;
    const cards = slots.map((slot, i) => {
      const c = {
        img: imgs[i], slot: i,
        dx: slot.center ? 0 : (r() - .5) * 1.3, dy: slot.center ? .7 : (r() - .5) * 1.4 + .4,
        r0: slot.center ? -12 : (r() - .5) * 95, r1: slot.center ? -3 : (r() - .5) * 15,
        delay: slot.center ? delay + 140 : delay
      };
      if (!slot.center) delay += raw[i].ring === 0 ? 34 : 26;
      return c;
    });
    return { slots, cards, done: delay + 140 + 1050 };
  })();

  const slotVars = (slot) => `--l:${slot.l.toFixed(4)};--t:${slot.t.toFixed(4)};--s:${slot.s};z-index:${slot.z}`;

  const heartHtml = HEART.cards.map((c, i) => `<i class="card${HEART.slots[c.slot].center ? ' is-center' : ''}" data-card="${i}" data-img="${c.img}" style="${slotVars(HEART.slots[c.slot])};--dx:${c.dx.toFixed(3)};--dy:${c.dy.toFixed(3)};--r0:${c.r0.toFixed(1)}deg;--r1:${c.r1.toFixed(1)}deg;--delay:${c.delay}ms;background-position:${spritePos(c.img)}"></i>`).join('');

  const wordDelay = HEART.done - 350;
  // the animated wrapper keeps background-clip:text off its own compositing layer (Safari)
  const letter = (ch, k, bgPos) => `<span class="word__cell" style="--delay:${wordDelay + k * 110}ms"><span class="word__l" data-bg="letter${k + 1}"${bgPos ? ` style="background-position:${bgPos}"` : ''}>${ch}</span></span>`;
  const navDelay = wordDelay + 5 * 110 + 700;

  const finalPage = add({
    kind: 'final', warm: true,
    html: `<div class="body" style="--glow-delay:${HEART.done - 700}ms">
      <div class="kicker ln" style="--d:0">Memories Made Possible by You</div>
      <div class="heart" data-sprite>
        <div class="heart__glow"></div>
        ${heartHtml}
        <span class="wait heart__wait" aria-hidden="true">почекай секундочку…</span>
        <span class="heart__hint">торкнись або потягни фото</span>
        <button class="heart__shuffle" type="button" data-shuffle>перемішати</button>
      </div>
      <div class="word" aria-label="Кохаю">
        <div class="word__row">${letter('К', 0)}${letter('О', 1)}</div>
        <div class="word__row">${letter('Х', 2)}${letter('А', 3, '50% 30%')}${letter('Ю', 4)}</div>
      </div>
      <div class="chapters-label" style="--delay:${navDelay}ms">повернутися до розділу</div>
      <div class="chapters">
        ${CHAPTERS.map((ch, ci) => `<button class="chapter" type="button" data-nav="${ci}" style="--delay:${navDelay + 120 + ci * 90}ms">${orb(ch.video)}<span class="chapter__name">${esc(ch.name)}</span></button>`).join('')}
      </div>
    </div>
    <div class="viewer" hidden>
      <div class="viewer__veil"></div>
      <figure class="viewer__card">
        <div class="note__shadow"><div class="note__paper"></div></div>
        <div class="viewer__inner">
          <div class="viewer__photo"><img alt="" draggable="false"></div>
          <figcaption>
            <span class="viewer__kicker"></span>
            <span class="viewer__text"></span>
          </figcaption>
          <button class="viewer__go" type="button">до сторінки →</button>
        </div>
      </figure>
    </div>`,
    range: (w, h) => [200, Math.min(w, 330)]
  });

  /* ================= DOM ================= */

  const stage = $('#stage');
  const pagesEl = $('#pages');
  const chapnav = $('#chapnav');
  const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

  PAGES.forEach((p) => {
    const el = document.createElement('section');
    el.className = `page page--${p.kind}${p.warm ? ' page--warm' : ''}`;
    el.innerHTML = p.html;
    el.setAttribute('aria-hidden', 'true');
    p.el = el;
    p.body = $('.body', el);
    pagesEl.appendChild(el);
  });

  const LAST = PAGES.length - 1;
  let unlocked = PREVIEW || store.get(STORE.unlocked) === '1';
  if (/[?&]reset\b/.test(location.search)) { store.clear(); unlocked = false; history.replaceState(null, '', location.pathname); }
  const firstPage = () => (unlocked ? 1 : 0);

  let cur = 0;
  let anim = null;      // running transition

  /* ---------- fit content to the viewport ---------- */

  function fit(p) {
    const w = stage.clientWidth, h = stage.clientHeight;
    const key = `${w}x${h}`;
    if (p.fitKey === key) return;
    const cw = p.body.clientWidth - 60;
    const [min, max] = p.range(cw, h);
    const el = p.el;
    const set = (m, fs) => {
      el.style.setProperty('--m', `${Math.round(m)}px`);
      el.style.setProperty('--hm', `${Math.round(m)}px`);
      el.style.setProperty('--fs', fs);
    };
    const over = () => p.body.scrollHeight > p.body.clientHeight + 1;

    set(max, 1);
    if (over()) {
      let lo = min, hi = max;
      set(lo, 1);
      if (!over()) {
        for (let i = 0; i < 7; i++) {
          const mid = (lo + hi) / 2;
          set(mid, 1);
          if (over()) hi = mid; else lo = mid;
        }
        set(lo, 1);
      } else {
        for (const fs of [.94, .88, .82, .76]) {
          set(min, fs);
          if (!over()) break;
        }
      }
    }
    if (p.kind === 'lock') {
      const frame = $('.frame', el);
      const m = parseFloat(el.style.getPropertyValue('--m'));
      frame.classList.toggle('is-gone', m < 120);
    }
    p.fitKey = key;
  }

  /* ---------- media ---------- */

  function loadImages(p, priority) {
    if (p.imagesLoaded) return;
    p.imagesLoaded = true;
    $$('source[data-srcset]', p.el).forEach((s) => { s.srcset = s.dataset.srcset; s.removeAttribute('data-srcset'); });
    $$('img[data-src]', p.el).forEach((img) => {
      if (priority) img.setAttribute('fetchpriority', priority);
      const done = () => {
        img.classList.add('is-loaded');
        const box = img.closest('.frame__img, .strip__img, .note__photo');
        if (box) box.classList.add('is-ready');
      };
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      if (img.complete && img.naturalWidth) done();
    });
    const heart = $('[data-sprite]', p.el);
    if (heart) {
      heart.style.setProperty('--sprite', `url(${spriteUrl()})`);
      $$('.card.is-center', heart).forEach(paintCenter);
    }
    $$('[data-bg]', p.el).forEach((n) => {
      n.style.backgroundImage = `url(assets/img/${n.dataset.bg}.${EXT})`;
      n.removeAttribute('data-bg');
    });
  }

  function attachVideos(p) {
    $$('video', p.el).forEach((v) => {
      if (v.getAttribute('src')) return;
      v.muted = true;
      v.setAttribute('muted', '');
      v.poster = v.dataset.poster;
      warm(v.dataset.poster, 'high').then(() => v.parentElement.classList.add('is-ready'));
      v.preload = 'auto';
      v.src = v.dataset.src;
    });
  }

  function detachVideos(p) {
    $$('video', p.el).forEach((v) => {
      if (!v.getAttribute('src')) return;
      v.pause();
      v.removeAttribute('src');
      v.load();
    });
  }

  function playVideos(p, on) {
    $$('video', p.el).forEach((v) => {
      if (on) {
        if (!v.getAttribute('src')) attachVideos(p);
        const pr = v.play();
        if (pr && pr.catch) pr.catch(() => {});
      } else {
        v.pause();
      }
    });
  }

  function syncMedia(center) {
    PAGES.forEach((p, i) => {
      const dist = Math.abs(i - center);
      if (dist <= 2 || p.index === finalPage.index && center >= LAST - 1) loadImages(p, i === center ? 'high' : 'auto');
      // further ahead: fetch quietly into the cache so fast flipping finds them ready
      else if (i > center && i <= center + 6 && p.imgs) p.imgs.forEach((n) => warm(imageUrl(n)));
      if (dist <= 1 && p.kind !== 'final') attachVideos(p);
      else if (dist > 3 && !(anim && (anim.a === p || anim.b === p))) detachVideos(p);
    });
    // chapter openers are reachable from the final page in one tap
    if (center === LAST) chapterStarts.forEach((i) => loadImages(PAGES[i]));
    // the heart needs its sprite, centre illustration and letters — start early
    if (unlocked) warm(spriteUrl());
    if (center >= outroPage.index - 4) warmHeart();
  }

  /* ---------- page state ---------- */

  function show(p) {
    if (!p.el.classList.contains('is-live')) {
      p.el.classList.add('is-live');
      fit(p);
    }
  }

  function reset(p) {
    p.el.classList.remove('is-active', 'is-in', 'is-moving', 'is-assembled');
    p.el.style.transform = '';
    p.el.style.opacity = '';
    p.el.setAttribute('aria-hidden', 'true');
    playVideos(p, false);
  }

  // Keeps the neighbours laid out and painted underneath the current page,
  // so the first frame of a flip never shows an empty sheet.
  function prime(center) {
    PAGES.forEach((p, i) => {
      if (i === center) { p.el.style.zIndex = 1; return; }
      const near = Math.abs(i - center) === 1 && i >= firstPage();
      if (near) {
        show(p);
        p.el.style.zIndex = 0;
      } else if (p.el.classList.contains('is-live')) {
        reset(p);
        p.el.classList.remove('is-live');
        p.el.style.zIndex = '';
      }
    });
  }

  function replayText(p) {
    p.el.classList.remove('is-in');
    void p.el.offsetWidth;
    p.el.classList.add('is-in');
  }

  const warmHeart = (priority = 'low') => Promise.all([
    warm(spriteUrl(), priority),
    warm(imageUrl(FINAL_IMAGE), priority),
    ...[1, 2, 3, 4, 5].map((k) => warm(imageUrl(`letter${k}`), priority))
  ]);

  let heartTimer = 0, heartToken = 0;
  function activate(p) {
    p.el.classList.add('is-active');
    p.el.setAttribute('aria-hidden', 'false');
    if (p.kind !== 'final') { playVideos(p, true); return; }

    // the heart only starts to gather once every photo in it can be painted
    clearTimeout(heartTimer);
    const token = ++heartToken;
    p.el.classList.remove('is-assembled', 'is-playable', 'is-waiting');
    void p.el.offsetWidth;
    const t0 = performance.now();
    let ready = false;
    const waitTimer = setTimeout(() => { if (token === heartToken && !ready) p.el.classList.add('is-waiting'); }, 650);
    Promise.race([warmHeart('high'), new Promise((r) => setTimeout(r, 8000))]).then(() => {
      ready = true;
      clearTimeout(waitTimer);
      if (token !== heartToken) return;
      const waited = p.el.classList.contains('is-waiting');
      p.el.classList.remove('is-waiting');
      const lead = reduceMotion.matches ? 60 : waited ? 420 : Math.max(60, 520 - (performance.now() - t0));
      heartTimer = setTimeout(() => {
        if (token !== heartToken) return;
        p.el.classList.add('is-assembled');
        // chapter videos wait for their turn so they do not compete with the photos
        setTimeout(() => { if (token === heartToken) playVideos(p, true); }, reduceMotion.matches ? 0 : navDelay - 300);
        heartTimer = setTimeout(() => p.el.classList.add('is-playable'), reduceMotion.matches ? 300 : HEART.done + 200);
      }, lead);
    });
  }

  function deactivate(p) {
    p.el.classList.remove('is-active');
    if (p.kind === 'final') {
      heartToken++;
      clearTimeout(heartTimer);
      closeViewer(true);
      playVideos(p, false);
      p.el.classList.remove('is-assembled', 'is-playable', 'is-waiting');
    }
  }

  /* ---------- chapter navigation: numerals open up as she reaches them ---------- */

  chapnav.innerHTML = CHAPTERS.map((ch, i) => `<button class="chapnav__item is-locked" type="button" data-chapter="${i}" aria-label="Chapter ${ROMAN[i]} · ${esc(ch.name)}" disabled><span class="chapnav__name">${ROMAN[i]}</span></button>`).join('');
  const navItems = $$('.chapnav__item', chapnav);
  const chapterEnd = (i) => (i + 1 < chapterStarts.length ? chapterStarts[i + 1] : outroPage.index);
  let reached = 0;
  let navBooted = false;

  function updatePager() {
    const kind = PAGES[cur].kind;
    chapnav.classList.toggle('is-hidden', kind === 'lock' || kind === 'final');
    if (unlocked && cur > reached) {
      reached = cur;
      if (!PREVIEW) store.set(STORE.reached, String(reached));
    }
    navItems.forEach((item, i) => {
      const start = chapterStarts[i], end = chapterEnd(i);
      const open = reached >= start;
      const wasLocked = item.classList.contains('is-locked');
      item.classList.toggle('is-locked', !open);
      item.disabled = !open;
      if (open && wasLocked && navBooted) {
        item.classList.remove('is-new');
        void item.offsetWidth;
        item.classList.add('is-new');
      }
      const active = cur >= start && cur < end;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-current', active ? 'true' : 'false');
    });
    navBooted = true;
  }

  /* ---------- transitions ---------- */

  const LIFT = 'cubic-bezier(.4,.05,.3,1)';
  const DROP = 'cubic-bezier(.3,.7,.25,1)';
  const RELEASE = 'cubic-bezier(.22,.7,.3,1)';

  // p: 0 → sheet in place, 1 → sheet gone. axis 'y' flies up, 'x' flies to the left.
  function sheet(p, axis) {
    if (reduceMotion.matches) return { transform: 'none', opacity: 1 - p };
    if (axis === 'x') {
      return { transform: `translate3d(${(-108 * p).toFixed(3)}%, ${(-6 * p).toFixed(3)}%, 0) rotate(${(-4 * p).toFixed(3)}deg)`, opacity: 1 - p * .55 };
    }
    return { transform: `translate3d(0, ${(-110 * p).toFixed(3)}%, 0) rotate(${(-2.5 * p).toFixed(3)}deg)`, opacity: 1 - p * .6 };
  }

  function applySheet(el, p, axis, back) {
    const s = sheet(back ? 1 - p : p, axis);
    el.style.transform = s.transform;
    el.style.opacity = back ? Math.min(1, .6 + p * .4) : s.opacity;
  }

  /**
   * Sets up a transition between two pages.
   * forward: `from` flies away and reveals `to` underneath.
   * back:    `to` drops in from above on top of `from`.
   */
  function begin(fromIdx, toIdx, forward, axis) {
    const from = PAGES[fromIdx], to = PAGES[toIdx];
    show(to);
    loadImages(to);
    attachVideos(to);
    const mover = forward ? from : to;
    const under = forward ? to : from;
    under.el.style.zIndex = 1;
    mover.el.style.zIndex = 3;
    mover.el.classList.add('is-moving');
    to.el.classList.remove('is-in');
    if (forward) { to.el.style.transform = ''; to.el.style.opacity = ''; }
    else applySheet(to.el, 0, axis, true);
    return { from, to, forward, axis, mover, a: from, b: to, p: 0, started: false };
  }

  function startReveal(t) {
    if (t.started) return;
    t.started = true;
    replayText(t.to);
    activate(t.to);
  }

  function finish(t) {
    clearTimeout(t.timer);
    if (t.webAnim) { t.webAnim.onfinish = null; t.webAnim.cancel(); t.webAnim = null; }
    deactivate(t.from);
    reset(t.from);
    const to = t.to;
    to.el.classList.remove('is-moving');
    to.el.style.transform = '';
    to.el.style.opacity = '';
    cur = to.index;
    prime(cur);
    anim = null;
    if (cur > 0 && !PREVIEW) store.set(STORE.page, String(cur));
    syncMedia(cur);
    updatePager();
  }

  function revert(t) {
    clearTimeout(t.timer);
    if (t.webAnim) { t.webAnim.onfinish = null; t.webAnim.cancel(); t.webAnim = null; }
    const { from, to } = t;
    if (t.started) deactivate(to);
    reset(to);
    from.el.classList.remove('is-moving');
    from.el.style.transform = '';
    from.el.style.opacity = '';
    anim = null;
    prime(cur);
  }

  function run(t, target, { duration, easing }) {
    const el = t.mover.el;
    const back = !t.forward;
    const fromState = { transform: el.style.transform || sheet(back ? 1 : 0, t.axis).transform, opacity: el.style.opacity || (back ? .6 : 1) };
    const end = back ? (target === 1 ? { transform: 'none', opacity: 1 } : { ...sheet(1, t.axis), opacity: .6 })
      : (target === 1 ? { ...sheet(1, t.axis), opacity: 0 } : { transform: 'none', opacity: 1 });
    el.style.transform = end.transform;
    el.style.opacity = end.opacity;
    const wa = el.animate([fromState, end], { duration, easing, fill: 'both' });
    t.webAnim = wa;
    t.target = target;
    const done = () => { clearTimeout(t.timer); if (anim === t) (target === 1 ? finish(t) : revert(t)); };
    wa.onfinish = done;
    clearTimeout(t.timer);
    t.timer = setTimeout(done, duration + 150);   // safety net if the timeline is throttled
  }

  function settle() {
    if (!anim) return;
    const t = anim;
    if (t.target !== 1) revert(t);
    else { startReveal(t); finish(t); }
  }

  function go(toIdx, { forceForward = false } = {}) {
    settle();
    if (toIdx < firstPage() || toIdx > LAST || toIdx === cur) return false;
    if (!unlocked && toIdx > 0) return false;
    const forward = forceForward || toIdx > cur;
    const t = begin(cur, toIdx, forward, 'y');
    anim = t;
    startReveal(t);
    const reduced = reduceMotion.matches;
    run(t, 1, { duration: reduced ? 420 : 900, easing: reduced ? 'ease' : (forward ? LIFT : DROP) });
    syncMedia(toIdx);
    return true;
  }

  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);

  /* ---------- gestures ---------- */

  let g = null;

  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest('input, button, a, label, .viewer, .is-playable .card')) return;
    if (document.activeElement && document.activeElement.tagName === 'INPUT') {
      document.activeElement.blur();
      return;
    }
    if (anim && anim.webAnim) {
      const timing = anim.webAnim.effect.getComputedTiming();
      if ((timing.progress || 0) < .45) return;   // let the sheet fly, ignore the double tap
    }
    settle();
    g = { id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: performance.now(), axis: null, t: null, hist: [], rubber: false };
  });

  stage.addEventListener('pointermove', (e) => {
    if (!g || e.pointerId !== g.id) return;
    const dx = e.clientX - g.x0, dy = e.clientY - g.y0;
    if (!g.axis) {
      if (Math.hypot(dx, dy) < 10) return;
      g.axis = Math.abs(dy) >= Math.abs(dx) ? 'y' : 'x';
      const d = g.axis === 'y' ? dy : dx;
      const forward = d < 0;
      const target = cur + (forward ? 1 : -1);
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
      if (target < firstPage() || target > LAST || !unlocked) {
        g.rubber = true;
        PAGES[cur].el.classList.add('is-moving');
      } else {
        g.t = begin(cur, target, forward, g.axis);
        anim = g.t;
      }
    }
    const d = g.axis === 'y' ? dy : dx;
    const size = g.axis === 'y' ? stage.clientHeight : stage.clientWidth;
    const now = performance.now();
    g.hist.push({ t: now, d });
    while (g.hist.length > 2 && now - g.hist[0].t > 90) g.hist.shift();

    if (g.rubber) {
      const r = d / (1 + Math.abs(d) / 60) * .5;
      PAGES[cur].el.style.transform = g.axis === 'y' ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)`;
      return;
    }
    const t = g.t;
    const p = clamp((t.forward ? -d : d) / (size * .82), 0, 1);
    t.p = p;
    if (t.forward) {
      applySheet(t.mover.el, p, g.axis, false);
    } else {
      applySheet(t.mover.el, p, g.axis, true);
    }
    if (p > .1) startReveal(t);
  });

  function release(e, cancelled) {
    if (!g || (e && e.pointerId !== g.id)) return;
    const gs = g;
    g = null;
    if (!gs.axis) {
      if (!cancelled) tap(e);
      return;
    }
    if (gs.rubber) {
      const el = PAGES[cur].el;
      const from = el.style.transform;
      el.style.transform = '';
      const wa = el.animate([{ transform: from }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.3,1.4,.5,1)' });
      wa.onfinish = () => el.classList.remove('is-moving');
      return;
    }
    const t = gs.t;
    const h = gs.hist;
    let v = 0;
    if (h.length > 1) {
      const a = h[0], b = h[h.length - 1];
      v = (b.d - a.d) / Math.max(1, b.t - a.t);       // px per ms
    }
    const dirV = t.forward ? -v : v;                  // positive = towards completion
    const complete = !cancelled && (t.p > .3 || (dirV > .35 && t.p > .03));
    if (complete) {
      startReveal(t);
      const remain = 1 - t.p;
      const duration = clamp(Math.round(remain * 760 / Math.max(1, dirV * 1.2)), 240, 760);
      run(t, 1, { duration, easing: RELEASE });
      syncMedia(t.to.index);
    } else {
      run(t, 0, { duration: clamp(Math.round(t.p * 900), 220, 520), easing: 'cubic-bezier(.3,1.15,.5,1)' });
    }
  }

  stage.addEventListener('pointerup', (e) => release(e, false));
  stage.addEventListener('pointercancel', (e) => release(e, true));

  function tap(e) {
    if (!unlocked) return;
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    if (x < .32) prev(); else next();
  }

  stage.addEventListener('click', (e) => {
    const chap = e.target.closest('[data-chapter]');
    if (chap && !chap.disabled) { go(chapterStarts[+chap.dataset.chapter]); return; }
    const btn = e.target.closest('[data-nav]');
    if (!btn) return;
    go(chapterStarts[+btn.dataset.nav], { forceForward: true });
  });

  // trackpad / mouse wheel: one flip per gesture, inertia is swallowed
  let wheelAcc = 0, wheelUntil = 0, wheelLast = 0;
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!unlocked || viewerOpen()) return;
    const now = performance.now();
    const quiet = now - wheelLast > 180;
    wheelLast = now;
    if (now < wheelUntil || (!quiet && wheelAcc === null)) return;
    if (wheelAcc === null) wheelAcc = 0;
    const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    wheelAcc += e.deltaMode === 1 ? d * 16 : d;
    if (Math.abs(wheelAcc) > 45) {
      if (wheelAcc > 0) next(); else prev();
      wheelAcc = null;
      wheelUntil = now + 850;
    }
  }, { passive: false });

  document.addEventListener('keydown', (e) => {
    if (viewerOpen() && e.key === 'Escape') { closeViewer(); return; }
    if (e.target.tagName === 'INPUT' || !unlocked || viewerOpen()) return;
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  });

  /* ---------- heart: drag, swap, open, shuffle ---------- */

  const heartEl = $('.heart', finalPage.el);
  const cardEls = $$('.card', heartEl);
  const viewer = $('.viewer', finalPage.el);
  const viewerCard = $('.viewer__card', viewer);
  const viewerImg = $('.viewer__photo img', viewer);
  let viewerFrom = null;

  function paintCenter(el) {
    const n = +el.dataset.img;
    el.style.backgroundImage = `url(assets/img/${pad2(n)}.${EXT})`;
  }

  function placeCard(el, slotIndex) {
    const slot = HEART.slots[slotIndex];
    const c = HEART.cards[+el.dataset.card];
    c.slot = slotIndex;
    el.style.setProperty('--l', slot.l.toFixed(4));
    el.style.setProperty('--t', slot.t.toFixed(4));
    el.style.setProperty('--s', slot.s);
    el.style.zIndex = slot.z;
    el.classList.toggle('is-center', !!slot.center);
    if (slot.center) paintCenter(el); else el.style.backgroundImage = '';
  }

  // FLIP: move a card into a new slot starting from where it is on screen right now
  function flyTo(el, slotIndex, { delay = 0, duration = 560 } = {}) {
    const before = el.getBoundingClientRect();
    el.classList.add('is-flying');
    el.style.transform = '';
    placeCard(el, slotIndex);
    const after = el.getBoundingClientRect();
    const r1 = HEART.cards[+el.dataset.card].r1;
    const dx = (before.left + before.width / 2) - (after.left + after.width / 2);
    const dy = (before.top + before.height / 2) - (after.top + after.height / 2);
    const k = before.width / after.width;
    const wa = el.animate([
      { transform: `translate(${dx}px, ${dy}px) rotate(${r1}deg) scale(${k})` },
      { transform: `rotate(${r1}deg)` }
    ], { duration, delay, easing: 'cubic-bezier(.2,.9,.25,1.08)', fill: 'backwards' });
    wa.onfinish = () => el.classList.remove('is-flying');
  }

  let cd = null;   // card drag state

  heartEl.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.card');
    if (!el || !finalPage.el.classList.contains('is-playable') || cd) return;
    e.preventDefault();
    try { el.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
    cd = { el, id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: performance.now(), moved: false, target: null };
  });

  heartEl.addEventListener('pointermove', (e) => {
    if (!cd || e.pointerId !== cd.id) return;
    const dx = e.clientX - cd.x0, dy = e.clientY - cd.y0;
    if (!cd.moved) {
      if (Math.hypot(dx, dy) < 7) return;
      cd.moved = true;
      cd.el.classList.add('is-dragging');
    }
    const r1 = HEART.cards[+cd.el.dataset.card].r1;
    cd.el.style.transform = `translate(${dx}px, ${dy}px) rotate(${r1 * .3}deg) scale(1.18)`;
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const target = under && under.closest && under.closest('.card');
    const t = target && target !== cd.el && heartEl.contains(target) ? target : null;
    if (t !== cd.target) {
      if (cd.target) cd.target.classList.remove('is-target');
      if (t) t.classList.add('is-target');
      cd.target = t;
    }
  });

  function endCardDrag(e, cancelled) {
    if (!cd || e.pointerId !== cd.id) return;
    const { el, target, moved } = cd;
    cd = null;
    el.classList.remove('is-dragging');
    if (target) target.classList.remove('is-target');
    if (!moved) {
      el.style.transform = '';
      if (!cancelled) openViewer(el);
      return;
    }
    const mySlot = HEART.cards[+el.dataset.card].slot;
    if (target && !cancelled) {
      const theirSlot = HEART.cards[+target.dataset.card].slot;
      flyTo(target, mySlot, { duration: 520 });
      flyTo(el, theirSlot, { duration: 480 });
    } else {
      flyTo(el, mySlot, { duration: 520 });
    }
  }
  heartEl.addEventListener('pointerup', (e) => endCardDrag(e, false));
  heartEl.addEventListener('pointercancel', (e) => endCardDrag(e, true));

  $('[data-shuffle]', heartEl).addEventListener('click', () => {
    if (!finalPage.el.classList.contains('is-playable')) return;
    const order = cardEls.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    cardEls.forEach((el, i) => flyTo(el, order[i], { delay: i * 9, duration: 760 }));
  });

  const viewerOpen = () => !viewer.hidden;

  function openViewer(cardEl) {
    const n = +cardEl.dataset.img;
    const m = MOMENTS[n] || {};
    viewerFrom = cardEl;
    $('.viewer__kicker', viewer).textContent = m.chapter || '';
    $('.viewer__text', viewer).textContent = m.plain ? m.text : `…${lower(m.text || '')}`;
    $('.viewer__go', viewer).dataset.page = m.page;
    const photo = $('.viewer__photo', viewer);
    photo.style.backgroundImage = `var(--sprite)`;
    photo.style.backgroundPosition = spritePos(n);
    viewerImg.classList.remove('is-loaded');
    viewerImg.onload = () => viewerImg.classList.add('is-loaded');
    viewerImg.src = `assets/img/${pad2(n)}.${EXT}`;
    viewer.hidden = false;
    cardEl.classList.add('is-open');

    const from = cardEl.getBoundingClientRect();
    const to = viewerCard.getBoundingClientRect();
    const toPhoto = photo.getBoundingClientRect();
    const k = from.width / toPhoto.width;
    const dx = (from.left + from.width / 2) - (toPhoto.left + toPhoto.width / 2);
    const dy = (from.top + from.height / 2) - (toPhoto.top + toPhoto.height / 2);
    const ox = toPhoto.left + toPhoto.width / 2 - to.left, oy = toPhoto.top + toPhoto.height / 2 - to.top;
    viewerCard.style.transformOrigin = `${ox}px ${oy}px`;
    const r1 = HEART.cards[+cardEl.dataset.card].r1;
    viewerCard.animate([
      { transform: `translate(${dx}px, ${dy}px) scale(${k}) rotate(${r1}deg)`, opacity: .4 },
      { transform: 'rotate(-1.2deg)', opacity: 1 }
    ], { duration: 620, easing: 'cubic-bezier(.2,.85,.25,1)', fill: 'both' });
    $('.viewer__veil', viewer).animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, fill: 'both' });
    $('figcaption', viewer).animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 280, easing: 'cubic-bezier(.2,.8,.25,1)', fill: 'both' });
  }

  function closeViewer(instant) {
    if (!viewerOpen()) return;
    const cardEl = viewerFrom;
    const hide = () => { viewer.hidden = true; if (cardEl) cardEl.classList.remove('is-open'); viewerCard.getAnimations().forEach((a) => a.cancel()); };
    if (instant || !cardEl) { hide(); return; }
    const photo = $('.viewer__photo', viewer);
    const from = cardEl.getBoundingClientRect();
    const toPhoto = photo.getBoundingClientRect();
    const k = from.width / toPhoto.width;
    const dx = (from.left + from.width / 2) - (toPhoto.left + toPhoto.width / 2);
    const dy = (from.top + from.height / 2) - (toPhoto.top + toPhoto.height / 2);
    const r1 = HEART.cards[+cardEl.dataset.card].r1;
    $('.viewer__veil', viewer).animate([{ opacity: 1 }, { opacity: 0 }], { duration: 360, fill: 'forwards' });
    const wa = viewerCard.animate([
      { transform: 'rotate(-1.2deg)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) scale(${k}) rotate(${r1}deg)`, opacity: .2 }
    ], { duration: 440, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
    wa.onfinish = hide;
  }

  viewer.addEventListener('click', (e) => {
    const goBtn = e.target.closest('.viewer__go');
    if (goBtn) {
      const page = +goBtn.dataset.page;
      closeViewer(true);
      go(page, { forceForward: true });
      return;
    }
    closeViewer();
  });

  /* ---------- lock ---------- */

  function setupLock() {
    const p = PAGES[0];
    const form = $('.code', p.el);
    const inputs = $$('input', form);
    const hint = $('.lock__hint', p.el);
    let fails = 0;

    const say = (text, ok) => {
      hint.classList.add('is-swap');
      setTimeout(() => {
        hint.textContent = text;
        hint.classList.toggle('is-ok', !!ok);
        hint.classList.remove('is-swap');
      }, 220);
    };

    const fill = (digits) => {
      const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)];
      inputs.forEach((inp, i) => { inp.value = parts[i] || ''; });
    };

    const check = () => {
      const [d, m, y] = inputs.map((i) => i.value);
      if (y.length < 4 || !d || !m) return;
      const code = d.padStart(2, '0') + m.padStart(2, '0') + y;
      if (code === SECRET) {
        form.classList.add('is-ok');
        inputs.forEach((i) => { i.value = i === inputs[2] ? i.value : i.value.padStart(2, '0'); i.readOnly = true; });
        say('так. це наш день', true);
        document.activeElement && document.activeElement.blur();
        unlocked = true;
        store.set(STORE.unlocked, '1');
        prime(0);
        PAGES.slice(1, 4).forEach((pg) => loadImages(pg, 'high'));
        attachVideos(PAGES[1]);
        setTimeout(() => {
          window.scrollTo(0, 0);
          go(1);
        }, 1100);
      } else {
        fails++;
        if (!reduceMotion.matches) {
          form.animate([
            { transform: 'translateX(0)' }, { transform: 'translateX(-11px)' }, { transform: 'translateX(9px)' },
            { transform: 'translateX(-6px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }
          ], { duration: 520, easing: 'cubic-bezier(.36,.07,.19,.97)' });
        }
        say(fails === 1 ? 'майже… спробуй ще раз' : 'підказка: це наша річниця');
        inputs[0].focus();
        setTimeout(() => inputs.forEach((i) => { i.value = ''; }), 360);
      }
    };

    inputs.forEach((inp, i) => {
      inp.addEventListener('input', () => {
        const digits = inp.value.replace(/\D/g, '');
        if (digits.length > inp.maxLength && digits.length >= 8) { fill(digits); inputs[2].focus(); check(); return; }
        inp.value = digits.slice(0, inp.maxLength);
        if (inp.value.length === inp.maxLength && i < inputs.length - 1) inputs[i + 1].focus();
        check();
      });
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !inp.value && i > 0) { inputs[i - 1].focus(); }
        if (e.key === 'Enter') { e.preventDefault(); if (i < inputs.length - 1) inputs[i + 1].focus(); else check(); }
      });
      inp.addEventListener('paste', (e) => {
        const text = (e.clipboardData || window.clipboardData).getData('text') || '';
        const digits = text.replace(/\D/g, '');
        if (digits.length >= 8) { e.preventDefault(); fill(digits); check(); }
      });
      inp.addEventListener('blur', () => { setTimeout(() => { if (!document.activeElement || document.activeElement.tagName !== 'INPUT') window.scrollTo(0, 0); }, 60); });
    });
    form.addEventListener('submit', (e) => { e.preventDefault(); check(); });
  }

  /* ---------- boot ---------- */

  function onResize() {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    PAGES.forEach((p) => { p.fitKey = ''; if (p.el.classList.contains('is-live')) fit(p); });
  }

  let resizeTimer = 0;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(onResize, 120); });

  // no pinch-zoom inside the book
  document.addEventListener('gesturestart', (e) => e.preventDefault());

  document.addEventListener('visibilitychange', () => {
    const p = PAGES[cur];
    if (p) playVideos(p, !document.hidden);
  });

  const fontsReady = document.fonts && document.fonts.ready
    ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))])
    : Promise.resolve();

  setupLock();

  Promise.all([fontsReady, avifProbe]).then(() => {
    const saved = parseInt((PREVIEW && QUERY.get('p')) || store.get(STORE.page) || '1', 10);
    reached = PREVIEW ? LAST : Math.max(parseInt(store.get(STORE.reached) || '0', 10) || 0, unlocked ? saved : 0);
    cur = unlocked ? clamp(Number.isFinite(saved) ? saved : 1, 1, LAST) : 0;
    const p = PAGES[cur];
    show(p);
    prime(cur);
    syncMedia(cur);
    loadImages(p);
    let booted = false;
    const bootPage = () => {
      if (booted) return;
      booted = true;
      replayText(p);
      activate(p);
      updatePager();
    };
    requestAnimationFrame(bootPage);
    setTimeout(bootPage, 120);
    if (!unlocked) PAGES.slice(1, 3).forEach((pg) => loadImages(pg));
    setTimeout(() => warm(spriteUrl()), unlocked ? 800 : 2500);
  });
})();
