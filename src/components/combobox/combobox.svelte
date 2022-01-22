<script>
	import { createUId } from '../utils/uid-creator.js';
	import { hideOnClickOutside } from '../utils/hideOnClickOutside';
	import { fade } from 'svelte/transition';

	import { Flex } from '../flex';
	import { IconButton } from '../icon-button';
	import { List } from '../list';
	import { TextInput } from '../text-input';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';
	export let rounded = false;
	export let ref = undefined;
	export let items = [];
	export let useShadow = true;
	export let label = '';
	export let disabled = false;
	export let activeItem = undefined;
	export let validations = [];
	export let hint = '';

	let showList = false;

	const id = createUId();

	activeItem = items.find((i) => i.active === true);

	$: classes = [`qei-combobox`, `size-${size}`, disabled && `disabled`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	const changeItem = (e) => {
		if (e !== activeItem) {
			activeItem = e.detail.item;
		}
		showList = false;
	};

	const toggleShowList = () => {
		showList = !showList;
	};
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
	style={$$restProps.style}
>
	<Flex>
		<TextInput
			{hint}
			{validations}
			fullWidth
			{disabled}
			{rounded}
			{size}
			value={activeItem.text}
			on:focus={() => {
				showList = true;
			}}
			{label}
		>
			<IconButton on:click={toggleShowList} iconName={showList ? 'expand_less' : 'expand_more'} />
		</TextInput>
	</Flex>
	{#if showList && items.length > 0}
		<div transition:fade={{ duration: 200 }} class="list-container" style={`margin-top:${ref.clientHeight + 2}px`}>
			<List {activeItem} on:change={changeItem} type={useShadow ? 'raised' : 'flat'} {size} {rounded} {items} {disabled} />
		</div>
	{/if}
</div>
