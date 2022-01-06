<script>
	import { createUId } from './../utils/uid-creator.js';
	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	/**
	 * @types {'start' | 'center' | 'end'}
	 */
	export let align = 'start';
	export let disabled = false;
	export let ref = undefined;
	export let bold = false;
	export let italic = false;
	export let noWrap = false;

	const id = createUId();

	$: classes = [
		`qei-text`,
		`color-${color}`,
		disabled && `disabled`,
		bold && `bold`,
		italic && `italic`,
		`align-${align}`,
		`size-${size}`,
		noWrap && `no-wrap`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
</script>

<span {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<slot />
</span>
