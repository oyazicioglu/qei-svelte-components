<script>
	import Preloader from '../preloader/preloader.svelte';
	import Flex from '../flex/flex.svelte';
	import { createUId } from '../utils/uid-creator.js';

	/**
	 * @type {'default' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'default';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	/**
	 * @type {'basic' | 'flat' | 'raised' | 'stroked'}
	 */
	export let type = 'basic';

	/**
	 * @type {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'}
	 */
	export let justifyContent = 'center';
	export let rounded = false;
	export let disabled = false;
	export let action = undefined;
	export let waiting = false;
	export let ref = undefined;
	export let active = false;
	export let fullWidth = false;
	export let submitButton = false;
	export let reverseOrder = false;
	export let gap = undefined;

	const id = createUId();

	$: classes = [`qei-button`, `color-${color}`, `size-${size}`, `type-${type}`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');

	const onClick = () => {
		if (action && !disabled && !waiting) {
			action();
		}
	};
</script>

<button
	{id}
	type={submitButton ? 'submit' : 'button'}
	bind:this={ref}
	on:click={onClick}
	on:click
	{...$$restProps}
	{disabled}
	class={classes}
	class:active
	class:rounded
	class:fullWidth
	style={styles}>
	<div class="hover" />
	{#if waiting}
		<Preloader showBackground {color} {size} />
	{/if}
	<Flex wrap="nowrap" direction={reverseOrder ? 'row-reverse' : 'row'} {gap} {justifyContent} alignItems="center">
		<slot />
	</Flex>
</button>
