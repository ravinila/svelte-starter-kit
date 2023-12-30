<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Nav from '$lib/components/Nav.svelte';
	import { NavType, getNavigationType } from '$lib/services/view-transition';
	import { activePageViewTansition } from '$lib/stores/view-transition';
	import '$lib/styles/scss/global.scss';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		const navigationType = getNavigationType(navigation.from?.url, navigation.to?.url);

		// Below code to not show page transition for specific pages
		// if ([NavType.FOO_TO_BAR, NavType.BAR_TO_FOO].includes(navigationType)) {
		// 	return;
		// }

		return new Promise<void>((resolve) => {
			/*
			 * this store value can we used in any component if any modification needed on transition
			 * page specific
			 */
			activePageViewTansition.update(() => navigationType);
			// add navigation type class here
			document.documentElement.classList.add(navigationType);

			const viewTransition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			viewTransition.finished.finally(() => {
				// remove navigation type class here
				document.documentElement.classList.remove(navigationType);
				activePageViewTansition.update(() => null);
			});
		});
	});
</script>

<div class="container">
	<Nav />
	<slot />
</div>

<style lang="scss">
	.container {
		padding: 2rem;
	}
</style>
