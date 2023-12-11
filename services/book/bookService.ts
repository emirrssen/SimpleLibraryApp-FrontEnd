import { Get, Post } from "../common/baseService";
import type { GenericDataResponse } from "../common/responses";
import type { BookDetailsForSearch, Filters } from "./types";

export function getBookDetailsByNameAsync(bookName: string): Promise<GenericDataResponse<BookDetailsForSearch[]>> {
    return Get<GenericDataResponse<BookDetailsForSearch[]>>("book/search", { BookName: bookName });
}

export function getFiltersAsync(): Promise<GenericDataResponse<Filters>> {
    return Get<GenericDataResponse<Filters>>("book/filters");
}

export function getBookDetailsByFiltersAsync(categoryFilters: number[], authorFilters: number[], releaseYearFilters: number[]): Promise<GenericDataResponse<BookDetailsForSearch[]>> {
    return Post<GenericDataResponse<BookDetailsForSearch[]>>("book/get-by-filters", { CategoryFilters: categoryFilters, AuthorFilters: authorFilters, ReleaseYearFilters: releaseYearFilters });
}