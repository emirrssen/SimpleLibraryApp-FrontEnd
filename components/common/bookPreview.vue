<template>
    <div class="card d-flex pt-2 book-preview" style="width: 180px;" @click="displayBookDetailsOnClick(bookId)">
        <div class="card-body">
            <img :src="bookImage" class="card-img-top" style="width: 145px;">
        </div>
        <div class="card-footer d-flex align-items-center flex-column" style="text-align: center;">
            <strong>{{ bookName }}</strong>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useDetailsStore } from '~/stores/book-details/detailsStore';
    import { navigateTo } from 'nuxt/app';

    const detailsStore = useDetailsStore();

    const props = defineProps({
        bookId: {
            type: Number,
            required: true
        },
        bookImage: {
            type: String,
            required: true
        },
        bookName: {
            type: String,
            required: true
        }
    })

    const { bookId, bookImage, bookName } = props;

    function displayBookDetailsOnClick(bookId: number) {
        detailsStore.getBookDetails(bookId).then(() => {
            navigateTo('/book-details');
        })
    }
</script>

<style scoped>
    .book-preview {
        transition: transform 0.1s ease-in-out;
    }

    .book-preview:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
</style>