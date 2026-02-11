export type FormType = {
    name: string;
    email: string;
    handle: string;
}

export type RegisterFormType = Pick<FormType, 'handle' | 'email' | 'name'> & {
    password: string,
    password_confirmation: string,
}

export type LoginFormType = Pick<FormType, 'email'> & {
    password: string,
}