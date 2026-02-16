export type FormType = {
    name: string;
    email: string;
    handle: string;
    _id: string;
    description: string;
    image: string;
}

export type RegisterFormType = Pick<FormType, 'handle' | 'email' | 'name'> & {
    password: string,
    password_confirmation: string,
}

export type LoginFormType = Pick<FormType, 'email'> & {
    password: string,
}

export type ProfileFormType = Pick<FormType, 'handle' | 'description'>