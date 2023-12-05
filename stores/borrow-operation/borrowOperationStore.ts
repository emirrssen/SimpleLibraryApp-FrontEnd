import { useToast } from "vue-toastification"
import { ReadedBook } from "~/services/borrow-operation/types";
import { getReadedBooksByUserIdAsync } from "~/services/borrow-operation/borrowOperationServices";
import { getCurrentUserId } from "~/services/common/localStorageBase";

export const useBorrowOperationStore = defineStore('borrow-operaion-store', () => {
    const toast = useToast();
    const readedBooks = ref([] as ReadedBook[])

    function getReadedBooksByUserId() {
        getCurrentUserId().then((responseForUserId) => {
            getReadedBooksByUserIdAsync(responseForUserId).then((response) => {
                if (response.isSuccess) {
                    let data = new Array<ReadedBook>();
    
                    response.data?.map(x => data.push(new ReadedBook({
                        id: x.id,
                        bookName: x.bookName,
                        bookImage: x.bookImage
                    })))
    
                    readedBooks.value = data;    
                } else {
                    toast.error(response.message);
                }
            })
        })
    }

    return {
        readedBooks,
        getReadedBooksByUserId
    }
})