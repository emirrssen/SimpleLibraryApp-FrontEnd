<template>
    <div>
        <div class="row">
            <div class="col col-4 offset-4">
                <div class="card">
                    <div class="card-header d-flex align-items-center "><h5>Giriş Yap</h5></div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">E-Posta</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Şifre</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                        </form>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <NuxtLink class="navigate-to-register" to="/auth/register">Hesabın Yok Mu?</NuxtLink>
                        <div class="btn btn-success btn-sm">
                            Giriş Yap
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

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