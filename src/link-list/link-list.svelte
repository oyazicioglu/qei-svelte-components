<script>
	import { createUId } from './../utils/uid-creator.js';
	import { stores } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { Column, Row, Container } from '../layout';
	import { Icon } from '../icon';
	import { Divider } from '../divider';
	import { Link } from '../link';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';

	/**
	 * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
	 */
	export let direction = 'row';
	export let ref = undefined;
	export let items = [];
	export let disabled = false;

	/**
	 * @type {string}
	 */
	export let gap = '10px';

	const id = createUId();
	const { page } = stores();
	let activePage = '/';
	const dispatch = createEventDispatcher();

	const changeItem = (item) => {
		item.active = true;
		dispatch('change', { item });
	};

	page.subscribe((p) => {
		activePage = p.path;
	});
	$: classes = [`qei-link-list`, `size-${size}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<Container>
		<Row {direction} {gap}>
			{#each items as item}
				{#if item.divider}
					<Column>
						<Divider />
					</Column>
				{:else}
					<Container>
						<Row direction="row" gap="6px" alignItems="center">
							<Column
								><Icon
									iconName={item.iconName}
									color={activePage === item.href ? 'default' : 'secondary'}
									{size}
									{disabled}
								/></Column
							>
							<Column grow={1}
								><Link
									class="mt-1"
									on:click={() => {
										changeItem(item);
									}}
									outbound={item.outbound}
									color={activePage === item.href ? 'default' : 'secondary'}
									disabled={item.disabled}
									{size}
									href={item.href}>{item.text}</Link
								></Column
							>
						</Row>
					</Container>
				{/if}
			{/each}
		</Row>
	</Container>
</div>
