<script>
	import { fly } from 'svelte/transition';
	import { createUId } from './../utils/uid-creator.js';

	import { Column, Row, Container } from '../layout';
	import { IconButton } from '../icon-button';
	import { LinkList } from '../link-list';
	import { Paper } from '../paper';
	import { DrawerStore } from '../drawer';

	export let ref = undefined;
	export let links = [];
	const id = createUId();

	$: classes = [`qei-drawer`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');

	const close = () => {
		$DrawerStore = false;
	};
</script>

{#if $DrawerStore}
	<div {id} bind:this={ref} transition:fly {...$$restProps} class={classes} style={styles}>
		<Container style="height:100%;">
			<Row style="height:100%;" direction="row" alignItems="stretch">
				<Column style="min-width:200px;">
					<Paper elevation={3} style="height:100%;" class="p-8 pr-16" color="default">
						<Container class="mb-20">
							<Row direction="column" gap="14px">
								<Column alignSelf="flex-end">
									<IconButton iconName="close" on:click={close} />
								</Column>
								<Column>
									<slot />
								</Column>
								<Column grow={1}>
									<LinkList on:change={close} direction="column" items={links} />
								</Column>
							</Row>
						</Container>
					</Paper>
				</Column>
				<Column style="height:100%;" grow={1}>
					<div class="mask" on:click={close} />
				</Column>
			</Row>
		</Container>
	</div>
{/if}
