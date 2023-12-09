import { Get } from "../common/baseService";
import type { GenericDataResponse } from "../common/responses";
import type { BookDetailsForSearch } from "./types";

export function getBookDetailsByNameAsync(bookName: string): Promise<GenericDataResponse<BookDetailsForSearch[]>> {
    return Get<GenericDataResponse<BookDetailsForSearch[]>>("book/search", { BookName: bookName });
}