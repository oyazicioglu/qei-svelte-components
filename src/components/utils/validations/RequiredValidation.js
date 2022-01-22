export class RequiredValidation {
    constructor() {}

    validate(value, name) {
        const isValid = value !== '';

        return {
            isValid,
            message: `${name} is required.`,
        };
    }
}
