import { writable } from 'svelte/store';

export const activePageViewTansition = writable<string | null>();
