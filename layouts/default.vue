<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container d-flex justify-content-between">
                <NuxtLink class="navbar-brand" to="/">
                    <span>
                        <i class="bi bi-book" />
                        Simple Library App
                    </span>
                </NuxtLink>
                <div class="dropdown">
                    <button class="btn btn-light dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>
                            <i class="bi bi-person-circle"/>
                            Hesap
                        </span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <!-- <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li> -->
                        <li><a class="dropdown-item" href="#">Hesap Ayarları</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li v-if="checkIsLoggedIn"><a class="dropdown-item" @click="logOut" href="#">Çıkış Yap</a></li>
                        <li v-if="!checkIsLoggedIn"><NuxtLink class="dropdown-item" to="/auth/login">Giriş Yap</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </nav>
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
    import nuxtStorage from "nuxt-storage";

    const checkIsLoggedIn = computed(() => {
        return nuxtStorage.localStorage.getData("current-user-id") !== 0 ? true : false;
    })

    function logOut() {
        nuxtStorage.localStorage.setData("current-user-id", 0);
    }
</script>