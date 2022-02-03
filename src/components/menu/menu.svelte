<script>
	import { createUId } from '../utils/uid-creator.js';
	import { fade } from 'svelte/transition';
	import { hideOnClickOutside } from '../utils/hideOnClickOutside';
	import Icon from '../icon/icon.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import Button from '../button/button.svelte';
	import Text from '../text/text.svelte';
	import List from '../list/list.svelte';

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
	 * @type {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'}
	 */
	export let position = 'bottom-left';
	export let hasShadow = true;
	export let rounded = false;
	export let disabled = false;
	export let ref = undefined;
	export let text = undefined;
	export let iconName = undefined;
	export let reverseOrder = false;
	export let itemGap = '0';
	export let padding = 6;
	export let hideOverflow = true;
	export let circledIcon = false;
	/**
	 * @type {'row' | 'row-reverse' | 'column' | 'column-reverse'}
	 */
	export let direction = 'column';

	let showMenu = false;
	const useIconButton = iconName && !text;
	const id = createUId();

	$: classes = [`qei-menu`, !disabled && `color-${color}`, `size-${size}`, `type-${type}`, $$restProps.class].filter(Boolean).join(' ');

	const toggleMenu = () => {
		showMenu = !showMenu;
	};

	$: containerPosition = showMenu ? setContainerPosition() : `style=top:0; left:0`;

	const setContainerPosition = () => {
		let style = 'min-width:max-content;';
		if (position === 'bottom-left') {
			style += `top:${ref.clientHeight + 2}px; left:0;`;
		}

		if (position === 'bottom-right') {
			style += ` top:${ref.clientHeight + 2}px; right:0;`;
		}

		if (position === 'top-right') {
			style += `bottom:${ref.clientHeight + 2}px; right:0;`;
		}

		if (position === 'top-left') {
			style += `bottom:${ref.clientHeight + 2}px; left:0;`;
		}

		return style;
	};
</script>

<div
	use:hideOnClickOutside={() => {
		showMenu = false;
	}}
	{id}
	bind:this={ref}
	{...$$restProps}
	{disabled}
	class={classes}
	class:rounded
	style={$$restProps.style}>
	{#if useIconButton}
		<IconButton circle={circledIcon} action={toggleMenu} {type} {color} {size} {iconName} {disabled} />
	{/if}

	{#if !useIconButton}
		<Button {reverseOrder} action={toggleMenu} {type} {color} {size} {disabled} {rounded}>
			{#if iconName}
				<Icon {iconName} {type} {color} {size} {disabled} />
			{/if}

			{#if text}
				<Text {size} {color}>{text}</Text>
			{/if}
		</Button>
	{/if}

	{#if showMenu}
		<div transition:fade={{ duration: 200 }} class="qei-menu-container" style={containerPosition}>
			<List
				{size}
				{hideOverflow}
				paddingHorizontal={padding}
				paddingVertical={padding}
				{rounded}
				{hasShadow}
				{direction}
				gap={itemGap}>
				<slot />
			</List>
		</div>
	{/if}
</div>
