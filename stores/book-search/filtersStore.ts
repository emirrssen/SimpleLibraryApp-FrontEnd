import { AuthorFilter, CategoryFilter, Filters, ReleaseYearFilter } from "~/services/book/types";
import { useToast } from "vue-toastification"
import { getFiltersAsync } from "~/services/book/bookService";

export const useFiltersStore = defineStore('filters-store', () => {
    const toast = useToast();
    const filters = ref({...new Filters()})

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

    return {
        filters,
        getFilters
    }
})