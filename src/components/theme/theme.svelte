<script>
	import { createUId } from '../utils/uid-creator.js';
	import { onMount } from 'svelte';
	import { LocalStorage } from '../utils/localStorage';

	export let theme = 'light';
	const id = createUId();

	onMount(() => {
		const localTheme = LocalStorage.get('theme');
		if (localTheme) {
			theme = localTheme;
		}
	});

	$: {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('theme', theme);
		}
	}
</script>
