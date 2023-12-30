export const isString = (value: unknown) => typeof value === 'string';
export const isNumber = (value: unknown) =>
	(typeof value === 'number' || value instanceof Number) && !Number.isNaN(value as number);
export const isFunction = (value: unknown) => typeof value === 'function';
export const isArray = (value: unknown) => Array.isArray(value);
export const isBoolean = (value: unknown) => typeof value === 'boolean';
export const isUndefined = (value: unknown) => typeof value === 'undefined';
export const isObject = (value: unknown) => value === Object(value);
export const isEmpty = (value: unknown) => Object.keys(value as object).length > 0;
