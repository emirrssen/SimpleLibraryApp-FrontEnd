import { UserForLogin, UserForRegister } from "~/services/auth/userTypes"
import { RegisterAsync, LoginAsync } from "~/services/auth/authService"
import { useToast } from "vue-toastification";
import { navigateTo } from "nuxt/app";
import { setCurrentUserId } from "~/services/common/localStorageBase";

export const useAuthStore = defineStore('auth-store', () => {
    const toast = useToast();
    const userDataForRegister = ref({...new UserForRegister()});
    const userDataForLogin = ref({...new UserForLogin()});

    function register() {
        RegisterAsync(userDataForRegister.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message);
                setCurrentUserId(response.data);
                navigateTo('/home');
            } else {
                toast.error(response.message)
            }
        }));
    }

    function login() {
        LoginAsync(userDataForLogin.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message);
                setCurrentUserId(response.data);
                navigateTo('/home');
            } else {
                toast.error(response.message);
            }
        }))
    }

    return { 
        userDataForRegister, userDataForLogin,
        register, login
    }
})