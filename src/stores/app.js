import { writable } from 'svelte/store';
import browser from "webextension-polyfill";

export const notesApp = writable({
    enabled: false,
    boxes: [],
});

browser.storage.local.get('notesApp').then((data) => {
    if (data.notesApp) {
        notesApp.set({...data.notesApp});
    }
});

notesApp.subscribe(async (data) => {
    console.log('store', data);
    if (data.enabled) {
        await browser.storage.local.set({ notesApp: { ...data, enabled: true } });
    } else {
        await browser.storage.local.set({ notesApp: { ...data, enabled: false } });
    }
})
