import { useToast } from "vue-toastification"
import { getFavouriteCategoriesByUserIdAsync } from "~/services/borrow-operation/borrowOperationServices";
import { getCurrentUserId } from "~/services/common/localStorageBase";

export const useFavouriteCategoriesStore = defineStore('favourite-categories-store', () => {
    const toast = useToast();
    const favouriteCategories = ref([] as string[])

    function getFavouriteCategories() {
        getCurrentUserId().then((userId) => {
            getFavouriteCategoriesByUserIdAsync(userId).then((response) => {
                if (response.isSuccess) {
                    let data = new Array<string>();
                    response.data?.map(x => data.push(x))

                    favouriteCategories.value = data;
                } else {
                    toast.error(response.message)
                }
            })
        })
    }

    return {
        favouriteCategories,
        getFavouriteCategories
    }
})