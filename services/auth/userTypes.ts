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

export class PersonelInfoDetails {
    id: number | undefined = 0;
    name: string | undefined = "";
    profileImage: string | undefined = "";
    email: string | undefined = "";
    dateOfBirth: string | undefined = "";
    accountStartDate: string | undefined = "";
    readedBookNumber: number | undefined = 0;
    favouriteBookNumber: number | undefined = 0;

    constructor(fields?: {
        id: number | undefined, name: string | undefined, profileImage: string | undefined,
        email: string | undefined, dateOfBirth: string | undefined, accountStartDate: string | undefined,
        readedBookNumber: number | undefined, favouriteBookNumber: number | undefined 
    }) {
        Object.assign(this, fields);
    }
}

export class PasswordToChange {
    UserId: number = 0;
    OldPassword: string = "";
    NewPassword: string = "";
    NewPasswordRepeat: string = "";

    constructor(fields?: { UserId: number, OldPassword: string, NewPassword: string, NewPasswordRepeat: string }) {
        Object.assign(this, fields);
    }
}

export class UserDetailsForAdminSearch {
    id: number = 0;
    name: string = "";
    age: number = 0;
    dateOfBirth: string = "";
    userImage: string = "";
    totalReadedBooks: number = 0;
    currentReadedBookName: string = "";
    accountStartDate: string = "";
    email: string = "";

    constructor(fields?: {
        id: number,
        name: string,
        age: number,
        dateOfBirth: string,
        userImage: string,
        totalReadedBooks: number,
        currentReadedBookName: string,
        accountStartDate: string,
        email: string
    }) {
        Object.assign(this, fields);
    }
}

export class SelectedUserDetailsForAdmin {
    id: number = 0;
    userImage: string = "";
    
}