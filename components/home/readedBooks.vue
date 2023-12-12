<template>
    <div class="card component-card" style="height: 390px;">
        <div class="card-header">Okuduğu Kitaplar</div>
        <div class="card-body d-flex flex-wrap justify-content-start" style="gap: 10px; height: 390px; overflow-y: auto;">
            <BookPreview
                v-for="item in readedBooks"
                :book-id="item.bookId"
                :book-image="item.bookImage"
                :book-name="item.bookName"
            ></BookPreview>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useReadedBooksStore } from "~/stores/home/readedBooksStore";

    const store = useReadedBooksStore();

    onMounted(() => {
        store.getReadedBooksByUserId();
    })

    const readedBooks = computed(() => {
        return store.readedBooks;
    })
</script>