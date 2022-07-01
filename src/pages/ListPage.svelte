<script>
	import Divider from '../components/divider/divider.svelte';
	import Column from '../components/layout/column.svelte';
	import Container from '../components/layout/container.svelte';
	import Row from '../components/layout/row.svelte';
	import ListItem from '../components/list/list-item.svelte';
	import List from '../components/list/list.svelte';
	import Title from '../components/title/title.svelte';
</script>

<Container>
	<Row gap="20px">
		<Row gap="6px">
			<Title heading="4">List</Title>
			<Divider />
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Default</Title>
			</Column>
			<Column grow={1}>
				<List>
					<ListItem />
				</List>
			</Column>
		</Row>
	</Row>
</Container>
