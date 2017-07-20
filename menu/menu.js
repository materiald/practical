let menu = new mdc.menu.MDCSimpleMenu(document.querySelector('.m1'));
// Add event listener to some button to toggle the menu on and off.
document.querySelector('.some-button').addEventListener('click', () => menu.open = !menu.open);


let menu2 = new mdc.menu.MDCSimpleMenu(document.querySelector('.m2'));
document.querySelector('.some-button2').addEventListener('click', () => menu2.open = !menu2.open);

let menu3 = new mdc.menu.MDCSimpleMenu(document.querySelector('.m3'));
document.querySelector('.some-button3').addEventListener('click', () => menu3.open = !menu3.open);

let menu4 = new mdc.menu.MDCSimpleMenu(document.querySelector('.m4'));
document.querySelector('.some-button4').addEventListener('click', () => menu4.open = !menu4.open);

let menu5 = new mdc.menu.MDCSimpleMenu(document.querySelector('.m5'));
document.querySelector('.some-button5').addEventListener('click', () => menu5.open = !menu5.open);

// Analyse current state.
console.log('The menu is ' + (menu2.open ? 'open' : 'closed'));
// // Open menu.
// menu2.open = true;
// // Close menu.
// menu2.open = false;