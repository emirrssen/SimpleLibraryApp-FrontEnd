export class UserForRegister {
    GenderId: number = 0;
    FirstName: string = "";
    LastName: string = "";
    DateOfBirth: Date | null = null;
    NationalityId: string = "";
    Email: string = "";
    Password: string = "";
    PasswordRepeat: string = "";

    constructor(fields?: {
        GenderId: number, FirstName: string, LastName: string, DateOfBirth: Date, 
        NationalityId: string, Email: string, Password: string, PasswordRepeat: string
    }) {
        Object.assign(this, fields);
    }
}

export class UserForLogin {
    Email: string = "";
    Password: string = "";

    constructor(fields?: { Email: string, Password: string }) {
        Object.assign(this, fields);
    }
}

export class PersonelInfo {
    firstName: string | undefined = "";
    lastName: string | undefined = "";
    profileImageUrl: string | undefined = "";
    age: number | undefined = 0;
    numberOfBookReaded: number | undefined = 0;
    bookNamesCurrentlyReading: string[] | undefined = [];

    constructor(fields?: {
        firstName: string | undefined, lastName: string | undefined, profileImageUrl: string | undefined,
        age: number | undefined, numberOfBookReaded: number | undefined, bookNamesCurrentlyReading: string[] | undefined
    }) {
        Object.assign(this, fields);
    }
}