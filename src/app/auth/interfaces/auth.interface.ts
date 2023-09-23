
export interface ILoginForm {
    email: string,
    password: string,
}

export interface IRegisterForm extends ILoginForm {
    username: string,
    phoneNumber: string,
    confirmPassword: string
}