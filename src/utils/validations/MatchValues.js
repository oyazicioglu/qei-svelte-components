export class MatchValues {
    #values;
    #fieldNames;
    constructor(values, fieldNames) {
        this.validate(values, fieldNames);
    }

    validate(value, name) {
        const isValid = value.length > 0 && value[0] === value[1];

        return {
            isValid,
            message: isValid ? undefined : `${name[0]} and ${name[1]} does not match.`,
        };
    }
}
