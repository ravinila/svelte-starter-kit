<script lang="ts">
	import * as routes from '$lib/constants/routes';
	import { page } from '$app/stores';
</script>

<div class="nav">
	<a href={routes.HOME} class:active={$page.url.pathname === routes.HOME}>Home Page</a>
	<a href={routes.FOO} class:active={$page.url.pathname.startsWith(routes.FOO)}>Foo Page</a>
	<a href={routes.BAR} class:active={$page.url.pathname.startsWith(routes.BAR)}>Bar Page</a>
</div>

<style lang="scss">
	.nav {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
		a {
			padding: 10px 20px;
			background-color: rgba(0, 0, 255, 0.1);
			text-decoration: none;
			&:hover {
				background-color: rgba(0, 0, 255, 0.3);
			}
			&:active {
				background-color: rgb(198, 255, 113, 0.3);
			}
			&.active {
				background-color: rgba(0, 0, 255, 0.6);
				color: #fff;
			}
		}
	}
</style>
