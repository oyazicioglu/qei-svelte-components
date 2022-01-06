<script>
	import { createUId } from './../utils/uid-creator.js';
	import { fade } from 'svelte/transition';
	import { formContext } from '../form/form.svelte';
	import { getContext, onMount } from 'svelte';
	import { Flex, FlexItem } from '../flex';
	import { Icon } from '../icon';
	import { IconButton } from '../icon-button';
	import { RequiredValidation } from '../utils/validations/RequiredValidation';
	import { MaxValueValidation } from '../utils/validations/MaxValueValidation';
	import { MinValueValidation } from '../utils/validations/MinValueValidation';
	import { InputValidation } from '../utils/validations/InputValidation.js';

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
	export let name = 'passwordInput';
	export let value = 0;
	export let hint = '';
	export let readonly = false;
	export let hasBackground = true;
	export let preIcon = undefined;
	export let postIcon = undefined;
	export let valid = false;
	export let ref = undefined;
	export let validations = [];

	export let validationResult = undefined;

	const id = createUId();
	const inputValidation = new InputValidation();
	let required = false;
	let min = undefined;
	let max = undefined;
	let showErrors = false;
	let loaded = false;

	let input = undefined;
	let labelLeftPosition = 0;

	const context = getContext(formContext);

	const onValidate = (e) => {
		showErrors = true;
		validationResult = e.detail;
		valid = validationResult.isValid;
		if (context) {
			context.updateElement({ ref: input, type: 'numberInput', validations, value, valid, name });
		}
	};

	const increseValue = () => {
		if (value < max || max === undefined || max === null) {
			value++;
		}
	};

	const decreseValue = () => {
		if (value > min || min === undefined || min === null) {
			value--;
		}
	};

	$: classes = [`qei-number-input`, disabled && `disabled`, hasBackground && `has-background`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	if (!useLabel && label !== '') {
		placeholder = label;
	}

	onMount(async () => {
		if (input) {
			labelLeftPosition = input.offsetLeft;
		}

		if (context) {
			context.addElement({ ref: input, type: 'numberInput', validations, value, valid, name });
		}

		validations.map((v) => {
			if (v instanceof RequiredValidation) {
				required = true;
			}

			if (v instanceof MinValueValidation) {
				min = v.getValue();
			}

			if (v instanceof MaxValueValidation) {
				max = v.getValue();
			}
		});
		loaded = true;
	});

	const callValidation = () => {
		inputValidation.validation(input, { input, value, validations, inputName: name, loaded });
	};
</script>

<div
	{id}
	bind:this={ref}
	{...$$restProps}
	class={classes}
	class:invalid={validationResult && !validationResult.isValid}
	class:rounded
	class:readonly
	class:fullWidth
	style={$$restProps.style}
>
	<Flex class="input-container" direction="row" justifyContent="space-between" alignItems="center" style="height:100%">
		{#if preIcon}
			<Icon class="colorable-icons" style="margin-left:4px" iconName={preIcon} {size} color="secondary" />
		{/if}

		<input
			style="flex-grow: 1;"
			size="10"
			bind:this={input}
			use:inputValidation.validation={{ input, value, validations, name, loaded }}
			{name}
			type="number"
			{required}
			{disabled}
			{min}
			{max}
			bind:value
			on:input={callValidation}
			on:blur={callValidation}
			on:validate={onValidate}
			{placeholder}
		/>
		<div class="bottom-line" />

		{#if postIcon}
			<Icon class="colorable-icons" style="margin-right:4px" iconName={postIcon} {size} color="secondary" />
		{/if}

		<Flex direction="row" justifyContent="end" alignItems="center">
			<IconButton
				circle
				color="secondary"
				condense
				on:click={decreseValue}
				class="colorable-icons"
				{size}
				{disabled}
				iconName="expand_more"
			/>
			<IconButton
				circle
				color="secondary"
				condense
				on:click={increseValue}
				class="colorable-icons"
				{size}
				{disabled}
				iconName="expand_less"
			/>
		</Flex>

		{#if label !== '' && useLabel}
			<span style={`margin-left: ${labelLeftPosition}px;`} class="label">{label}</span>
		{/if}

		{#if hint && hint.length > 0}
			<span class="hint">{hint}</span>
		{/if}
	</Flex>

	{#if validationResult && !validationResult.isValid && showErrors}
		<div transition:fade class="validation-container" style="position: absolute; right:0; top:{ref.clientHeight + 2}px">
			<Flex direction="column" justifyContent="flex-end">
				<FlexItem alignSelf="flex-end">
					<IconButton circle on:click={() => (showErrors = false)} iconName="close" size="small" />
				</FlexItem>
				<div class="validation-errors">
					<ul>
						{#each validationResult.errors as error}
							<li class="validation-error">{error.message}</li>
						{/each}
					</ul>
				</div>
			</Flex>
		</div>
	{/if}
</div>
