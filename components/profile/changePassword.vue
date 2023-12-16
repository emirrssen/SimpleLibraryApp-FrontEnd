<template>
    <div class="card component-card">
        <div class="card-header">Şifreni Değiştir</div>
        <div class="card-body">
            <div class="mb-3">
                <label for="oldPassword" class="form-label">Eski Şifre: </label>
                <input type="password" class="form-control" id="oldPassword" placeholder="Giriniz...">
            </div>
            <div class="mb-3">
                <label for="newPassword" class="form-label">Yeni Şifre: </label>
                <input type="password" class="form-control" id="newPassword" placeholder="Giriniz...">
            </div>
            <div class="mb-3">
                <label for="newPasswordRepeat" class="form-label">Yeni Şifre Tekrar: </label>
                <input type="password" class="form-control" id="newPasswordRepeat" placeholder="Giriniz...">
            </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <div class="btn btn-success">
                Kaydet
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>