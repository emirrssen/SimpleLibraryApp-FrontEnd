<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container d-flex justify-content-between">
                <div class="d-flex align-items-center" style="gap: 5px;">
                    <button class="btn btn-light mr-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i class="bi bi-list" />
                    </button>
                    <NuxtLink class="navbar-brand" to="/home">
                        <span>
                            <i class="bi bi-book" />
                            Simple Library App
                        </span>
                    </NuxtLink>
                </div>
                <div class="d-flex align-items-center" style="gap: 5px;">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>
                                <i class="bi bi-person-circle"/>
                                Hesap
                            </span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><NuxtLink class="dropdown-item" to="/profile">Hesabım</NuxtLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" @click="logOut()">Çıkış Yap</a></li>
                        </ul>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Ara" aria-label="Ara" v-model="data">
                        <div class="btn btn-outline-success d-flex align-items-center" style="gap: 5px;" @click="searchOnClick()">
                            <i class="bi bi-search" />
                            Ara
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"><i class="bi bi-book" /> Simple Library App</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col col-12 mt-3 mb-3">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { setCurrentUserId } from '~/services/common/localStorageBase'
    import { navigateTo } from "nuxt/app";
    import { useBookSearchStore } from "~/stores/book-search/bookSearchStore"

    const bookSearchStore = useBookSearchStore();

    let data: string = "";

    function logOut() {
        setCurrentUserId(0);
        navigateTo('/')
    }

    function searchOnClick() {
        bookSearchStore.search(data);
        navigateTo('/book-search');
    }
</script>

<style scoped>
    .dropdown-item:hover {
        cursor: pointer;
    }
</style>