<template>
    <div>
        <div class="row">
            <div class="col col-md-6 col-sm-12 offset-md-3">
                <div class="card">
                    <div class="card-header"><h5>Kayıt Ol</h5></div>
                    <div class="card-body">
                        <form>
                            <div class="row mb-4">
                                <div class="col col-12 col-md-6">
                                    <label for="first-name" class="form-label">Adı:</label>
                                    <input type="text" class="form-control" id="first-name" required>
                                    <div class="invalid-feedback">İsim zorunludur</div>
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="last-name" class="form-label">Soyadı:</label>
                                    <input type="text" class="form-control" id="last-name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col col-12 col-md-6">
                                    <label for="date-of-birth" class="form-label">Doğum Tarihi:</label>
                                    <input type="date" class="form-control" id="date-of-birth">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="nationality-id" class="form-label">TC Kimlik Numarası:</label>
                                    <input type="text" class="form-control" id="nationality-id">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col col-12 col-md-6">
                                    <label for="email" class="form-label">E-Posta:</label>
                                    <input type="email" class="form-control" id="email">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="sex" class="form-label">Cinsiyet:</label>
                                    <select id="sex" class="form-select" aria-label="Cinsiyet">
                                        <option selected>Seçiniz...</option>
                                        <option value="1">Erkek</option>
                                        <option value="2">Kadın</option>
                                        <option value="3">Belirtmek İstemiyorum</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col col-12 col-md-6">
                                    <label for="password" class="form-label">Şifre:</label>
                                    <input type="password" class="form-control" id="password">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="password-repeat" class="form-label">Şifre Tekrarı:</label>
                                    <input type="password" class="form-control" id="password-repeat">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <NuxtLink class="navigate-to-login" to="/auth/login">Zaten Bir Hesabın Var Mı?</NuxtLink>
                        <div class="btn btn-success">Kayıt Ol</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

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