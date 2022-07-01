<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';
	export let ref = undefined;
	export let value = 50;
	export let min = 0;
	export let max = 100;
	export let indeterminate = false;

	const id = createUId();

	$: classes = [`qei-progress-bar`, `size-${size}`, indeterminate && `indeterminate`, `color-${color}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: ratio = (value / (max - min)) * 100;
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<div class="background" />
	<div class="indicator" style={indeterminate === false ? `width:${ratio}%` : 'width:100%'} />
</div>
