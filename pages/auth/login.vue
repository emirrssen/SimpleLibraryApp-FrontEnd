<template>
    <div>
        <div class="row">
            <div class="col col-12 col-md-4 offset-md-4">
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
                        <button class="btn btn-success" @click="login">
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { useAuthStore } from '~/store/auth/authStore';
    import { mapState, mapActions } from 'pinia';

    export default {
        computed: {
            ...mapState(useAuthStore, ['userDataForLogin']),
        },

        methods: {
            ...mapActions(useAuthStore, ['login'])
        }
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