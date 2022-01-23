<script>
	import { createUId } from '../utils/uid-creator.js';
	import Icon from '../icon/icon.svelte';

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

	export let circle = false;
	export let disabled = false;
	export let action = undefined;
	export let waiting = false;
	export let iconName = 'circle';
	export let ref = undefined;
	export let condense = false;

	const id = createUId();

	$: classes = [
		`qei-icon-button`,
		!$$restProps.disabled && `btn-color-${color}`,
		`btn-size-${size}`,
		`btn-type-${type}`,
		disabled && `disabled`,
		condense && `condense`,
		circle && 'circle',
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	const onClick = () => {
		if (action && !disabled && !waiting) {
			action();
		}
	};
</script>

<button {id} bind:this={ref} type="button" on:click={onClick} on:click {disabled} {...$$restProps} class={classes}>
	<div class="hover" />
	<Icon {iconName} {size} color={type == 'basic' ? color : 'inherit'} {disabled} />
</button>
