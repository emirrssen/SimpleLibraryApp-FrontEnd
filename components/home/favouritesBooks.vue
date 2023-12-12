
<template>
    <div class="card component-card">
        <div class="card-header">Favori Kitapları</div>
        <div class="card-body d-flex flex-wrap justify-content-center" style="gap: 10px; height: 390px; overflow-y: auto;">
            <div v-for="item in favouriteBooks" :key="item.id" class="card d-flex pt-2 book-preview" style="width: 180px;" @click="displayBookDetailsOnClick(item.bookId)">
                <div class="card-body">
                    <img :src="item.bookImage" class="card-img-top" style="width: 145px;">
                </div>
                <div class="card-footer">
                    <strong>{{ item.bookName }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useFavouriteBooksStore } from '~/stores/home/favouriteBooksStore'
    import { useDetailsStore } from '~/stores/book-details/detailsStore'
    import { navigateTo } from 'nuxt/app';

    const store = useFavouriteBooksStore();
    const detailsStore = useDetailsStore();

    onMounted(() => {
        store.getFavouriteBooksByUserId();
    })

    const favouriteBooks = computed(() => {
        return store.favouriteBooksOfCurrentUser;
    })

    function displayBookDetailsOnClick(bookId: number) {
        detailsStore.getBookDetails(bookId).then(() => {
            navigateTo('/book-details');
        })
    }

</script>