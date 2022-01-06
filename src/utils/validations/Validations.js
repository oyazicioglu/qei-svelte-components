export class Validations {
    #name;
    #validations;
    #value;
    constructor(value, validations, name) {
        this.#name = name;
        this.#value = value;
        this.#validations = validations;
    }

    validate() {
        let validationsResult = {
            isValid: true,
            name: this.#name,
            errors: [],
        };
        if (this.#validations) {
            this.#validations.map((validator) => {
                const retValue = validator.validate(this.#value, this.#name);
                if (retValue.isValid === false) {
                    validationsResult.errors.push(retValue);
                    validationsResult.isValid = false;
                }
            });
        }
        return validationsResult;
    }

    setValidations(validations) {
        this.#validations = validations;
    }

    setValue(value) {
        this.#value = value;
    }
}
