<script>
	import { createUId } from './../utils/uid-creator.js';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { Button } from '../button';
	import { Flex, FlexItem } from '../flex';
	import { Divider } from '../divider';
	import { Text } from '../text';
	import { Icon } from '../icon';
	import { Link } from '../link';

	/**
	 * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';

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
	export let justifyContent = 'flex-start';

	export let rounded = false;
	export let disabled = false;
	export let ref = undefined;
	export let asLink = false;

	export let items = [];
	export let indicateActiveItem = true;
	export let activeItem = undefined;
	export let reverseOrder = false;

	let activeItemStore = writable(undefined);

	const id = createUId();

	$activeItemStore = activeItem ? activeItem : items.find((i) => i.active === true);

	activeItemStore.subscribe((item) => {
		activeItem = item;
	});

	const dispatch = createEventDispatcher();

	const changeItem = (item) => {
		$activeItemStore = item;
		dispatch('change', { item });
	};

	$: classes = [`qei-list`, !disabled && `color-${color}`, `type-${type}`, `size-${size}`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Flex direction={reverseOrder ? 'column-reverse' : 'column'}>
		{#each items as item}
			{#if item.divider}
				<Divider />
			{:else if asLink}
				<Flex direction="row" class="p-4" gap={4} justifyContent="start" alignItems="center">
					{#if item.iconName}
						<FlexItem>
							<Icon {color} {size} iconName={item.iconName} disabled={item.disabled} />
						</FlexItem>
					{/if}
					<FlexItem grow={1}>
						<Link
							on:click={() => {
								changeItem(item);
							}}
							class="mt-2"
							active={indicateActiveItem && $activeItemStore === item}
							{color}
							href={item.href}
							disabled={item.disabled}
							{size}>{item.text}</Link
						>
					</FlexItem>
				</Flex>
			{:else}
				<Button
					{justifyContent}
					fullWidth
					style="white-space:nowrap;"
					on:click={() => {
						changeItem(item);
					}}
					action={item.action}
					disabled={item.disabled}
					active={indicateActiveItem && $activeItemStore === item}
					{color}
					{size}
				>
					{#if item.iconName}
						<Icon {color} {size} iconName={item.iconName} disabled={item.disabled} />
					{/if}
					{#if item.text}
						<Text {size}>{item.text}</Text>
					{/if}
				</Button>
			{/if}
		{/each}
	</Flex>
</div>
