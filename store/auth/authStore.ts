import { UserForRegister } from "~/services/auth/userTypes"
import { RegisterAsync } from "~/services/auth/authService"

export const useAuthStore = defineStore('auth-store', () => {
    const userDataForRegister = ref(new UserForRegister())

    function register() {
        RegisterAsync(userDataForRegister.value).then((response => {
            console.log(response);
        }))
    }

    return { userDataForRegister, register }
})