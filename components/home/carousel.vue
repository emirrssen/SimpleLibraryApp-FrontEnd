<template>
    <div class="card" style="background-color: rgb(248,248,248);">
        <div class="card-header">Pano</div>
        <div class="card-body px-2 py-2 d-flex align-items-center" style="height: 400px;">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner d-flex align-items-center">
                    <div v-for="item in carouselItems" :key="item.id" class="carousel-item" :class="{active: item.id === 1}">
                        <img :src="item.image" class="d-block w-100" style="object-fit: cover;">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useCarouselStore } from "~/stores/home/carouselStore"

    const carouselStore = useCarouselStore();

    onMounted(() => {
        carouselStore.getAllWithDetails();
    })

    const carouselItems = computed(() => {
        return carouselStore.carouselItems;
    })
</script>