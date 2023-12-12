import { BaseResponse, GenericDataResponse } from "../common/responses";
import { Delete, Get, Post } from "../common/baseService";
import type { FavouriteBookDetailsForUser } from "./types";

export function GetFavouriteBooksByUserIdAsync(userId: number): Promise<GenericDataResponse<FavouriteBookDetailsForUser[]>> {
    return Get<GenericDataResponse<FavouriteBookDetailsForUser[]>>('favouritebook', { UserId: userId })
}

export function InsertFavouriteBookAsync(userId: number, bookId: number | undefined): Promise<BaseResponse> {
    return Post<BaseResponse>('favouritebook', {}, { UserId: userId, BookId: bookId });
}

export function DeleteFavouriteBookByIdAsync(idToDelete: number): Promise<BaseResponse> {
    return Delete<BaseResponse>('favouritebook', { IdToDelete: idToDelete });
}