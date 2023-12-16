import { useToast } from "vue-toastification"
import { PersonelInfoDetails } from "~/services/auth/userTypes";
import { getCurrentUserId } from "~/services/common/localStorageBase";
import { GetDetailsForProfileAsync } from "~/services/auth/authService";

export const usePersonelInfoDetailsStore = defineStore('personel-info-details-store', () => {
    const toast = useToast();
    const personelInfoDetails = ref({...new PersonelInfoDetails()})

    function getPersonelInfoDetails() {
        getCurrentUserId().then((userId) => {
            GetDetailsForProfileAsync(userId).then((response => {
                if (response.isSuccess) {
                    let data = new PersonelInfoDetails();

                    data.id = response.data?.id;
                    data.name = response.data?.name;
                    data.email = response.data?.email;
                    data.profileImage = response.data?.profileImage;
                    data.dateOfBirth = response.data?.dateOfBirth;
                    data.accountStartDate = response.data?.accountStartDate;
                    data.readedBookNumber = response.data?.readedBookNumber;
                    data.favouriteBookNumber = response.data?.favouriteBookNumber;

                    personelInfoDetails.value = data;
                } else {
                    toast.error(response.message);
                }
            }))
        })
    }

    return {
        personelInfoDetails,
        getPersonelInfoDetails
    }
})