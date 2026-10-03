// Summit · service worker: la app abre y funciona sin conexión.
// Los datos se guardan en el dispositivo y se sincronizan con Supabase al volver la red.
const VERSION = 'summit-1.2.0';
const SHELL = [
  './', 'index.html', 'styles.css?v=1.2.0', 'app.js?v=1.2.0', 'config.js?v=1.2.0', 'supabase.min.js', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png', 'logo.svg',
  'figtree-latin-400-normal.woff2', 'figtree-latin-500-normal.woff2', 'figtree-latin-600-normal.woff2', 'figtree-latin-700-normal.woff2',
  'bricolage-grotesque-latin-600-normal.woff2', 'bricolage-grotesque-latin-700-normal.woff2',
  'ibm-plex-mono-latin-400-normal.woff2', 'ibm-plex-mono-latin-500-normal.woff2'
];

self.addEventListener('install', e => {
  // Cada archivo por separado: si uno falla, el resto queda guardado igualmente
  e.waitUntil(caches.open(VERSION)
    .then(c => Promise.all(SHELL.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => null))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('summit-') && k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const timeout = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms));

async function fromCache(req) {
  const c = await caches.open(VERSION);
  return (await c.match(req)) || (await c.match(req, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  const u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin) return; // Supabase y demás: siempre por red

  // Páginas: red con un límite de 3 s (para recibir actualizaciones); si no hay red o va lenta, la copia guardada
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const r = await Promise.race([fetch(req), timeout(3000)]);
        if (r && r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put('index.html', cp)); }
        return r;
      } catch (_) {
        const c = await caches.open(VERSION);
        return (await c.match('index.html')) || (await c.match('./')) || new Response('Summit no está disponible sin conexión todavía. Ábrela una vez con internet.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  // Archivos de la app: primero la copia guardada; si no está, red y se guarda
  e.respondWith((async () => {
    const hit = await fromCache(req);
    if (hit) return hit;
    try {
      const r = await fetch(req);
      if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); }
      return r;
    } catch (_) {
      return new Response('', { status: 504 });
    }
  })());
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});
