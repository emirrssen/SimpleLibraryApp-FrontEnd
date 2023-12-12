import { useToast } from "vue-toastification"
import { getBookDetailsForRecommendationsByAuthorIdAsync } from "~/services/book/bookService";
import { BookDetailsForRecommendation } from "~/services/book/types";

export const useRecommendationsStore = defineStore('recommendations-store', () => {
    const toast = useToast();
    const recommendations = ref([] as BookDetailsForRecommendation[]);

    function getRecommendationsByAuthorId(authorId: number | undefined) {
        getBookDetailsForRecommendationsByAuthorIdAsync(authorId).then((response => {
            if (response.data) {
                let data = new Array<BookDetailsForRecommendation>();

                response.data.map(x => data.push(new BookDetailsForRecommendation({
                    id: x.id,
                    bookName: x.bookName,
                    bookImage: x.bookImage
                })))

                recommendations.value = data;
            } else {
                toast.error(response.message);
            }
        }))
    }

    function clearData() {
        recommendations.value = new Array<BookDetailsForRecommendation>();
    }

    return {
        recommendations,
        getRecommendationsByAuthorId, clearData
    }
})