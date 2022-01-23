<script>
	import { createUId } from '../utils/uid-creator.js';
	import Row from '../layout/row.svelte';
	import Paper from '../paper/paper.svelte';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */

	/**
	 * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
	 */
	export let direction = 'row';

	/**
	 * @type {'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end'}
	 */
	export let alignItems = 'stretch';

	/**
	 * @type {string}
	 */
	export let gap = '0';
	export let rounded = false;
	export let useBorder = false;
	export let hasShadow = false;
	export let ref = undefined;

	const id = createUId();

	$: classes = [`qei-toolbar`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Paper {rounded} stroked={useBorder} elevation={hasShadow ? '3' : 0}>
		<Row {direction} {alignItems} justifyContent="flex-start" {gap}>
			<slot />
		</Row>
	</Paper>
</div>
