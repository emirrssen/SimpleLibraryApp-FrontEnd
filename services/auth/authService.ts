import { BaseResponse, GenericDataResponse } from "../common/responses";
import { PasswordToChange, PersonelInfo, PersonelInfoDetails, UserForLogin, UserForRegister } from "./userTypes";
import { Get, Post, Put } from "../common/baseService";

export function RegisterAsync(userForRegister: UserForRegister): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/register', {}, userForRegister);
}

export function LoginAsync(userForLogin: UserForLogin): Promise<GenericDataResponse<number>> {
    return Post<GenericDataResponse<number>>('Auth/login', {}, userForLogin);
}

export function LoadPersonelInfoAsync(userId: number): Promise<GenericDataResponse<PersonelInfo>> {
    return Get<GenericDataResponse<PersonelInfo>>('personelinfo/load-personel-info', { userId: userId });
}

export function GetDetailsForProfileAsync(userId: number): Promise<GenericDataResponse<PersonelInfoDetails>> {
    return Get<GenericDataResponse<PersonelInfoDetails>>('personelinfo/get-details-for-profile', { UserId: userId });
}

export function ChangePasswordByUserIdAsync(passwordToChange: PasswordToChange): Promise<BaseResponse> {
    return Put<BaseResponse>('personelinfo/change-password', {}, passwordToChange);
}