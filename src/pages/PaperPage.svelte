<script>
	import Divider from '../components/divider/divider.svelte';
	import Column from '../components/layout/column.svelte';
	import Container from '../components/layout/container.svelte';
	import Row from '../components/layout/row.svelte';
	import Paper from '../components/paper/paper.svelte';
	import Title from '../components/title/title.svelte';
</script>

<Container>
	<Row gap="20px">
		<Row gap="6px">
			<Title heading="4">Paper Component</Title>
			<Divider />
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Default</Title>
			</Column>
			<Column grow={1}>
				<Paper hideOverflow style="height:60px" />
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Rounded</Title>
			</Column>
			<Column grow={1}>
				<Paper rounded style="height:60px" />
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Stroked</Title>
			</Column>
			<Column grow={1}>
				<Paper stroked style="height:60px" />
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Primary</Title>
			</Column>
			<Column grow={1}>
				<Paper color="primary" style="height:60px" />
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Accent</Title>
			</Column>
			<Column grow={1}>
				<Paper color="accent" style="height:60px" />
			</Column>
		</Row>
		<Row gap="10px" alignItems="center">
			<Column basis="200px">
				<Title heading="7" color="secondary">Elevations</Title>
			</Column>
			<Column grow={1}>
				<Row justifyContent="space-between" alignItems="stretch">
					<Paper elevation="1" style="height:60px; width:60px" />
					<Paper elevation="2" style="height:60px; width:60px" />
					<Paper elevation="3" style="height:60px; width:60px" />
					<Paper elevation="4" style="height:60px; width:60px" />
					<Paper elevation="5" style="height:60px; width:60px" />
					<Paper elevation="6" style="height:60px; width:60px" />
					<Paper elevation="7" style="height:60px; width:60px" />
					<Paper elevation="8" style="height:60px; width:60px" />
					<Paper elevation="9" style="height:60px; width:60px" />
				</Row>
			</Column>
		</Row>
	</Row>
</Container>
