// Exporter une interface pour typer un objet
export interface UserRegisterModel {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatePassword: string,
    bio?: string,
    linkedin?: string,
    twitter?: string
    facebook?: string,
};