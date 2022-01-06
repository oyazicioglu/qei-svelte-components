<script context="module">
	export const TabContext = {};
</script>

<script>
	import { createUId } from './../utils/uid-creator.js';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { Flex, FlexItem } from '../flex';
	import { Button } from '../button';
	import { Divider } from '../divider';
	import { Text } from '../text';
	import { Icon } from '../icon';

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
	const tabs = writable([]);
	const id = createUId();

	const activeTabIndex = writable(undefined);

	const addTab = (tab) => {
		tabs.update((current) => {
			return [...current, tab];
		});
	};

	const changeTab = (tab) => {
		$activeTabIndex = tab.index;
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
					<Button
						style="grow={justifyContent === 'stretch' ? '1' : 'auto'}"
						fullWidth={justifyContent === 'stretch'}
						on:click={() => {
							$activeTabIndex = tab.index;
						}}
						active={$activeTabIndex === tab.index}
						{type}
						{color}
						{size}
					>
						{#if tab.icon}
							<Icon {size} iconName={tab.icon} />
						{/if}
						<Text {size}>{tab.header}</Text>
					</Button>
				{/each}
			</Flex>
			<Divider />
		</FlexItem>
		<FlexItem grow={1} class="tab-content">
			<slot />
		</FlexItem>
	</Flex>
</div>
