import { registerApplication, start } from 'single-spa'

registerApplication(
    'home',
    () => import('./src/component/home/home.app.js'),
    () => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

registerApplication(
    'navbar',
    () => import('./src/component/navbar/navbar.app.js'),
    () => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/navbar')
);

start();