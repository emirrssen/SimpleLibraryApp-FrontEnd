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

export class Filters {
    categoryFilter: CategoryFilter[] = [];
    authorFilter: AuthorFilter[] = [];
    releaseYearFilter: ReleaseYearFilter[] = [];

    constructor(fields?: { categoryFilter: CategoryFilter[], authorFilter: AuthorFilter[], releaseYearFilter: ReleaseYearFilter[] }) {
        Object.assign(this, fields);
    }
}

export class CategoryFilter {
    id: number = 0;
    name: string = "";
    isSelected: boolean = false;

    constructor(fields?: { id: number, name: string, isSelected: boolean }) {
        Object.assign(this, fields);
    }
}

export class AuthorFilter {
    id: number = 0;
    name: string = "";
    isSelected: boolean = false;

    constructor(fields?: { id: number, name: string, isSelected: boolean }) {
        Object.assign(this, fields);
    }
}

export class ReleaseYearFilter {
    id: number = 0;
    releaseYear: string = "";
    isSelected: boolean = false;

    constructor(fields?: { id: number, releaseYear: string, isSelected: boolean }) {
        Object.assign(this, fields);
    }
}

export class BookDetails {
    id: number | undefined = 0;
    authorId: number | undefined = 0;
    bookName: string | undefined = "";
    description: string | undefined = "";
    bookImage: string | undefined = "";
    pageNumber: number | undefined = 0;
    author: string | undefined = "";
    releaseYear: string | undefined = "";
    category: string | undefined = "";
    publisher: string | undefined = "";

    constructor(fields?: {
        id: number | undefined,
        authorId: number | undefined,
        bookName: string | undefined,
        description: string | undefined,
        bookImage: string | undefined,
        pageNumber: number | undefined,
        author: string | undefined,
        releaseYear: string | undefined,
        category: string | undefined,
        publisher: string | undefined
    }) {
        Object.assign(this, fields);
    }
}

export class BookDetailsForRecommendation {
    id: number = 0;
    bookName: string = "";
    bookImage: string = "";

    constructor(fields?: { id: number, bookName: string, bookImage: string }) {
        Object.assign(this, fields);
    }
}