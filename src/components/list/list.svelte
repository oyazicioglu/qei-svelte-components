<script>
	import { createUId } from '../utils/uid-creator.js';
	import Row from '../layout/row.svelte';
	import Paper from '../paper/paper.svelte';
	import { setContext } from 'svelte';

	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

	/**
	 * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
	 */
	export let direction = 'row';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	/**
	 * @type {'basic' | 'flat' | 'raised' | 'stroked'}
	 */
	export let type = 'basic';

	/**
	 * @type {'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end'}
	 */
	export let alignItems = 'stretch';

	/**
	 * @type {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'}
	 */
	export let justifyContent = 'flex-start';

	export let rounded = false;
	export let disabled = false;
	export let gap = undefined;
	export let ref = undefined;
	export let hasShadow = true;
	export let paddingVertical = 0;
	export let paddingHorizontal = 0;
	export let hideOverflow = false;

	/** @type {ItemType} */
	let activeItem = undefined;

	/** @param {ItemType} item */
	const changeItem = (item) => {
		activeItem = item;
	};

	const id = createUId();

	$: classes = [`qei-list`, !disabled && `color-${color}`, `type-${type}`, `size-${size}`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: styles = [gap && `gap:${gap}`, $$restProps.style].filter(Boolean).join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<Paper
		{hideOverflow}
		{rounded}
		elevation={hasShadow ? '3' : '0'}
		class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
		<Row {direction} {gap} {justifyContent} {alignItems}>
			<slot />
		</Row>
	</Paper>
</div>
