import { useToast } from "vue-toastification"
import { getBookDetailsByBookIdAsync } from "~/services/book/bookService";
import { BookDetails } from "~/services/book/types";

export const useDetailsStore = defineStore('details-store', () => {
    const toast = useToast();
    const currentBook = ref({...new BookDetails});

    function getBookDetails(bookId: number): Promise<void> {
        return getBookDetailsByBookIdAsync(bookId).then((response => {
            if (response.isSuccess) {
                let data = new BookDetails({
                    id: response.data?.id,
                    authorId: response.data?.authorId,
                    author: response.data?.author,
                    bookImage: response.data?.bookImage,
                    bookName: response.data?.bookName,
                    category: response.data?.category,
                    description: response.data?.description,
                    pageNumber: response.data?.pageNumber,
                    publisher: response.data?.publisher,
                    releaseYear: response.data?.releaseYear
                });

                currentBook.value = data;
            } else {
                toast.error(response.message)
            }
        }))
    }

    return {
        currentBook,
        getBookDetails
    }
})