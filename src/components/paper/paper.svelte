<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @type {'default' | 'primary' | 'accent' | 'background'}
	 */
	export let color = 'default';
	export let stroked = false;
	export let rounded = false;
	export let hideOverflow = false;

	/**
	 * @type {'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'}
	 */
	export let elevation = '0';
	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-paper`, `elevation-${elevation}`, `color-${color}`, stroked && `stroked`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: styles = [hideOverflow && `overflow:hidden`, $$restProps.style].filter(Boolean).join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
