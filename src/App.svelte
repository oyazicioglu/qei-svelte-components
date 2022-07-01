<script>
    export let name;
    import { LocalStorage } from './components/utils/localStorage.js';
    import Container from './components/layout/container.svelte';
    import Row from './components/layout/row.svelte';
    import Column from './components/layout/column.svelte';
    import Theme from './components/theme/theme.svelte';
    import IconButton from './components/icon-button/icon-button.svelte';
    import Button from './components/button/button.svelte';
    import Title from './components/title/title.svelte';
    import Divider from './components/divider/divider.svelte';
    import ListItem from './components/list/list-item.svelte';
    import Paper from './components/paper/paper.svelte';
    import ButtonPage from './pages/ButtonPage.svelte';
    import IconPage from './pages/IconPage.svelte';
    import CheckboxPage from './pages/CheckboxPage.svelte';
    import AvatarPage from './pages/AvatarPage.svelte';
    import ComboboxPage from './pages/ComboboxPage.svelte';
    import DataTablePage from './pages/DataTablePage.svelte';
    import DividerPage from './pages/DividerPage.svelte';
    import EmailInputPage from './pages/EmailInputPage.svelte';
    import TextInputPage from './pages/TextInputPage.svelte';
    import PasswordInputPage from './pages/PasswordInputPage.svelte';
    import SearchInputPage from './pages/SearchInputPage.svelte';
    import NumberInputPage from './pages/NumberInputPage.svelte';
    import LayoutPage from './pages/LayoutPage.svelte';
    import GridPage from './pages/GridPage.svelte';
    import ImagePage from './pages/ImagePage.svelte';
    import LinkPage from './pages/LinkPage.svelte';
    import ListPage from './pages/ListPage.svelte';
    import MenuPage from './pages/MenuPage.svelte';
    import NotificationPage from './pages/NotificationPage.svelte';
    import PaginationPage from './pages/PaginationPage.svelte';
    import PaperPage from './pages/PaperPage.svelte';
    import PasswordConfirmPage from './pages/PasswordConfirmPage.svelte';
    import PreloaderPage from './pages/PreloaderPage.svelte';
    import RadioPage from './pages/RadioPage.svelte';
    import SelectPage from './pages/SelectPage.svelte';
    import SpinnerPage from './pages/SpinnerPage.svelte';
    import TabViewPage from './pages/TabViewPage.svelte';
    import TitlePage from './pages/TitlePage.svelte';
    import ThemePage from './pages/ThemePage.svelte';
    import Grid from './components/grid/grid.svelte';
    import IndexPage from './pages/IndexPage.svelte';
    import GridItem from './components/grid/grid-item.svelte';
    import List from './components/list/list.svelte';

    let theme = LocalStorage.get('theme') || 'dark';
    let selectedComponent = IndexPage;

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
        <Paper>
            <Row>
                <Row class="p-10">
                    <Column grow={1}>
                        <Title heading="5">Qei Svelte UI</Title>
                    </Column>
                    <Column>
                        <IconButton on:click={switchTheme} iconName="dark_mode" />
                    </Column>
                </Row>
                <Row>
                    <Divider />
                </Row>
            </Row>
        </Paper>
        <Grid gap="20px" templateColumns="200px 1fr">
            <List type="flat">
                <ListItem>
                    <Button on:click={() => (selectedComponent = LayoutPage)} fullWidth justifyContent="flex-start">Layout</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = PaperPage)} fullWidth justifyContent="flex-start">Paper</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = GridPage)} fullWidth justifyContent="flex-start">Grid</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = TabViewPage)} fullWidth justifyContent="flex-start">Tab View</Button>
                </ListItem>
                <ListItem>
                    <Divider />
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = AvatarPage)} fullWidth justifyContent="flex-start">Avatar</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = ButtonPage)} fullWidth justifyContent="flex-start">Button</Button>
                </ListItem>

                <ListItem>
                    <Button on:click={() => (selectedComponent = ComboboxPage)} fullWidth justifyContent="flex-start">Combobox</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = DataTablePage)} fullWidth justifyContent="flex-start">Data Table</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = DividerPage)} fullWidth justifyContent="flex-start">Divider</Button>
                </ListItem>
                <ListItem>
                    <Divider />
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = EmailInputPage)} fullWidth justifyContent="flex-start">Email Input</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = TextInputPage)} fullWidth justifyContent="flex-start">Text Input</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = PasswordInputPage)} fullWidth justifyContent="flex-start"
                        >Password Input</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = PasswordConfirmPage)} fullWidth justifyContent="flex-start"
                        >Password Confirm</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = SearchInputPage)} fullWidth justifyContent="flex-start"
                        >Search Input</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = NumberInputPage)} fullWidth justifyContent="flex-start"
                        >Number Input</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = CheckboxPage)} fullWidth justifyContent="flex-start">Checkbox</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = RadioPage)} fullWidth justifyContent="flex-start">Radio</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = SelectPage)} fullWidth justifyContent="flex-start">Select</Button>
                </ListItem>
                <ListItem>
                    <Divider />
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = IconPage)} fullWidth justifyContent="flex-start">Icon</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = ImagePage)} fullWidth justifyContent="flex-start">Image</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = LinkPage)} fullWidth justifyContent="flex-start">Link</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = ListPage)} fullWidth justifyContent="flex-start">List</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = MenuPage)} fullWidth justifyContent="flex-start">Menu</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = NotificationPage)} fullWidth justifyContent="flex-start"
                        >Notification</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = PaginationPage)} fullWidth justifyContent="flex-start">Pagination</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = PreloaderPage)} fullWidth justifyContent="flex-start">Preloader</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = SpinnerPage)} fullWidth justifyContent="flex-start">Spinner</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = ButtonPage)} fullWidth justifyContent="flex-start">Button</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = ThemePage)} fullWidth justifyContent="flex-start">Theme</Button>
                </ListItem>
                <ListItem>
                    <Button on:click={() => (selectedComponent = TitlePage)} fullWidth justifyContent="flex-start">Title</Button>
                </ListItem>
            </List>
            <GridItem class="p-10">
                <svelte:component this={selectedComponent} />
            </GridItem>
        </Grid>
    </Container>
</main>

<style>
</style>
