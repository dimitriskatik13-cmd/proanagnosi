/* ─────────────────────────────────────────────────────────────────────────────
   Service worker — offline λειτουργία και ενημερώσεις για το «Προανάγνωση».
   Στην εγκατάσταση αποθηκεύει τη σελίδα, τον κώδικα, τα δεδομένα και όλες τις
   εικόνες (2,8 MB). Οι γραμματοσειρές Google έρχονται από το δίκτυο, με
   εφεδρικές του συστήματος όταν δεν υπάρχει σύνδεση. Η σελίδα ζητείται πρώτα από το δίκτυο, ώστε μια
   νέα έκδοση να φαίνεται αμέσως, και από την αποθήκη όταν δεν υπάρχει σύνδεση.
   Ανεβαίνει το VERSION σε κάθε δημοσίευση· η λίστα ASSETS καλύπτει όλα τα
   δημόσια αρχεία και ελέγχεται πριν από κάθε δημοσίευση.
   ───────────────────────────────────────────────────────────────────────────── */
const VERSION = 'proanagnosi-v1';
const CACHE = `synoida-proanagnosi-${VERSION}`;
const RUNTIME = 'synoida-proanagnosi-runtime';
const NETWORK_WAIT_MS = 4000;

const ASSETS = [
  './',
  'assets/cards/lo-hill.png',
  'assets/cards/na-sailor.png',
  'assets/cards/no-coin.png',
  'assets/cards/re-chickpeas.png',
  'assets/cards/ro-clock.png',
  'assets/cards/se-hair-dryer.png',
  'assets/cards/the-thermometer.png',
  'assets/cards/thi-case.png',
  'assets/cards/xo-elf.png',
  'assets/cards/zi-scale.png',
  'assets/cards/zo-belt.png',
  'assets/illustrations-200/apron.webp',
  'assets/illustrations-200/arrow.webp',
  'assets/illustrations-200/attic.webp',
  'assets/illustrations-200/baby.webp',
  'assets/illustrations-200/basin.webp',
  'assets/illustrations-200/belt.webp',
  'assets/illustrations-200/bison.webp',
  'assets/illustrations-200/bow.webp',
  'assets/illustrations-200/bread.webp',
  'assets/illustrations-200/bubble.webp',
  'assets/illustrations-200/butter.webp',
  'assets/illustrations-200/candle.webp',
  'assets/illustrations-200/cardigan.webp',
  'assets/illustrations-200/chickpea.webp',
  'assets/illustrations-200/clock.webp',
  'assets/illustrations-200/coin.webp',
  'assets/illustrations-200/colander.webp',
  'assets/illustrations-200/cork.webp',
  'assets/illustrations-200/crane.webp',
  'assets/illustrations-200/dance.webp',
  'assets/illustrations-200/deckchair.webp',
  'assets/illustrations-200/dinosaur.webp',
  'assets/illustrations-200/dome.webp',
  'assets/illustrations-200/duck.webp',
  'assets/illustrations-200/dwarf.webp',
  'assets/illustrations-200/eggplant.webp',
  'assets/illustrations-200/elephant.webp',
  'assets/illustrations-200/elf.webp',
  'assets/illustrations-200/fairy.webp',
  'assets/illustrations-200/fork-r4.webp',
  'assets/illustrations-200/fridge.webp',
  'assets/illustrations-200/frog.webp',
  'assets/illustrations-200/goat.webp',
  'assets/illustrations-200/gorilla.webp',
  'assets/illustrations-200/guitar.webp',
  'assets/illustrations-200/hairdryer.webp',
  'assets/illustrations-200/harbor.webp',
  'assets/illustrations-200/hill-r4b.webp',
  'assets/illustrations-200/horse.webp',
  'assets/illustrations-200/hose.webp',
  'assets/illustrations-200/hotel.webp',
  'assets/illustrations-200/iron-r4.webp',
  'assets/illustrations-200/juice.webp',
  'assets/illustrations-200/leaf.webp',
  'assets/illustrations-200/lettuce.webp',
  'assets/illustrations-200/melon.webp',
  'assets/illustrations-200/monster.webp',
  'assets/illustrations-200/mustache.webp',
  'assets/illustrations-200/nest.webp',
  'assets/illustrations-200/nose.webp',
  'assets/illustrations-200/padlock.webp',
  'assets/illustrations-200/pig-r7.webp',
  'assets/illustrations-200/radio.webp',
  'assets/illustrations-200/raven.webp',
  'assets/illustrations-200/rhino.webp',
  'assets/illustrations-200/rocket.webp',
  'assets/illustrations-200/ruler.webp',
  'assets/illustrations-200/scale.webp',
  'assets/illustrations-200/sea.webp',
  'assets/illustrations-200/sesame-ring.webp',
  'assets/illustrations-200/shirt.webp',
  'assets/illustrations-200/shrimp.webp',
  'assets/illustrations-200/sky.webp',
  'assets/illustrations-200/snail.webp',
  'assets/illustrations-200/snowflake.webp',
  'assets/illustrations-200/sofa.webp',
  'assets/illustrations-200/spear.webp',
  'assets/illustrations-200/sprayer.webp',
  'assets/illustrations-200/steering-wheel.webp',
  'assets/illustrations-200/straw-mat.webp',
  'assets/illustrations-200/sun.webp',
  'assets/illustrations-200/swallow.webp',
  'assets/illustrations-200/taxi.webp',
  'assets/illustrations-200/teacher.webp',
  'assets/illustrations-200/theater.webp',
  'assets/illustrations-200/treasure-r4.webp',
  'assets/illustrations-200/tree-r7.webp',
  'assets/illustrations-200/tulip.webp',
  'assets/illustrations-200/umbrella.webp',
  'assets/illustrations-200/volleyball.webp',
  'assets/illustrations-200/waterlily.webp',
  'assets/illustrations-200/whale.webp',
  'assets/illustrations-200/wood.webp',
  'assets/illustrations-200/work.webp',
  'assets/illustrations-200/zebra.webp',
  'assets/illustrations/apron.webp',
  'assets/illustrations/arrow.webp',
  'assets/illustrations/attic.webp',
  'assets/illustrations/baby.webp',
  'assets/illustrations/basin.webp',
  'assets/illustrations/belt.webp',
  'assets/illustrations/bison.webp',
  'assets/illustrations/bow.webp',
  'assets/illustrations/bread.webp',
  'assets/illustrations/bubble.webp',
  'assets/illustrations/butter.webp',
  'assets/illustrations/candle.webp',
  'assets/illustrations/cardigan.webp',
  'assets/illustrations/chickpea.webp',
  'assets/illustrations/clock.webp',
  'assets/illustrations/coin.webp',
  'assets/illustrations/colander.webp',
  'assets/illustrations/cork.webp',
  'assets/illustrations/crane.webp',
  'assets/illustrations/crutch.webp',
  'assets/illustrations/dance.webp',
  'assets/illustrations/deckchair.webp',
  'assets/illustrations/dinosaur.webp',
  'assets/illustrations/dome.webp',
  'assets/illustrations/duck.webp',
  'assets/illustrations/dwarf.webp',
  'assets/illustrations/eggplant.webp',
  'assets/illustrations/elephant.webp',
  'assets/illustrations/elf.webp',
  'assets/illustrations/fairy.webp',
  'assets/illustrations/fork-r4.webp',
  'assets/illustrations/fridge.webp',
  'assets/illustrations/frog.webp',
  'assets/illustrations/goat.webp',
  'assets/illustrations/gorilla.webp',
  'assets/illustrations/guitar.webp',
  'assets/illustrations/hairdryer.webp',
  'assets/illustrations/harbor.webp',
  'assets/illustrations/hill-r4b.webp',
  'assets/illustrations/horse.webp',
  'assets/illustrations/hose.webp',
  'assets/illustrations/hotel.webp',
  'assets/illustrations/iron-r4.webp',
  'assets/illustrations/juice.webp',
  'assets/illustrations/leaf.webp',
  'assets/illustrations/lettuce.webp',
  'assets/illustrations/melon.webp',
  'assets/illustrations/monster.webp',
  'assets/illustrations/mortar.webp',
  'assets/illustrations/mustache.webp',
  'assets/illustrations/nest.webp',
  'assets/illustrations/nose.webp',
  'assets/illustrations/padlock.webp',
  'assets/illustrations/pig-r7.webp',
  'assets/illustrations/radio.webp',
  'assets/illustrations/raven.webp',
  'assets/illustrations/rhino.webp',
  'assets/illustrations/rocket.webp',
  'assets/illustrations/ruler.webp',
  'assets/illustrations/scale.webp',
  'assets/illustrations/sea.webp',
  'assets/illustrations/sesame-ring.webp',
  'assets/illustrations/shirt.webp',
  'assets/illustrations/shrimp.webp',
  'assets/illustrations/sky.webp',
  'assets/illustrations/snail.webp',
  'assets/illustrations/snowflake.webp',
  'assets/illustrations/sofa.webp',
  'assets/illustrations/spear.webp',
  'assets/illustrations/sprayer.webp',
  'assets/illustrations/steering-wheel.webp',
  'assets/illustrations/straw-mat.webp',
  'assets/illustrations/sun.webp',
  'assets/illustrations/swallow.webp',
  'assets/illustrations/taxi.webp',
  'assets/illustrations/teacher.webp',
  'assets/illustrations/theater.webp',
  'assets/illustrations/treasure-r4.webp',
  'assets/illustrations/tree-r7.webp',
  'assets/illustrations/tulip.webp',
  'assets/illustrations/umbrella.webp',
  'assets/illustrations/volleyball.webp',
  'assets/illustrations/waterlily.webp',
  'assets/illustrations/whale.webp',
  'assets/illustrations/wood.webp',
  'assets/illustrations/work.webp',
  'assets/illustrations/zebra.webp',
  'data/content.js?v=2026-09-12-cues-illustrations-r7',
  'favicon.png',
  'index.html',
  'src/app.js?v=20261006-r10',
  'src/updates.js?v=20261006-r10',
  'synoida-logo.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // cache:'no-cache' → πάντα επαλήθευση με τον server, όχι από την HTTP cache.
      .then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: 'no-cache' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('synoida-proanagnosi-') && k !== CACHE && k !== RUNTIME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.cache === 'no-store' || req.cache === 'reload') return;
  if (req.mode === 'navigate') {
    // Δίκτυο πρώτα, με όριο αναμονής· αλλιώς η αποθηκευμένη σελίδα.
    e.respondWith(
      Promise.race([fetch(req), timeout(NETWORK_WAIT_MS)])
        .then((res) => (res && res.ok ? res : Promise.reject(new Error('offline'))))
        .catch(() => caches.match('index.html').then((hit) => hit || caches.match('./')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(RUNTIME).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    }))
  );
});
