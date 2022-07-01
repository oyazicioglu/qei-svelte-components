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
	export let disabled = false;
	export let iconName = 'circle';
	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-icon`, `color-${color}`, disabled && `disabled`, `size-${size}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes}>
	<i class="material-icons">{iconName}</i>
</div>
