<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
	 */
	export let direction = 'row';

	/**
	 * @type {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'}
	 */
	export let justifyContent = 'flex-start';

	/**
	 * @type {'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end'}
	 */
	export let alignItems = 'stretch';

	/**
	 * @type {'normal' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline'}
	 */
	export let alignContent = 'normal';

	/**
	 * @type {'nowrap' | 'wrap' | 'wrap-reverse'}
	 */
	export let wrap = 'wrap';

	/**
	 * @type {string}
	 */
	export let gap = undefined;
	export let ref = undefined;

	const id = createUId();

	$: layoutClasses = ['qei-row', $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		`flex-direction:${direction}`,
		gap && `gap: ${gap}`,
		`justify-content: ${justifyContent}`,
		`align-content: ${alignContent}`,
		`align-items: ${alignItems}`,
		`flex-wrap: ${wrap}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div {id} bind:this={ref} class={layoutClasses} style={styles}>
	<slot />
</div>
