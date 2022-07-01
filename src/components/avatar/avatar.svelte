<script>
	import { createUId } from '../utils/uid-creator.js';
	import Paper from '../paper/paper.svelte';
	import Flex from '../flex/flex.svelte';
	import Image from '../image/image.svelte';
	import Text from '../span/span.svelte';

	export let color = 'default';
	export let size = 'default';
	export let ref = undefined;
	export let bold = false;
	export let circle = true;
	export let imagePath = undefined;
	export let text = undefined;
	export let useBorder = true;
	export let aspectRatio = '1';
	export let containImage = true;

	const id = createUId();

	$: classes = [
		`qei-avatar`,
		`size-${size}`,
		`color-${color}`,
		circle && `circle`,
		bold && `bold`,
		useBorder && `border`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Paper {color} class="fullHeight">
		<Flex class="fullHeight" justifyContent="center" alignItems="center" alignContent="center">
			{#if imagePath}
				<Image width="100%" contain={containImage} path={imagePath} ratio={aspectRatio} />
			{:else}
				<Text {size} {bold}>{text}</Text>
			{/if}
		</Flex>
	</Paper>
</div>
