import { GenericDataResponse } from "../common/responses";
import { Get } from "../common/baseService";
import type { FavouriteBookDetailsForUser } from "./types";

export function GetFavouriteBooksByUserIdAsync(userId: number): Promise<GenericDataResponse<FavouriteBookDetailsForUser[]>> {
    return Get<GenericDataResponse<FavouriteBookDetailsForUser[]>>('favouritebook', { UserId: userId })
}