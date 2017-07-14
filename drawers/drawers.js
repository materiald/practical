var drawerEl = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerEl);
document.querySelector('.menu').addEventListener('click', function () {
    drawer.open = !drawer.open;
});
drawerEl.addEventListener('MDCTemporaryDrawer:open', function () {
    console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function () {
    console.log('Received MDCTemporaryDrawer:close');
});

// or


// let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
// document.querySelector('.menu').addEventListener('click', () => drawer.open = true);


// var drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector("#page__drawer"));
// document.querySelector("#drawer-nav-button").addEventListener("click", function() { drawer.open = true; });










