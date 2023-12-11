<template>
    <div class="card">
        <div class="card-header">
            Filtrele
        </div>
        <div class="card-body px-0 py-0">
            <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Kategori
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div v-for="category in filters.categoryFilter" :key="category.id" class="form-check">
                            <input class="form-check-input" type="checkbox" :id="`checkForCategory${category.id}`" v-model="category.isSelected">
                            <label class="form-check-label" :for="`checkForCategory${category.id}`">
                                {{ category.name }}
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Yazar
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div v-for="author in filters.authorFilter" :key="author.id" class="form-check">
                            <input class="form-check-input" type="checkbox" :id="`checkForAuthor${author.id}`" v-model="author.isSelected">
                            <label class="form-check-label" :for="`checkForAuthor${author.id}`">
                                {{ author.name }}
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Yayın Yılı
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div v-for="releaseYear in filters.releaseYearFilter" :key="releaseYear.id" class="form-check">
                            <input class="form-check-input" type="checkbox" :id="`checkForPublishDate${releaseYear.id}`" v-model="releaseYear.isSelected">
                            <label class="form-check-label" :for="`checkForPublishDate${releaseYear.id}`">
                                {{ releaseYear.releaseYear }}
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <div class="btn btn-danger" @click="clearFiltersOnClick()">Temizle</div>
            <div class="btn btn-success" @click="getBooksByFiltersOnClick()">Filtrele</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useBookSearchStore } from '~/stores/book-search/bookSearchStore';

    const store = useBookSearchStore();

    onMounted(() => {
        store.getFilters();
    })

    const filters = computed(() => {
        return store.filters;
    })

    function getBooksByFiltersOnClick() {
        store.getBooksByFilters();
    }

    function clearFiltersOnClick() {
        filters.value.authorFilter.map(x => x.isSelected = false);
        filters.value.categoryFilter.map(x => x.isSelected = false);
        filters.value.releaseYearFilter.map(x => x.isSelected = false);
    }

</script>

<style>
</style>