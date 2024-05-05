class UserNotFoundError extends Error {
    constructor(message) {
        super(message);

        this.name = 'user_not_found';
    }
}

class PasswordNotMatchingError extends Error {
    constructor(message) {
        super(message);

        this.name = 'password_not_matching';
    }
}

class DuplicateUserEmailError extends Error {
    constructor(message) {
        super(message);

        this.name = 'duplicate_user_email';
    }
}

class DuplicateUserUsernameError extends Error {
    constructor(message) {
        super(message);

        this.name = 'duplicate_username';
    }
}

class RefreshTokenExpiredError extends Error {
    constructor(message) {
        super(message);

        this.name = 'refresh_token_expired';
    }
}

class RefreshTokenNotFoundError extends Error {
    constructor(message) {
        super(message);

        this.name = 'refresh_token_not_found';
    }
}

class RefreshTokenRevokedError extends Error {
    constructor(message) {
        super(message);

        this.name = 'refresh_token_revoked';
    }
}

export {
    UserNotFoundError,
    PasswordNotMatchingError,
    DuplicateUserEmailError,
    DuplicateUserUsernameError,
    RefreshTokenExpiredError,
    RefreshTokenNotFoundError,
    RefreshTokenRevokedError
}
