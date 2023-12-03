<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col col-12 col-md-4 offset-md-4 mt-5">
                    <div class="card">
                        <div class="card-header d-flex align-items-center "><h5>Giriş Yap</h5></div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col col-12">
                                        <div class="mb-2">
                                            <label for="email" class="form-label">E-Posta</label>
                                            <input type="email" class="form-control" id="email" v-model="userDataForLogin.Email">
                                        </div>
                                    </div>
                                    <div class="col col-12">
                                        <div class="mb-2">
                                            <label for="password" class="form-label">Şifre</label>
                                            <input type="password" class="form-control" id="password" v-model="userDataForLogin.Password">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <NuxtLink class="navigate-to-register d-flex align-items-center justify-content-center" to="/auth/register">Hesabın Yok Mu?</NuxtLink>
                            <button class="btn btn-success" @click="login" :disabled="btnLoginDisabled()">
                                Giriş Yap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth/authStore';

    definePageMeta({
        layout: false
    })

    const store = useAuthStore();

    const userDataForLogin = computed(() => store.userDataForLogin)

    function btnLoginDisabled():boolean {
        const c1 = userDataForLogin.value && userDataForLogin.value.Email.length > 0;
        const c2 = userDataForLogin.value && userDataForLogin.value.Password.length > 0;

        if (c1 && c2) {
            return false
        }
        return true
    }

    function login() {
        store.login();
    }
</script>

<style scoped>
    .navigate-to-register {
        text-decoration: none;
        color: black;
    }
    .navigate-to-register:hover {
        text-decoration: underline;
        color: blue;
    }
</style>