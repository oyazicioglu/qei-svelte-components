<script>
	import { createUId } from '../utils/uid-creator.js';
	import Row from '../layout/row.svelte';
	import Container from '../layout/container.svelte';

	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
	 */
	export let direction = 'row';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	/**
	 * @type {'basic' | 'flat' | 'raised' | 'stroked'}
	 */
	export let type = 'basic';

	/**
	 * @type {'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end'}
	 */
	export let alignItems = 'stretch';

	/**
	 * @type {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'}
	 */
	export let justifyContent = 'flex-start';

	export let rounded = false;
	export let disabled = false;
	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-list`, !disabled && `color-${color}`, `type-${type}`, `size-${size}`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Row {direction} {justifyContent} {alignItems}>
		<slot />
	</Row>
</div>
