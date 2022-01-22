import { Validations } from './Validations';

export class InputValidation {
    validation(node, { input, value, validations, name, loaded }) {
        if (!loaded) {
            return;
        }

        let result;
        const inputValidations = new Validations(value, validations, name);

        const validate = (input, value, validations, name) => {
            inputValidations.setValidations(validations);
            inputValidations.setValue(value);
            result = inputValidations.validate();

            node.dispatchEvent(new CustomEvent('validate', { detail: { input, name, ...result } }));
        };

        validate(input, value, validations, name);

        return {
            result,
            update({ input, value, validations, name }) {
                validate(input, value, validations, name);
            },
            destroy() {},
        };
    }
}
