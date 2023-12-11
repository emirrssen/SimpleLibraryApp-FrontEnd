<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <Filters></Filters>
                </div>
                <div class="col-9">
                    <div class="mb-3 d-flex" style="gap: 15px;">
                        <div class="btn btn-outline-success d-flex" style="gap: 5px;" @click="searchOnClick()">
                            <i class="bi bi-search" />
                            Ara
                        </div>
                        <input v-model="searchValue" type="text" class="form-control" id="searchBar" placeholder="Ara...">
                    </div>
                    <SearchResults></SearchResults>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useBookSearchStore } from "~/stores/book-search/bookSearchStore"

    let bookSearchStore = useBookSearchStore();
    let searchValue: string;

    function searchOnClick() {
        bookSearchStore.search(searchValue).then(() => {
            searchValue = "";
        });
    }
</script>

<style>
</style>