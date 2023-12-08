import { useToast } from "vue-toastification"
import { GetAllWithDetails } from "~/services/carousel/carouselService";
import { CarouselItemDetails } from "~/services/carousel/types";

export const useCarouselStore = defineStore('carousel-store', () => {
    const toast = useToast();
    const carouselItems = ref([] as CarouselItemDetails[]);

    function getAllWithDetails() {
        GetAllWithDetails().then((response => {
            if (response.isSuccess) {
                let data = new Array<CarouselItemDetails>();

                response.data?.map(x => data.push(new CarouselItemDetails({
                    id: x.id,
                    image: x.image,
                    isVisible: x.isVisible,
                    queueNumber: x.queueNumber
                })));

                carouselItems.value = data;
            } else {
                toast.error(response.message)
            }
        }))
    }

    return {
        carouselItems,
        getAllWithDetails
    }
})