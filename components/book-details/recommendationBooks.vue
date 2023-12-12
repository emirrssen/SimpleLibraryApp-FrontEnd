<template>
    <div class="card component-card">
        <div class="card-header">Bu Yazardan Daha Fazla Kitap</div>
        <div class="card-body d-flex" style="gap: 10px;">
            <BookPreview
                v-for="item in recommendations"
                :book-id="item.id"
                :book-image="item.bookImage"
                :book-name="item.bookName"
            ></BookPreview>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useDetailsStore } from '~/stores/book-details/detailsStore';
    import { useRecommendationsStore} from '~/stores/book-details/recommendationsStore';

    const detailsStore = useDetailsStore();
    const recommendationsStore = useRecommendationsStore();

    const recommendations = computed(() => recommendationsStore.recommendations);
    const currentBook = computed(() => detailsStore.currentBook)

    onMounted(() => {
        recommendationsStore.getRecommendationsByAuthorId(currentBook.value.authorId);
    })

    onBeforeRouteLeave(() => {
        recommendationsStore.clearData();
    })
</script>