
<template>
    <div class="card component-card">
        <div class="card-header">Favori Kitapları</div>
        <div class="card-body d-flex flex-wrap justify-content-center" style="gap: 18px; height: 390px; overflow-y: auto;">
            <BookPreview 
                v-for="item in favouriteBooks" 
                :book-id="item.bookId" 
                :book-image="item.bookImage"
                :book-name="item.bookName"
            ></BookPreview>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useFavouriteBooksStore } from '~/stores/home/favouriteBooksStore'

    const store = useFavouriteBooksStore();

    onMounted(() => {
        store.getFavouriteBooksByUserId();
    })

    const favouriteBooks = computed(() => {
        return store.favouriteBooksOfCurrentUser;
    })

</script>