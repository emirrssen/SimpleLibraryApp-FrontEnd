<template>
    <div class="card component-card" style="height: 390px;">
        <div class="card-header">Okuduğu Kitaplar</div>
        <div class="card-body d-flex flex-wrap justify-content-start" style="gap: 10px; height: 390px; overflow-y: auto;">
            <div v-for="item in readedBooks" :key="item.id" class="card d-flex pt-2 book-preview" style="width: 180px;" @click="displayBookDetailsOnClick(item.bookId)">
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
    import { useReadedBooksStore } from "~/stores/home/readedBooksStore";
    import { useDetailsStore } from '~/stores/book-details/detailsStore';
    import { navigateTo } from "nuxt/app";

    const store = useReadedBooksStore();
    const detailsStore = useDetailsStore();

    onMounted(() => {
        store.getReadedBooksByUserId();
    })

    const readedBooks = computed(() => {
        return store.readedBooks;
    })

    function displayBookDetailsOnClick(bookId: number) {
        detailsStore.getBookDetails(bookId).then(() => {
            navigateTo('/book-details');
        })
    }
</script>