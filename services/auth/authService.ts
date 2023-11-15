import { GenericDataResponse } from "../common/responses";
import type { UserForRegister } from "./userTypes";

const api = useNuxtApp().$api;

export function RegisterAsync(userForRegister: UserForRegister): Promise<GenericDataResponse<number>> {
    return api.post('/Auth/register', userForRegister).then((response => {
        let result = new GenericDataResponse<number>({
            Data: response.data.data,
            IsSuccess: response.data.isSuccess,
            Message: response.data.message
        });
        return result;
    }))
}