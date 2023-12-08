import { Get } from "../common/baseService";
import { GenericDataResponse } from "../common/responses";
import type { ReadedBook } from "./types";

export function getReadedBooksByUserIdAsync(userId: number): Promise<GenericDataResponse<ReadedBook[]>> {
    return Get<GenericDataResponse<ReadedBook[]>>("borrowoperation/get-readed-books-by-user-id", { UserId: userId });
}

export function getFavouriteCategoriesByUserIdAsync(userId: number): Promise<GenericDataResponse<string[]>> {
    return Get<GenericDataResponse<string[]>>("borrowoperation/get-favourite-categories-by-user-id", { UserId: userId });
}