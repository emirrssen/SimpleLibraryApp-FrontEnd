import { GenericDataResponse } from "../common/responses";
import { PersonelInfo, UserForLogin, UserForRegister } from "./userTypes";
import { Get, Post } from "../common/baseService";

export function RegisterAsync(userForRegister: UserForRegister): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/register', userForRegister);
}

export function LoginAsync(userForLogin: UserForLogin): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/login', userForLogin);
}

export function LoadPersonelInfoAsync(userId: number): Promise<GenericDataResponse<PersonelInfo>> {
    return Get<GenericDataResponse<PersonelInfo>>('personelinfo/load-personel-info', { userId: userId });
}