import { FavouriteBookDetailsForUser } from "~/services/favourite-book/types"
import { GetFavouriteBooksByUserIdAsync } from "~/services/favourite-book/favouriteBookService"
import nuxtStorage from "nuxt-storage";
import { useToast } from "vue-toastification";

export const useFavouriteBookStore = defineStore('favourite-book-store', () => {
    const toast = useToast();
    const favouriteBooksOfCurrentUser = ref([] as FavouriteBookDetailsForUser[])

    function getFavouriteBooksByUserId() {
        const userId = nuxtStorage.localStorage.getData("current-user-id");
        GetFavouriteBooksByUserIdAsync(userId).then((response => {
            let data = new Array<FavouriteBookDetailsForUser>();
            if (response.isSuccess) {
                response?.data?.map(x => data.push(new FavouriteBookDetailsForUser({
                    id: x.id,
                    bookName: x.bookName,
                    bookImage: x.bookImage    
                })))
                favouriteBooksOfCurrentUser.value = data;
            } else {
                toast.error(response.message)
            }
        }))
    }

    return {
        favouriteBooksOfCurrentUser,
        getFavouriteBooksByUserId
    }
})