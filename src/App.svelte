<script>
	export let name;
	import { Container, Row, Column } from './layout';
	import { Text } from './text';
	import { Theme } from './theme';
	import { LocalStorage } from './utils/localStorage';
	import { IconButton } from './icon-button';
	import { Button } from './button';

	let theme = LocalStorage.get('theme') || 'dark';

	const switchTheme = () => {
		if (theme === 'light') {
			theme = 'dark';
		} else {
			theme = 'light';
		}
	};
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Theme {theme} />

<main>
	<Container>
		<Row>
			<Column>
				<IconButton on:click={switchTheme} iconName="dark_mode" />
			</Column>
		</Row>
	</Container>
	<Container>
		<Row alignItems="center">
			<Column basis="300px"><Text>Button</Text></Column>
			<Column grow={1}>
				<Row gap="10px">
					<Column><Button>Default</Button></Column>
					<Column><Button color="accent">Accent</Button></Column>
				</Row>
			</Column>
		</Row>
	</Container>
</main>

<style>
</style>
