import { PersonelInfo, UserForLogin, UserForRegister } from "~/services/auth/userTypes"
import { RegisterAsync, LoginAsync, LoadPersonelInfoAsync } from "~/services/auth/authService"
import { useToast } from "vue-toastification";
import { navigateTo } from "nuxt/app";
import nuxtStorage from "nuxt-storage";

export const useAuthStore = defineStore('auth-store', () => {
    const toast = useToast();
    const userDataForRegister = ref({...new UserForRegister()});
    const userDataForLogin = ref({...new UserForLogin()});
    const personelInformationOfCurrentUser = ref({...new PersonelInfo()});

    function register() {
        RegisterAsync(userDataForRegister.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message);
                nuxtStorage.localStorage.setData("current-user-id", response.data);
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
                nuxtStorage.localStorage.setData("current-user-id", response.data);
                navigateTo('/home');
            } else {
                toast.error(response.message);
            }
        }))
    }

    function loadPersonelInfo(): Promise<void> {
        let currentUserId = nuxtStorage.localStorage.getData("current-user-id");
        return LoadPersonelInfoAsync(currentUserId).then((response => {
            if (response.isSuccess) {
                personelInformationOfCurrentUser.value.firstName = response.data?.firstName;
                personelInformationOfCurrentUser.value.lastName = response.data?.lastName;
                personelInformationOfCurrentUser.value.profileImageUrl = response.data?.profileImageUrl;
                personelInformationOfCurrentUser.value.age = response.data?.age;
                personelInformationOfCurrentUser.value.bookNamesCurrentlyReading = response.data?.bookNamesCurrentlyReading;
                personelInformationOfCurrentUser.value.numberOfBookReaded = response.data?.numberOfBookReaded;
            } else {
                toast.error(response.message);
            }
        }))
    }

    return { 
        userDataForRegister, userDataForLogin, personelInformationOfCurrentUser,
        register, login, loadPersonelInfo
    }
})