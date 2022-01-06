<script>
	import { Flex } from '../flex';
	import { Spinner } from '../spinner';

	import { createUId } from './../utils/uid-creator.js';

	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';
	export let fixed = false;
	export let ref = undefined;
	export let showBackground = true;

	const id = createUId();

	$: classes = [
		`qei-preloader`,
		fixed && `position-fixed`,
		`size-${size}`,
		`color-${color}`,
		showBackground && `show-background`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [`height:100%`].filter(Boolean).join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Flex justifyContent="center" alignItems="center" style={styles}>
		<Spinner {size} {color} />
	</Flex>
</div>
