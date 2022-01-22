export class LocalStorage {
    static get(key) {
        const item = localStorage.getItem(key);
        let value = '';

        if (item) {
            try {
                value = JSON.parse(item);
            } catch (error) {
                value = item;
            }
        }

        return value;
    }

    static set(key, value) {
        if (value instanceof Object) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }

    static clearAll() {
        localStorage.clear();
    }

    static clearItem(key) {
        localStorage.removeItem(key);
    }
}
