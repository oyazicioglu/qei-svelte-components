<script context="module">
	export const TabContext = {};
</script>

<script>
	import { createUId } from '../utils/uid-creator.js';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Divider from '../divider/divider.svelte';
	import Icon from '../icon/icon.svelte';
	import Flex from '../flex/flex.svelte';
	import FlexItem from '../flex/flex-item.svelte';
	import Button from '../button/button.svelte';
	import Text from '../text/text.svelte';

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
	export let justifyContent = 'flex-start';

	export let rounded = false;
	export let disabled = false;
	export let stretchHeads = false;
	export let ref = undefined;
	const tabs = writable([]);
	const id = createUId();

	const activeTabIndex = writable(undefined);

	const addTab = (tab) => {
		tabs.update((current) => {
			return [...current, tab];
		});
	};

	const count = () => {
		return $tabs.length;
	};
	$: classes = [
		`qei-tab`,
		`color-${color}`,
		rounded && `rounded`,
		disabled && `disabled`,
		`size-${size}`,
		`type-${type}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	setContext(TabContext, { addTab, count, activeTabIndex, size });

	onMount(async () => {
		const activeTab = $tabs.find((i) => i.active === true);
		if (activeTab) {
			$activeTabIndex = activeTab.index;
		}
	});
</script>

<div {id} bind:this={ref} class={classes} {...$$restProps} style={$$restProps.style}>
	<Flex direction="column" alignItems="stretch" gap={10}>
		<FlexItem class="headers">
			<Flex direction="row" {justifyContent} alignItems="stretch">
				{#each $tabs as tab (tab.index)}
					<FlexItem grow={stretchHeads ? 1 : 'auto'}>
						<Button
							fullWidth
							on:click={() => {
								$activeTabIndex = tab.index;
							}}
							active={$activeTabIndex === tab.index}
							{type}
							{color}
							{size}>
							{#if tab.icon}
								<Icon {size} iconName={tab.icon} />
							{/if}
							<Text {size}>{tab.header}</Text>
						</Button>
					</FlexItem>
				{/each}
			</Flex>
			<Divider />
		</FlexItem>
		<FlexItem grow={1} class="tab-content">
			<slot />
		</FlexItem>
	</Flex>
</div>
