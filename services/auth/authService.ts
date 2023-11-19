import { GenericDataResponse } from "../common/responses";
import { UserForRegister } from "./userTypes";

const Post = useNuxtApp().$post;

export function RegisterAsync(userForRegister: UserForRegister): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/register', userForRegister)
}