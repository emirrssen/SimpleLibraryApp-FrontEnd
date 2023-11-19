import { UserForRegister } from "~/services/auth/userTypes"
import { RegisterAsync } from "~/services/auth/authService"
import { useToast } from "vue-toastification";

export const useAuthStore = defineStore('auth-store', () => {
    const toast = useToast();
    const userDataForRegister = ref(new UserForRegister())

    function register() {
        RegisterAsync(userDataForRegister.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }
        }));
    }

    return { userDataForRegister, register }
})