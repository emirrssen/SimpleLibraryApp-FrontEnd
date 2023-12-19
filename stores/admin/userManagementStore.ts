import { useToast } from "vue-toastification"
import { GetUserDetailsByNameOrEmailAsync } from "~/services/auth/authService";
import { UserDetailsForAdminSearch } from "~/services/auth/userTypes";

export const useUserManagementStore = defineStore('user-management-store', () => {
    const toast = useToast();
    const isSelected = ref(false);
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

    return {
        isSelected, searchResult,
        selectUser, returnToUserSearch, searchUsers
    }
})