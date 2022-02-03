<script>
	import { createUId } from '../utils/uid-creator.js';
	import Text from '../text/text.svelte';

	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger' |'secondary'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	export let bold = false;
	export let italic = false;
	export let disabled = false;
	export let href = '#';
	export let outbound = false;
	export let ref = undefined;
	export let active = false;

	const id = createUId();

	$: classes = [
		`qei-link`,
		bold && `bold`,
		italic && `italic`,
		active && `active`,
		disabled && `disabled`,
		`color-${color}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
</script>

<div {id} bind:this={ref} on:click {...$$restProps} class={classes} style={$$restProps.style}>
	<a {href} target={outbound ? '_blank' : ''}>
		<Text {color} {size} {bold} {italic} {disabled}><slot /></Text>
	</a>
	<div class="underline" />
</div>
