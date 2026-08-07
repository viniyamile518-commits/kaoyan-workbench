// 考研工作台 Service Worker —— 离线缓存 + PWA 安装支持
const CACHE = 'ky-wb-v1';
const SHELL = [
  './',
  'index.html',
  'app.js',
  'app-memory.js',
  'app-planner.js',
  'style.css',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return; // 不拦截写请求（含 GitHub API 的 PUT 同步）

  const url = new URL(req.url);

  // 导航请求：网络优先，离线回退缓存首页
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('index.html', cp)); return r; })
        .catch(() => caches.match('index.html').then((m) => m || caches.match('./')))
    );
    return;
  }

  // 跨域 CDN（如 MathJax）：cache-first，支持离线渲染公式
  if (url.origin !== location.origin) {
    e.respondWith(
      caches.open(CACHE).then(async (c) => {
        const cached = await c.match(req);
        if (cached) return cached;
        try {
          const r = await fetch(req);
          c.put(req, r.clone());
          return r;
        } catch {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  // 同源静态资源（js/css/图片/题库/json）：stale-while-revalidate
  e.respondWith(
    caches.open(CACHE).then(async (c) => {
      const cached = await c.match(req);
      const network = fetch(req)
        .then((r) => { c.put(req, r.clone()); return r; })
        .catch(() => null);
      return cached || network;
    })
  );
});
