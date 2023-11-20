import { GenericDataResponse } from "../common/responses";
import { UserForLogin, UserForRegister } from "./userTypes";

const Post = useNuxtApp().$post;

export function RegisterAsync(userForRegister: UserForRegister): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/register', userForRegister);
}

export function LoginAsync(userForLogin: UserForLogin): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/login', userForLogin);
}