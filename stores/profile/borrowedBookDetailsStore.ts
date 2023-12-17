import { useToast } from "vue-toastification"
import { GetBorrowedBookDetailsByUserIdAsync } from "~/services/borrow-operation/borrowOperationServices";
import { BorrowedBookDetails } from "~/services/borrow-operation/types";
import { getCurrentUserId } from "~/services/common/localStorageBase";

export const useBorrowedBookDetailsStore = defineStore('borrowed-book-details-store', () => {
    const toast = useToast();
    const borrowedBookDetails = ref([] as BorrowedBookDetails[]);

    function getBorrowedBookDetails() {
        getCurrentUserId().then((userId) => {
            GetBorrowedBookDetailsByUserIdAsync(userId).then((response) => {
                if (response.isSuccess) {
                    let data = new Array<BorrowedBookDetails>();

                    response.data?.map(x => data.push(new BorrowedBookDetails({
                        id: x.id,
                        bookId: x.bookId,
                        bookCategory: x.bookCategory,
                        bookImage: x.bookImage,
                        bookName: x.bookName,
                        author: x.author,
                        pageNumber: x.pageNumber,
                        borrowedDate: x.borrowedDate,
                        returnedDate: x.returnedDate
                    })));

                    borrowedBookDetails.value = data;
                } else {
                    toast.error(response.message)
                }
            })
        })
    }

    return {
        borrowedBookDetails,
        getBorrowedBookDetails
    }
})