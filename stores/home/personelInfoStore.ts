import { useToast } from "vue-toastification"
import { LoadPersonelInfoAsync } from "~/services/auth/authService";
import { PersonelInfo } from "~/services/auth/userTypes";
import { getCurrentUserId } from "~/services/common/localStorageBase";

export const usePersonelInfoStore = defineStore('personel-info-store', () => {
    const toast = useToast();
    const personelInformationOfCurrentUser = ref({...new PersonelInfo()});

    function loadPersonelInfo(){
        getCurrentUserId().then((response => {
            return LoadPersonelInfoAsync(response).then((response => {
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
        }));
    }

    return {
        personelInformationOfCurrentUser,
        loadPersonelInfo
    }
})