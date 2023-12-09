export class BookDetailsForSearch {
    id: number = 0;
    bookName: string = "";
    bookImage: string = "";
    pageNumber: number = 0;
    description: string = "";

    constructor(fields?: {
        id: number,
        bookName: string,
        bookImage: string,
        pageNumber: number,
        description: string
    }) {
        Object.assign(this, fields);
    }
}