<script>
	import FlexItem from '../flex/flex-item.svelte';

	import Flex from '../flex/flex.svelte';
	import Menu from '../menu/menu.svelte';

	import Paper from '../paper/paper.svelte';
	import Title from '../title/title.svelte';

	/**
	 * @typedef {object} json
	 * @property {string} title
	 * @property {string} [name]
	 */
	export let heading = undefined;

	$: classes = [`qei-app-header`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div class={classes}>
	<Paper class="p-8" color="default">
		<Flex direction="row" gap="10px" alignItems="baseline">
			{#if heading}
				<Flex direction="row" justifyContent="flex-start" gap="6px" alignItems="baseline">
					<Title heading="6" bold color="secondary">{heading.title}</Title>
					<Title heading="7" color="inherit">{heading.name}</Title>
				</Flex>
			{/if}
			<FlexItem grow={1}>middle</FlexItem>
		</Flex>
	</Paper>
</div>
