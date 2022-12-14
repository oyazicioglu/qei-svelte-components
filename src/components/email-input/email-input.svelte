<script>
	import { createUId } from '../utils/uid-creator.js';
	import { fade } from 'svelte/transition';
	import { formContext } from '../form/form.svelte';
	import { getContext, onMount } from 'svelte';
	import Flex from '../flex/flex.svelte';
	import FlexItem from '../flex/flex-item.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import Icon from '../icon/icon.svelte';
	import { EmailValidation, RequiredValidation, MinLengthValidation, MaxLengthValidation, InputValidation } from 'qei-input-validations';

	/**
	 * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
	 */
	export let size = 'default';
	export let rounded = false;
	export let disabled = false;
	export let fullWidth = false;
	export let placeholder = ' ';

	export let label = '';
	export let useLabel = true;
	export let name = 'email-input';
	export let value = '';
	export let hint = '';
	export let readonly = false;
	export let hasBackground = true;
	export let preIcon = '';
	export let postIcon = undefined;
	export let valid = false;
	export let ref = undefined;
	export let validations = [];
	export let validationsResult = undefined;

	let loaded = false;
	let required = false;
	let minLength = undefined;
	let maxLength = undefined;
	let showErrors = false;

	let input = undefined;
	let labelLeftPosition = 0;

	const inputValidation = new InputValidation();
	const context = getContext(formContext);
	const id = createUId();

	const onValidate = (e) => {
		showErrors = true;
		validationsResult = e.detail;
		valid = validationsResult.isValid;

		if (context) {
			context.updateElement({ ref: input, type: 'emailInput', validations, value, valid, name });
		}
	};

	$: classes = [`qei-email-input`, disabled && `disabled`, hasBackground && `has-background`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	if (!useLabel && label !== '') {
		placeholder = label;
	}

	validations.push(new EmailValidation());

	onMount(async () => {
		if (context) {
			context.addElement({ ref: input, type: 'emailInput', validations, value, valid, name });
		}

		validations.map((v) => {
			if (v instanceof RequiredValidation) {
				required = true;
			}

			if (v instanceof MinLengthValidation) {
				minLength = v.getLength();
			}

			if (v instanceof MaxLengthValidation) {
				maxLength = v.getLength();
			}
		});

		loaded = true;
	});

	$: if (input) {
		labelLeftPosition = input.offsetLeft;
	}

	const callValidation = () => {
		inputValidation.validation(input, { input, value, validations, name, loaded });
	};
</script>

<div
	{id}
	bind:this={ref}
	{...$$restProps}
	class={classes}
	class:invalid={validationsResult && !validationsResult.isValid}
	class:rounded
	class:readonly
	class:fullWidth
	style={$$restProps.style}
>
	<Flex class="input-container" direction="row" justifyContent="space-between" alignItems="center" style="height:100%;">
		{#if preIcon}
			<Icon style="margin-left:4px" iconName={preIcon} {size} color="secondary" />
		{/if}
		<input
			size="10"
			style="flex-grow: 1;"
			bind:this={input}
			use:inputValidation.validation={{ input, value, validations, name, loaded }}
			{name}
			type="email"
			{required}
			{disabled}
			{minLength}
			{maxLength}
			bind:value
			on:input={callValidation}
			on:blur={callValidation}
			on:validate={onValidate}
			{placeholder}
		/>

		<div class="bottom-line" />

		{#if postIcon}
			<Icon style="margin-right:4px" iconName={postIcon} {size} color="secondary" />
		{/if}

		{#if label !== '' && useLabel}
			<span style={`margin-left: ${labelLeftPosition}px;`} class="label">{label}</span>
		{/if}

		{#if hint && hint.length > 0}
			<span class="hint">{hint}</span>
		{/if}
	</Flex>

	{#if validationsResult && !validationsResult.isValid && showErrors}
		<div transition:fade class="validation-container" style="position: absolute; right:0; top:{ref.clientHeight + 2}px">
			<Flex direction="column" justifyContent="flex-end">
				<FlexItem alignSelf="flex-end">
					<IconButton circle on:click={() => (showErrors = false)} iconName="close" size="small" />
				</FlexItem>
				<div class="validation-errors">
					<ul>
						{#each validationsResult.errors as error}
							<li class="validation-error">{error.message}</li>
						{/each}
					</ul>
				</div>
			</Flex>
		</div>
	{/if}
</div>
