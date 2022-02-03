<script>
	import FlexItem from '../flex/flex-item.svelte';
	import Flex from '../flex/flex.svelte';
	import Grid from '../grid/grid.svelte';
	import Link from '../link/link.svelte';
	import Paper from '../paper/paper.svelte';
	import Title from '../title/title.svelte';

	/** @type {{title: string, name: string}} */
	export let heading = undefined;

	$: classes = [`qei-app-header`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div class={classes}>
	<Paper hideOverflow={false} class="p-8" color="default">
		<Flex direction="row" justifyContent="flex-start" gap="10px" alignItems="center">
			<slot name="global-menu" />
			<Link href="/cms">
				<Flex direction="row" justifyContent="start" gap="6px" alignContent="center" alignItems="baseline">
					{#if heading.title}
						<Title heading="6" bold color="inherit">{heading.title}</Title>
					{/if}
					{#if heading.name}
						<Title heading="7" color="secondary">{heading.name}</Title>
					{/if}
				</Flex>
			</Link>
			<slot name="top-menu" />
			<FlexItem grow={1}>
				<slot />
			</FlexItem>
			<slot name="right-area" />
		</Flex>
	</Paper>
</div>
