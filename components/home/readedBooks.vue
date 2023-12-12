<template>
    <div class="card component-card" style="height: 390px;">
        <div class="card-header">Okuduğu Kitaplar</div>
        <div class="card-body d-flex flex-wrap justify-content-start" style="gap: 10px; height: 390px; overflow-y: auto;">
            <div v-for="item in readedBooks" :key="item.id" class="card d-flex pt-2" style="width: 180px;">
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

    const store = useReadedBooksStore();

    onMounted(() => {
        store.getReadedBooksByUserId();
    })

    const readedBooks = computed(() => {
        return store.readedBooks;
    })
</script>