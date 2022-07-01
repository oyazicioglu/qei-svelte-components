<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;
	const id = createUId();

	$: classes = [`qei-list-item`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<slot />
</div>

<style lang="scss">
	.qei-list-item {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
