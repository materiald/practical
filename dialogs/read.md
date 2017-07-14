difference using es6 modules , manual
-

```javascript
import {MDCDialog, MDCDialogFoundation, util} from '@material/dialog';
let dialog = MDCDialog.attachTo(document.querySelector('#my-mdc-dialog'));
```
import `@material/dialog` and use `MDCDialog.attachTo`

to make this work make need module loaders  
`webpack dialogs/dialogs.js dialogs/dialogs-web.js` if using webpack or create config file for webpack .. 

---

```javascript
var dialog = new mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));
```

here `material-components-web.js` is added in html file,  use `mdc.dialog.MDCDialog`