export class ReadedBook {
    id: number = 0;
    bookName: string = "";
    bookImage: string = "";

    constructor(fields?: { id: number, bookName: string, bookImage: string }) {
        Object.assign(this, fields);
    }
}