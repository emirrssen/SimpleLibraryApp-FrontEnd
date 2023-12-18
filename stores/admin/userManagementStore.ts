import { useToast } from "vue-toastification"

export const useUserManagementStore = defineStore('user-management-store', () => {
    const toast = useToast();
    const isSelected = ref(false);

    function selectUser() {
        isSelected.value = true;
    }

    function returnToUserSearch() {
        isSelected.value = false;
    }

    return {
        isSelected,
        selectUser, returnToUserSearch
    }
})