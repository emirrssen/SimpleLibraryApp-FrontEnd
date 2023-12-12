import { useToast } from "vue-toastification"
import { getCurrentUserId } from "~/services/common/localStorageBase";
import { DeleteFavouriteBookByIdAsync, GetFavouriteBooksByUserIdAsync, InsertFavouriteBookAsync } from "~/services/favourite-book/favouriteBookService";
import { FavouriteBookDetailsForUser } from "~/services/favourite-book/types";

export const useFavouriteBooksStore = defineStore('favourite-books-store', () => {
    const toast = useToast();
    const favouriteBooksOfCurrentUser = ref([] as FavouriteBookDetailsForUser[])

    function getFavouriteBooksByUserId() {
        getCurrentUserId().then((response => {
            GetFavouriteBooksByUserIdAsync(response).then((response => {
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
        }));
    }

    function insertFavouriteBook(bookId: number | undefined) {
        return getCurrentUserId().then((currentUserId => {
            InsertFavouriteBookAsync(currentUserId, bookId).then((response => {
                if (response.isSuccess) {
                    getFavouriteBooksByUserId();
                    toast.success(response.message);
                } else {
                    toast.error(response.message);
                }
            }))
        }))
    }

    function deleteFavouriteBookById(idToDelete: number) {
        return DeleteFavouriteBookByIdAsync(idToDelete).then((response => {
            if (response.isSuccess) {
                getFavouriteBooksByUserId();
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        }))
    }

    return {
        favouriteBooksOfCurrentUser,
        getFavouriteBooksByUserId, insertFavouriteBook, deleteFavouriteBookById
    }
})