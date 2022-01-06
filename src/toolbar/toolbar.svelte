<script>
	import { createUId } from './../utils/uid-creator.js';
	import { Title } from '../title';
	import { Menu } from '../menu';
	import { Paper } from '../paper';
	import { Container, Row, Column } from '../layout';
	import { IconButton } from '../icon-button';
	import { DrawerStore } from '../drawer/drawer-store.js';
	export let name;
	export let title;
	export let userMenuItems;
	export let ref = undefined;

	const id = createUId();
</script>

<div {id} bind:this={ref} class="qei-toolbar">
	<Paper class="p-6" style="overflow:none;">
		<Container>
			<Row gap="10px" direction="row" alignItems="center">
				<Column>
					<IconButton
						size="large"
						iconName="menu"
						action={() => {
							$DrawerStore = true;
						}}
					/>
				</Column>
				<Column grow={1}>
					<Row direction="row" gap="4px">
						<Title heading={'7'}>{name}</Title>
						<Title bold heading={'7'}>{title}</Title>
					</Row>
				</Column>
				<Column>
					<Menu position="bottom-right" asLink iconName="person" items={userMenuItems} />
				</Column>
			</Row>
		</Container>
	</Paper>
</div>
