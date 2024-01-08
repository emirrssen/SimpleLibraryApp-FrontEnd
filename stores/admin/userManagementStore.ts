import { useToast } from "vue-toastification"
import { GetUserDetailsByNameOrEmailAsync, UpdateEmailByUserIdAsync, DeleteAccountByUserIdAsync } from "~/services/auth/authService";
import { UserDetailsForAdminSearch } from "~/services/auth/userTypes";

export const useUserManagementStore = defineStore('user-management-store', () => {
    const toast = useToast();
    const isSelected = ref(false);
    const selectedSearchResult = ref({...new UserDetailsForAdminSearch()})
    const searchResult = ref([] as UserDetailsForAdminSearch[]);

    function selectUser() {
        isSelected.value = true;
    }

    function returnToUserSearch() {
        isSelected.value = false;
    }

    function searchUsers(searchText: string) {
        GetUserDetailsByNameOrEmailAsync(searchText).then((response) => {
            if (response.isSuccess) {
                let data = new Array<UserDetailsForAdminSearch>();

                response.data?.map(x => data.push(new UserDetailsForAdminSearch({
                    id: x.id,
                    accountStartDate: x.accountStartDate,
                    age: x.age,
                    currentReadedBookName: x.currentReadedBookName,
                    dateOfBirth: x.dateOfBirth,
                    email: x.email,
                    name: x.name,
                    totalReadedBooks: x.totalReadedBooks,
                    userImage: x.userImage
                })));

                searchResult.value = data;
            } else {
                toast.error(response.message);
            }
        })
    }

    function updateEmail(userId: number, newEmail: string) {
        UpdateEmailByUserIdAsync(userId, newEmail).then((response) => {
            if (response.isSuccess) {
                toast.success(response.message)
            } else {
                toast.error(response.message)
            }
        })
    }

    function closeAccount(userId: number) {
        DeleteAccountByUserIdAsync(userId).then((response) => {
            if (response.isSuccess) {
                toast.success(response.message)
            } else {
                toast.error(response.message)
            }
        })
    }

    return {
        isSelected, searchResult, selectedSearchResult,
        selectUser, returnToUserSearch, searchUsers, updateEmail, closeAccount
    }
})

// Sayfalara implemente edilecek bu fonksiyonlar