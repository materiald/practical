// import {MDCDialog, MDCDialogFoundation, util} from '@material/dialog';
// mdc.dialog.MDCDialog.attachTo(document.querySelector('#my-mdc-dialog'));



// manual installation 
// const dialog2 = new MDCDialog(document.querySelector('#my-mdc-dialog'));


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