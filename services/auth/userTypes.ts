export class UserForRegister {
    GenderId: number = 0;
    FirstName: string = "";
    LastName: string = "";
    DateOfBirth: string = "";
    NationalityId: string = "";
    Email: string = "";
    Password: string = "";
    PasswordRepeat: string = "";

    constructor(fields?: {
        GenderId: number, FirstName: string, LastName: string, DateOfBirth: string, 
        NationalityId: string, Email: string, Password: string, PasswordRepeat: string
    }) {
        Object.assign(this, fields);
    }
}