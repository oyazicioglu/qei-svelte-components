<script>
	import { createUId } from '../utils/uid-creator.js';
	import { formContext } from '../form/form.svelte';
	import { getContext, onMount } from 'svelte';
	import Flex from '../flex/flex.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import Text from '../text/text.svelte';

	/**
	 * @type {'default' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'default';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	export let disabled = false;
	export let ref = undefined;
	export let label = undefined;
	export let value = '';
	export let chekced = false;
	export let item = undefined;
	export let validations = [];
	export let name = '';

	const id = createUId();

	$: iconName = chekced ? 'check_box' : 'check_box_outline_blank';
	$: item = { chekced, value, label };

	$: classes = [`qei-chekcbox`, !disabled && `color-${color}`, disabled && `disabled`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	const toggleCheck = () => {
		if (disabled) {
			return;
		}

		chekced = !chekced;
	};

	const context = getContext(formContext);

	onMount(async () => {
		if (context) {
			context.addElement({ ref, type: 'checkbox', name, value: value, validations });
		}
	});
</script>

<div {id} bind:this={ref} on:click={toggleCheck} on:click {...$$restProps} class={classes} style={$$restProps.style}>
	<Flex direction="row" justifyContent="start" alignItems="center" gap={2}>
		<IconButton {iconName} {color} {disabled} {size} />
		{#if label}
			<Text {color} {disabled} {size}>{label}</Text>
		{/if}
	</Flex>
</div>
