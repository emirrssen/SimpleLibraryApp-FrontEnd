<template>
    <div v-for="book in searchedValues" class="card mb-3">
        <div class="row">
            <div class="col-md-2 d-flex flex-column align-items-center justify-content-center pt-2" style="border-right: 1px solid rgba(0, 0, 0, .2); gap: 10px;">
                <img :src="book.bookImage" class="img-fluid rounded-start w-75">
                <p class="card-text"><small class="text-body-secondary">{{ book.pageNumber }} sayfa</small></p>
            </div>
            <div class="col-md-10">
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">{{ book.bookName }}</h5>
                    <p class="card-text">{{ book.description }}</p>
                    <div class="d-flex justify-content-end">
                        <div class="btn btn-success" @click="displayDetailsOnClick(book.id)">Detaylara Git</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useBookSearchStore } from "~/stores/book-search/bookSearchStore";
    import { useDetailsStore } from "#imports";
    import { navigateTo } from "nuxt/app";

    const store = useBookSearchStore();
    const detailsStore = useDetailsStore();

    const searchedValues = computed(() => store.searchedBooks)

    function displayDetailsOnClick(bookId: number) {
        detailsStore.getBookDetails(bookId).then(() => {
            navigateTo('/book-details');
        })
    }
    
</script>