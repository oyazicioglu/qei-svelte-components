<script>
	import Divider from '../components/divider/divider.svelte';
	import Column from '../components/layout/column.svelte';
	import Container from '../components/layout/container.svelte';
	import Row from '../components/layout/row.svelte';
	import Paper from '../components/paper/paper.svelte';
	import TabItem from '../components/tab-view/tab-item.svelte';
	import TabView from '../components/tab-view/tab-view.svelte';
	import Title from '../components/title/title.svelte';
</script>

<Container>
	<Row gap="30px">
		<Row gap="6px">
			<Title heading="4">Tab View Component</Title>
			<Divider />
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Default</Title>
			</Column>
			<Column grow={1}>
				<TabView>
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Full Width Headers</Title>
			</Column>
			<Column grow={1}>
				<TabView stretchHeads>
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Primary</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Primary Flat</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary" type="flat">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Primary Stroked</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary" type="stroked">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Primary Rounded</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary" type="flat" stretchHeads rounded>
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Extra Small size</Title>
			</Column>
			<Column grow={1}>
				<TabView size="extra-small">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Small size</Title>
			</Column>
			<Column grow={1}>
				<TabView size="small">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Large Size</Title>
			</Column>
			<Column grow={1}>
				<TabView size="large">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Extra Large size</Title>
			</Column>
			<Column grow={1}>
				<TabView size="extra-large">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Align Center</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary" justifyContent="center">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>

		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Align Right</Title>
			</Column>
			<Column grow={1}>
				<TabView color="primary" justifyContent="flex-end">
					<TabItem header="Tab 1" active={true}>Contant 1</TabItem>
					<TabItem header="Tab 2">Contant 2</TabItem>
					<TabItem header="Tab 3">Contant 3</TabItem>
				</TabView>
			</Column>
		</Row>
	</Row>
</Container>
