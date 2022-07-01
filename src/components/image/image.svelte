<script>
	import { createUId } from '../utils/uid-creator.js';
	export let path = undefined;
	export let ratio = '1';
	export let ref = undefined;
	export let altText = '';
	export let contain = true;
	export let width = 'auto';

	const id = createUId();

	$: classes = [`qei-image`, contain && `contain`, ratio && `${ratio}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<img {width} src={path} alt={altText} style="aspect-ratio: {ratio};" />
</div>
