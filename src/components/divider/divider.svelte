<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @type {'horizontal' | 'vertical'}
	 */
	export let direction = 'horizontal';

	/**
	 * @type {'default' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'default';
	export let ref = undefined;
	const id = createUId();

	$: classes = [`qei-divider`, `color-${color}`, `direction-${direction}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>&nbsp;</div>
