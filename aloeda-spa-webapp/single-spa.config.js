import { registerApplication, start } from 'single-spa'

registerApplication(
    'home',
    () => import('./src/components/home/home.js'),
    () => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

registerApplication(
    'navbar',
    () => import('./src/components/navbar/navbar.app.js'),
    () => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/navbar')
);

start();