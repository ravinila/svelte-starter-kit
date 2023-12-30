import { browser } from '$app/environment';
import { isFunction } from '$lib/utils';

/* storage defaults to local storage */

export const getItemObject = (key: string, storage: Storage | null = null) => {
	try {
		if (browser) {
			const strg = (storage as Storage) || localStorage;
			if (isFunction(strg?.getItem)) {
				const data = JSON.parse(strg.getItem(key) || '{}');
				return data || {};
			}
		}
	} catch (ex) {
		console.error('Error on parsing json.');
		return {};
	}
};

export const setItemObject = (
	key: string,
	value: Record<string, any>,
	storage: Storage | null = null
) => {
	try {
		if (browser) {
			const strg = (storage as Storage) || localStorage;
			if (isFunction(strg?.setItem)) {
				value.createdAt = Date.now();
				strg.setItem(key, JSON.stringify(value));
			}
		}
	} catch (ex) {
		console.error('Error on setting json object.');
	}
};

export const updateItemObject = (
	key: string,
	value: Record<string, any>,
	storage: Storage | null = null
) => {
	const existingValue = getItemObject(key);
	const newValue = { ...existingValue, ...value };

	try {
		if (browser) {
			const strg = (storage as Storage) || localStorage;
			if (isFunction(strg?.setItem)) {
				newValue.modifiedAt = Date.now();
				strg.setItem(key, JSON.stringify(newValue));
			}
		}
	} catch (ex) {
		console.error('Error on updating json object.');
	}
};

export const removeItem = (key: string, storage: Storage | null = null) => {
	try {
		if (browser) {
			const strg = (storage as Storage) || localStorage;
			if (isFunction(strg?.setItem)) {
				strg.removeItem(key);
			}
		}
	} catch (ex) {
		console.error('Error on removing session item.');
	}
};
