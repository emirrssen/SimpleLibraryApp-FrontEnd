import { Get } from "../common/baseService";
import { GenericDataResponse } from "../common/responses";
import type { BorrowedBookDetails, ReadedBook } from "./types";

export function getReadedBooksByUserIdAsync(userId: number): Promise<GenericDataResponse<ReadedBook[]>> {
    return Get<GenericDataResponse<ReadedBook[]>>("personelinfo/get-readed-books-by-user-id", { UserId: userId });
}

export function getFavouriteCategoriesByUserIdAsync(userId: number): Promise<GenericDataResponse<string[]>> {
    return Get<GenericDataResponse<string[]>>("personelinfo/get-favourite-categories-by-user-id", { UserId: userId });
}

export function GetBorrowedBookDetailsByUserIdAsync(userId: number): Promise<GenericDataResponse<BorrowedBookDetails[]>> {
    return Get<GenericDataResponse<BorrowedBookDetails[]>>("borrowoperation/details", { UserId: userId });
}