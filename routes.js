const routes = {
  '/':        () => import('./views/under_construction.js'),
  '/Startseite':        () => import('./views/Startseite.js'),
  '/Leistungen':  () => import('./views/Leistungen.js'),
  '/Team':     () => import('./views/Team.js'),
  '/Kontakt':  () => import('./views/Kontakt.js'),
  '/Impressum':  () => import('./views/Impressum.js'),
  '/Datenschutz':  () => import('./views/Datenschutz.js'),

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
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
