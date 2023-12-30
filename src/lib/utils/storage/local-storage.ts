import { browser } from '$app/environment';
import * as storageHelpers from './index';

/* storage defaults to local storage */

let storage: Storage | null = null;
if (browser) {
	storage = (localStorage || null) as Storage;
}

export const getItemObject = (key: string) => storageHelpers.getItemObject(key, storage);

export const setItemObject = (key: string, value: Record<string, any>) =>
	storageHelpers.setItemObject(key, value, storage);

export const updateItemObject = (key: string, value: Record<string, any>) =>
	storageHelpers.updateItemObject(key, value, storage);

export const removeItem = (key: string) => storageHelpers.removeItem(key, storage);
