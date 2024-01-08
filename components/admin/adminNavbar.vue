<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container d-flex justify-content-between">
            <div class="d-flex align-items-center" style="gap: 5px;">
                <NuxtLink class="navbar-brand" to="/admin">
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
                        <li><a class="dropdown-item" @click="logOut()">Çıkış Yap</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { setCurrentUserId } from '~/services/common/localStorageBase'
    import { navigateTo } from "nuxt/app";

    function logOut() {
        setCurrentUserId(0);
        navigateTo('/')
    }
</script>

<style scoped>
    .dropdown-item:hover {
        cursor: pointer;
    }
</style>