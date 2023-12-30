import { isEmpty } from './common';

export interface VariableMap {
	[key: string]: string | number;
}

export const isValidEmail = (value: string): boolean => /^\S+@\S+$/.test(value);

export const isValidURL = (url: string) => {
	const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
	return urlPattern.test(url);
};

/**
 *
 * @param url string
 * @param params VariableMap
 * @returns URL
 */
export const addSearchParams = (url: string, params: VariableMap = {}): string => {
	if (isEmpty(params) || !isValidURL(url)) return url;
	try {
		const urlObj = new URL(url);
		const searchParams = new URLSearchParams([
			...Array.from(urlObj.searchParams.entries()),
			...Object.entries(params)
		] as string[][]);
		urlObj.search = searchParams.toString();
		return urlObj.toString();
	} catch (ex) {
		return url;
	}
};
