const routes = {
  '/':        () => import('./views/home.js'),
  '/home':        () => import('./views/home2.js'),
  '/services':  () => import('./views/services.js'),
  '/team':     () => import('./views/team.js'),
  '/kontakt':  () => import('./views/contact.js'),


};

const app = document.getElementById('app');
const cache = new Map();                 // schon geladene Module merken

async function render() {
  const path = location.hash.slice(1) || '/';
  const load = routes[path] || routes['/'];
  const mod  = cache.get(path) || (await load().then(m => {
                    cache.set(path, m.default); return m.default;
               }));
  app.innerHTML = await mod();           // Modul liefert HTML‑String oder Promise
  app.querySelector('h1')?.focus();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
