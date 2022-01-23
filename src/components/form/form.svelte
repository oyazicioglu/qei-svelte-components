<script context="module">
	import { slide } from 'svelte/transition';
	import { createUId } from '../utils/uid-creator.js';
	export const formContext = {};
</script>

<script>
	import { createEventDispatcher, setContext } from 'svelte';
	import { InputValidation } from 'qei-input-validations';

	export let disabled = false;
	export let ref = undefined;
	export let formError = undefined;

	let elements = [];

	const id = createUId();
	const inputValidation = new InputValidation();
	const dispatcher = createEventDispatcher();

	const setElementValidation = (formElement) => {
		const element = elements.find((i) => i.ref === formElement.ref);

		if (!element) {
			dispatch(false);
			return;
		}

		const invalidInputs = elements.find((e) => e.valid === false);
		dispatch(!invalidInputs);
	};

	const addElement = (element) => {
		elements.push(element);
	};

	const updateElement = (element) => {
		const foundElement = elements.find((e) => e.ref === element.ref);
		const indexOf = elements.indexOf(foundElement);

		if (indexOf !== -1) {
			elements[indexOf] = element;
			setElementValidation(element);
		}
	};

	const dispatch = (isValid) => {
		dispatcher('validate', { isValid });
	};

	const validateAll = () => {
		elements.forEach((element) => {
			inputValidation.validation(element.ref, {
				input: element.ref,
				value: element.value,
				validations: element.validations,
				inputName: element.name,
				loaded: true,
			});
		});
	};

	setContext(formContext, { addElement, updateElement, validateAll });

	$: classes = [`qei-form`, disabled && `disabled`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} class={classes} style={$$restProps.style}>
	<form on:submit on:submit|preventDefault={validateAll}>
		<slot />
	</form>
	{#if formError}
		<div transition:slide class="validation-container mt-10 p-6">
			<p class="validation-error">{`${formError.errorNo} : ${formError.message}`}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.qei-form {
		width: 100%;
		position: relative;
	}
	.validation-container {
		font-size: 0.85em;
		position: relative;
		z-index: 2;
		border-left: 2px solid rgb(190, 48, 79);
	}

	.validation-error {
		white-space: nowrap;
		color: rgb(218, 39, 77);
	}
</style>
