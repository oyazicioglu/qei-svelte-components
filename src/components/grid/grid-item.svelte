<script>
	import { createUId } from '$lib/utils/uid-creator.js';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch' }
	 */
	export let justifySelf = 'stretch';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch'}
	 */
	export let alignSelf = 'stretch';
	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-grid-item`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [justifySelf && `justify-self:${justifySelf}`, alignSelf && `align-self:${alignSelf}`, $$restProps.style]
		.filter(Boolean)
		.join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
