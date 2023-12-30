import * as routes from '$lib/constants/routes';

export enum NavType {
	FOO_TO_BAR = 'foo-to-bar',
	BAR_TO_FOO = 'bar-to-foo',

	UNKNOWN = 'unknown'
}

export const getNavigationType = (fromUrl: URL | undefined, toUrl: URL | undefined): NavType => {
	if (fromUrl?.pathname.startsWith(routes.FOO)) {
		if (toUrl?.pathname.startsWith(routes.BAR)) {
			return NavType.FOO_TO_BAR;
		}
	} else if (fromUrl?.pathname.startsWith(routes.BAR)) {
		if (toUrl?.pathname.startsWith(routes.FOO)) {
			return NavType.BAR_TO_FOO;
		}
	}

	return NavType.UNKNOWN;
};
