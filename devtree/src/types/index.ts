export type FormType = {
    name: string;
    email: string;
    handle: string;
    password: string;
}

export type RegisterFormType = Pick<FormType, 'handle' | 'email' | 'name'> & {
    password: string,
    password_confirmation: string,
}