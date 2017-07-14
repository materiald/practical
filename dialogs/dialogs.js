
// es6 modules - using - @material/dialog
// import {MDCDialog, MDCDialogFoundation, util} from '@material/dialog';
// let dialog = MDCDialog.attachTo(document.querySelector('#my-mdc-dialog'));

// document.querySelector('.default-dialog-activation').addEventListener('click', function (evt) {
// //   dialog.lastFocusedTarget = evt.target;
//   dialog.show();
// })



// using - material-components-web.j
var dialog = new mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));

dialog.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

dialog.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})

document.querySelector('.default-dialog-activation').addEventListener('click', function (evt) {
  dialog.lastFocusedTarget = evt.target;
  dialog.show();
})





var dialog2 = new mdc.dialog.MDCDialog(document.querySelector('#mdc-dialog-with-list'));

dialog2.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

dialog2.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})

document.querySelector('.scrollable-dialog').addEventListener('click', function (evt) {
  dialog2.lastFocusedTarget = evt.target;
  dialog2.show();
})