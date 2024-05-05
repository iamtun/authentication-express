class UserNotFoundError extends Error {
    constructor(message) {
        super(message);

        this.name = 'user_not_found';
    }
}

class PasswordNotMatchingError extends Error {
    constructor(message) {
        super(message);

        this.name = 'PasswordNotMatchingError';
    }
}

export {UserNotFoundError, PasswordNotMatchingError}
