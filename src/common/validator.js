export const fullnameValid = {
    required: {
        value: true,
        message: "fullname field can't be empty",
    },
}

export const emailValid = {
    required: {
        value: true,
        message: "email field can't be empty",
    },
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "email field is not valid",
    },
}

export const passwordValid = {
    required: {
        value: true,
        message: "password field can't be empty",
    },
    minLength: {
        value: 6,
        message: "password length should be >= 6 characters",
    },
}