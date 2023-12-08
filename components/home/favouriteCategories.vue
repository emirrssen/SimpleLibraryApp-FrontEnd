<template>
    <div class="card" style="height: 165px;">
        <div class="card-header">Favori Kategorileri</div>
        <div class="card-body d-flex align-items-start justify-contet-between flex-wrap" style="gap: 8px;">
            <span v-for="item in favouriteBooks" class="badge text-bg-primary">{{ item }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useFavouriteCategoriesStore } from "~/stores/home/favouriteCategoriesStore"

    const store = useFavouriteCategoriesStore();

    onMounted(() => {
        store.getFavouriteCategories();
    })

    const favouriteBooks = computed(() => {
        return store.favouriteCategories;
    })
</script>