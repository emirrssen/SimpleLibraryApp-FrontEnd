<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col col-md-6 col-sm-12 offset-md-3 mt-5">
                    <div class="card">
                        <div class="card-header"><h5>Kayıt Ol</h5></div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="first-name" class="form-label">Adı:</label>
                                        <input type="text" class="form-control" id="first-name" v-model="userDataForRegister.FirstName">
                                        <div class="invalid-feedback">İsim zorunludur</div>
                                    </div>
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="last-name" class="form-label">Soyadı:</label>
                                        <input type="text" class="form-control" id="last-name" v-model="userDataForRegister.LastName">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="date-of-birth" class="form-label">Doğum Tarihi:</label>
                                        <input type="date" class="form-control" id="date-of-birth" v-model="userDataForRegister.DateOfBirth">
                                    </div>
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="nationality-id" class="form-label">TC Kimlik Numarası:</label>
                                        <input type="text" class="form-control" id="nationality-id" v-model="userDataForRegister.NationalityId">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="email" class="form-label">E-Posta:</label>
                                        <input type="email" class="form-control" id="email" v-model="userDataForRegister.Email">
                                    </div>
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="gender" class="form-label">Cinsiyet:</label>
                                        <select id="gender" class="form-select" aria-label="Cinsiyet" v-model="userDataForRegister.GenderId">
                                            <option value="0" selected>Seçiniz...</option>
                                            <option value="1">Erkek</option>
                                            <option value="2">Kadın</option>
                                            <option value="3">Belirtmek İstemiyorum</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="password" class="form-label">Şifre:</label>
                                        <input type="password" class="form-control" id="password" v-model="userDataForRegister.Password">
                                    </div>
                                    <div class="col col-12 col-md-6 mb-2">
                                        <label for="password-repeat" class="form-label">Şifre Tekrarı:</label>
                                        <input type="password" class="form-control" id="password-repeat" v-model="userDataForRegister.PasswordRepeat">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <NuxtLink class="navigate-to-login" to="/auth/login">Zaten Bir Hesabın Var Mı?</NuxtLink>
                            <button class="btn btn-success" @click="register" :disabled="btnRegisterDisabled()">Kayıt Ol</button>
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

    const userDataForRegister = computed(() => store.userDataForRegister);

    function btnRegisterDisabled(): boolean {
        const c1 = userDataForRegister.value.FirstName && userDataForRegister.value.FirstName.length > 0;
        const c2 = userDataForRegister.value.LastName && userDataForRegister.value.LastName.length > 0;
        const c3 = userDataForRegister.value.DateOfBirth;
        const c4 = userDataForRegister.value.NationalityId && userDataForRegister.value.NationalityId.length > 0;
        const c5 = userDataForRegister.value.Email && userDataForRegister.value.Email.length > 0;
        const c6 = userDataForRegister.value.GenderId && userDataForRegister.value.GenderId > 0;
        const c7 = userDataForRegister.value.Password && userDataForRegister.value.Password.length > 0;
        const c8 = userDataForRegister.value.PasswordRepeat && userDataForRegister.value.PasswordRepeat.length > 0;

        if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8) {
            return false
        }
        return true
    }

    function register() {
        store.register();
    }
</script>

<style scoped>
    .navigate-to-login {
        text-decoration: none;
        color: black;
    }

    .navigate-to-login:hover {
        text-decoration: underline;
        color: blue;
    }
</style>