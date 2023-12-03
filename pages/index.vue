<template>
    <div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-6 offset-3 d-flex flex-column align-items-center">
                    <div>Simple Library App uygulamasına hoşgeldiniz...</div>
                    <div class="mt-2">Aşağıdaki butonu kullanarak giriş yapabilirsiniz.</div>
                    <NuxtLink class="btn btn-success mt-3" to="/auth/login">Giriş İçin</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false
    })
</script>