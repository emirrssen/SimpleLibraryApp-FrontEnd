export class FavouriteBookDetailsForUser {
    id: number = 0;
    bookId: number = 0;
    bookName: string = "";
    bookImage: string = "";

    constructor(fields?: { id: number, bookId: number, bookName: string, bookImage: string }) {
        Object.assign(this, fields);
    }
}