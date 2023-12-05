import { Get } from "../common/baseService";
import type { GenericDataResponse } from "../common/responses";
import type { ReadedBook } from "./types";

export function getReadedBooksByUserIdAsync(userId: number): Promise<GenericDataResponse<ReadedBook[]>> {
    return Get<GenericDataResponse<ReadedBook[]>>("borrowoperation/get-readed-books-by-user-id", { UserId: userId })
}