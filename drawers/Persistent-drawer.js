
// let drawer = mdc.drawer.MDCPersistentDrawer.attachTo(document.querySelector('.mdc-persistent-drawer'));
// document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

let drawer = new mdc.drawer.MDCPersistentDrawer(document.querySelector('.mdc-persistent-drawer'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);



