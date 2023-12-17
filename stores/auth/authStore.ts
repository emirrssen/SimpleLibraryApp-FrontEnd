import { PasswordToChange, UserForLogin, UserForRegister } from "~/services/auth/userTypes"
import { RegisterAsync, LoginAsync, ChangePasswordByUserIdAsync } from "~/services/auth/authService"
import { useToast } from "vue-toastification";
import { navigateTo } from "nuxt/app";
import { getCurrentUserId, setCurrentUserId } from "~/services/common/localStorageBase";

export const useAuthStore = defineStore('auth-store', () => {
    const toast = useToast();
    const userDataForRegister = ref({...new UserForRegister()});
    const userDataForLogin = ref({...new UserForLogin()});
    const userDataForPasswordChange = ref({...new PasswordToChange()});

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

    function changePassword() {
        getCurrentUserId().then((userId) => {
            userDataForPasswordChange.value.UserId = userId;

            ChangePasswordByUserIdAsync(userDataForPasswordChange.value).then((response) => {
                if (response.isSuccess) {
                    userDataForPasswordChange.value.OldPassword = "";
                    userDataForPasswordChange.value.NewPassword = "";
                    userDataForPasswordChange.value.NewPasswordRepeat = "";

                    toast.success(response.message)
                } else {
                    toast.error(response.message)
                }
            })
        })
    }

    return { 
        userDataForRegister, userDataForLogin, userDataForPasswordChange,
        register, login, changePassword
    }
})