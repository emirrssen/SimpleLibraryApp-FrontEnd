import { useToast } from "vue-toastification"
import { getBookDetailsByNameAsync } from "~/services/book/bookService";
import { BookDetailsForSearch } from "~/services/book/types";

export const useSearchResultsStore = defineStore('search-results-store', () => {
    const toast = useToast();
    const searchedBooks = ref([] as BookDetailsForSearch[])

    function search(searchValue: string): Promise<void> {
        return getBookDetailsByNameAsync(searchValue).then((response => {
            if (response.isSuccess) {
                let data = new Array<BookDetailsForSearch>();
                response.data?.map(x => data.push(new BookDetailsForSearch({
                    id: x.id,
                    bookName: x.bookName,
                    bookImage: x.bookImage,
                    pageNumber: x.pageNumber,
                    description: x.description
                })))

                searchedBooks.value = data;
                toast.success(response.message)
            } else {
                toast.error(response.message);
            }
        }))
    }

    return {
        searchedBooks,
        search
    }
})