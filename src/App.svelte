<script>
	export let name;
	import Container from './components/layout/container.svelte';
	import Row from './components/layout/row.svelte';
	import Column from './components/layout/column.svelte';
	import Text from './components/text/text.svelte';
	import Theme from './components/theme/theme.svelte';
	import IconButton from './components/icon-button/icon-button.svelte';
	import Button from './components/button/button.svelte';
	import { LocalStorage } from './components/utils/localStorage.js';
	import TextInput from './components/text-input/text-input.svelte';
	import { MinLengthValidation, RequiredValidation } from 'qei-input-validations';
	import EmailInput from './components/email-input/email-input.svelte';

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
	<Container>
		<Row alignItems="center">
			<Column basis="300px"><Text>Text Input</Text></Column>
			<Column grow={1}>
				<Row gap="10px">
					<Column><TextInput label="Name" validations={[new RequiredValidation(), new MinLengthValidation(12)]} /></Column>
					<Column><EmailInput label="Email" /></Column>
				</Row>
			</Column>
		</Row>
	</Container>
</main>

<style>
</style>
