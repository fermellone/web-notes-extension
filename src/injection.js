import browser from "webextension-polyfill";

import { addSquare } from './utils/functions/boxes';

browser.storage.local.get('notesApp').then((data) => {
  if (data.notesApp.enabled) {
    document.body.addEventListener('click', addSquare);
  }
}).catch((error) => {
  console.log('injection error: ', error);
});

(function setEventListeners() {
  browser.storage.onChanged.addListener((changes, areaName) => {
    if (!changes.notesApp) {
      console.error('No changes in notesApp');
      return;
    }

    if (changes.notesApp.newValue.enabled) {
      document.body.addEventListener('click', addSquare);
    } else {
      document.body.removeEventListener('click', addSquare);
    }
  });
})();