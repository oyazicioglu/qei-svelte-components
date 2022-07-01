<script>
	import { createUId } from '../utils/uid-creator.js';
	import { hideOnClickOutside } from '../utils/hideOnClickOutside';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Flex from '../flex/flex.svelte';
	import Button from '../button/button.svelte';
	import List from '../list/list.svelte';
	import Text from '../span/span.svelte';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	export let rounded = false;
	export let ref = undefined;
	export let options = [];
	export let useShadow = true;
	export let label = '';
	export let disabled = false;
	export let activeItem = undefined;
	export let useLabel = false;

	let containerRef = undefined;
	let showList = false;
	let dispatch = createEventDispatcher();
	const id = createUId();

	const toggleList = () => {
		if (disabled) {
			showList = false;
			return;
		}
		showList = !showList;
	};

	activeItem = options.find((i) => i.active === true);
	$: containerMargin = containerRef ? ((containerRef.clientHeight + ref.clientHeight) / 2) * -1 : '2';

	const changeItem = (e) => {
		if (e.detail.item) {
			activeItem = e.detail.item;
			dispatch('change', { activeItem });
		}
		showList = false;
	};

	$: classes = [`qei-select`, `size-${size}`, disabled && `disabled`, rounded && `rounded`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div
	use:hideOnClickOutside={() => {
		showList = false;
	}}
	{id}
	bind:this={ref}
	{...$$restProps}
	class={classes}
	class:has-selected={activeItem}
	style={$$restProps.style}>
	{#if activeItem && useLabel}
		<Text color="secondary">{label}</Text>
	{/if}

	<Button {size} {disabled} type="basic" fullWidth on:click={toggleList}
		><Flex direction="row" justifyContent="start" alignItems="center">{activeItem ? activeItem.text : label}</Flex></Button>
	{#if showList}
		<div transition:fade={{ duration: 200 }} bind:this={containerRef} class="list-container" style={`margin-top:${containerMargin}px`}>
			<List {activeItem} on:change={changeItem} type={useShadow ? 'raised' : 'flat'} {size} {rounded} items={options} />
		</div>
	{/if}
</div>
