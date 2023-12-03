import { Get } from "../common/baseService";
import type { GenericDataResponse } from "../common/responses";
import type { CarouselItemDetails } from "./types";

export function GetAllWithDetails(): Promise<GenericDataResponse<CarouselItemDetails[]>> {
    return Get<GenericDataResponse<CarouselItemDetails[]>>("CarouselItem");
}