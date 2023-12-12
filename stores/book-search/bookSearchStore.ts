import { useToast } from "vue-toastification"
import { getBookDetailsByNameAsync } from "~/services/book/bookService";
import { BookDetailsForSearch } from "~/services/book/types";
import { getFiltersAsync, getBookDetailsByFiltersAsync } from "~/services/book/bookService";
import { AuthorFilter, CategoryFilter, Filters, ReleaseYearFilter } from "~/services/book/types";

export const useBookSearchStore = defineStore('book-search-store', () => {
    const toast = useToast();
    const searchedBooks = ref([] as BookDetailsForSearch[])
    const filters = ref({...new Filters()})

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
            } else {
                toast.error(response.message);
            }
        }))
    }

    function getFilters() {
        getFiltersAsync().then((response => {
            if (response.isSuccess) {
                let authorFilterData = new Array<AuthorFilter>();
                let categoryFilterData = new Array<CategoryFilter>();
                let releasedYearFilterData = new Array<ReleaseYearFilter>();

                response.data?.authorFilter.map(x => authorFilterData.push(new AuthorFilter({
                    id: x.id,
                    name: x.name,
                    isSelected: x.isSelected
                })));

                response.data?.categoryFilter.map(x => categoryFilterData.push(new CategoryFilter({
                    id: x.id,
                    name: x.name,
                    isSelected: x.isSelected
                })));

                response.data?.releaseYearFilter.map(x => releasedYearFilterData.push(new ReleaseYearFilter({
                    id: x.id,
                    releaseYear: x.releaseYear,
                    isSelected: x.isSelected
                })));

                filters.value.authorFilter = authorFilterData;
                filters.value.categoryFilter = categoryFilterData;
                filters.value.releaseYearFilter = releasedYearFilterData;
                
            } else {
                toast.error(response.message)
            }
        }))
    }

    function getBooksByFilters() {
        const categoryFilters = filters.value.categoryFilter.filter(x => x.isSelected).map(x => x.id);
        const authorFilters = filters.value.authorFilter.filter(x => x.isSelected).map(x => x.id);
        const releaseYearFilters = filters.value.releaseYearFilter.filter(x => x.isSelected).map(x => x.id);

        getBookDetailsByFiltersAsync(categoryFilters, authorFilters, releaseYearFilters).then((response => {
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
            } else {
                toast.error(response.message);
            }
        }))
    }

    return {
        filters, searchedBooks,
        search, getFilters, getBooksByFilters
    }
})