<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @type {number}
	 */
	export let order = 0;

	/**
	 * @type {number}
	 */
	export let grow = 0;

	/**
	 * @type {number}
	 */
	export let shrink = 1;

	/**
	 * @type {string}
	 */
	export let basis = 'auto';

	/**
	 * @type {'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'}
	 */
	export let alignSelf = 'auto';

	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-flex-item`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		`order:${order}`,
		`flex-grow:${grow}`,
		`flex-shrink: ${shrink}`,
		`flex-basis:${basis}`,
		`align-self:${alignSelf}`,
		$$restProps.style,
	].join(';');
</script>

<div {id} bind:this={ref} class={classes} style={styles}>
	<slot />
</div>
