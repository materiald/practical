import {MDCIconToggle} from '@material/icon-toggle';

MDCIconToggle.attachTo(document.querySelector('.mdc-icon-toggle'));
MDCIconToggle.attachTo(document.querySelector('.i2'));
MDCIconToggle.attachTo(document.querySelector('.i3'));


const iconEl = document.querySelector('.mdc-icon-toggle');
const status = document.getElementById('status');
iconEl.addEventListener('MDCIconToggle:change', ({detail}) => {
  status.textContent = `Icon Toggle is ${detail.isOn ? 'on' : 'off'}`;
});