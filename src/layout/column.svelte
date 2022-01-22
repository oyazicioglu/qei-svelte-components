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

	export let extraSmall;
	export let small;
	export let medium;
	export let large;
	export let extraLarge;
	export let ref = undefined;

	const id = createUId();

	$: layoutClasses = [
		extraSmall && `xs-${extraSmall}`,
		small && `sm-${small}`,
		medium && `md-${medium}`,
		large && `lg-${large}`,
		extraLarge && `xl-${extraLarge}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [
		`order:${order}`,
		`flex-grow:${grow}`,
		`flex-shrink:${shrink}`,
		`flex-basis:${basis}`,
		`align-self:${alignSelf}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div {id} bind:this={ref} class={`qei-column ${layoutClasses}`} style={styles}>
	<slot />
</div>
