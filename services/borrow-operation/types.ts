export class ReadedBook {
    id: number = 0;
    bookId: number = 0;
    bookName: string = "";
    bookImage: string = "";

    constructor(fields?: { id: number, bookId:number, bookName: string, bookImage: string }) {
        Object.assign(this, fields);
    }
}

export class BorrowedBookDetails {
    id: number = 0;
    bookId: number = 0;
    bookName: string = "";
    bookImage: string = "";
    author: string = "";
    pageNumber: number = 0;
    bookCategory: string = "";
    borrowedDate: string = "";
    returnedDate: string = "";

    constructor(fields?: {
        id: number,
        bookId: number,
        bookName: string,
        bookImage: string,
        author: string,
        pageNumber: number,
        bookCategory: string,
        borrowedDate: string,
        returnedDate: string
    }) {
        Object.assign(this, fields);
    }
}