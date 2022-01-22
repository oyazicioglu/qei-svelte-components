<script>
	import { createUId } from '$lib/utils/uid-creator.js';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'}
	 */
	export let justifyContent = 'stretch';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'}
	 */
	export let alignContent = 'stretch';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch' }
	 */
	export let justifyItems = 'start';

	/**
	 * @type {'start' | 'end' | 'center' | 'stretch' | 'baseline'}
	 */
	export let alignItems = 'start';

	/**
	 * @type {'row' | 'column' | 'dense' }
	 */
	export let autoFlow = 'row';
	export let ref = undefined;
	export let templateColumns;
	export let templateRows;
	export let inline = false;
	export let gap = '0';

	$: autoFlow = templateColumns || templateRows ? undefined : autoFlow;

	const id = createUId();

	$: classes = [`qei-grid`, inline && `inline`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		autoFlow && `grid-auto-flow:${autoFlow}`,
		templateColumns && `grid-template-columns:${templateColumns}`,
		templateRows && `grid-template-rows:${templateRows}`,
		gap && `gap:${gap}`,
		`justify-content:${justifyContent}`,
		`justify-items:${justifyItems}`,
		`align-items:${alignItems}`,
		`align-content:${alignContent}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
