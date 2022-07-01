<script>
	import { createUId } from '../utils/uid-creator.js';
	/**
	 * @types {'1' | '2' | '3' | '4' | '5' | '6'}
	 */
	export let heading = '1';

	/**
	 * @type {'inherit' | 'primary' | 'secondary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
	 */
	export let color = 'inherit';
	export let bold = false;
	export let italic = false;
	export let disabled = false;
	export let ref = undefined;
	const id = createUId();

	$: classes = [`qei-title`, `color-${color}`, bold && `bold`, italic && `italic`, disabled && `disabled`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes}>
	{#if heading === '1'}
		<h1><slot /></h1>
	{:else if heading === '2'}
		<h2><slot /></h2>
	{:else if heading === '3'}
		<h3><slot /></h3>
	{:else if heading === '4'}
		<h4><slot /></h4>
	{:else if heading === '5'}
		<h5><slot /></h5>
	{:else if heading === '6'}
		<h6><slot /></h6>
	{:else}
		<span><slot /></span>
	{/if}
</div>
