<template>
    <div class="card component-card">
        <div class="card-header">Şifreni Değiştir</div>
        <div class="card-body">
            <div class="mb-3">
                <label for="oldPassword" class="form-label">Eski Şifre: </label>
                <input type="password" class="form-control" id="oldPassword" placeholder="Giriniz..." v-model="userData.OldPassword">
            </div>
            <div class="mb-3">
                <label for="newPassword" class="form-label">Yeni Şifre: </label>
                <input type="password" class="form-control" id="newPassword" placeholder="Giriniz..." v-model="userData.NewPassword">
            </div>
            <div class="mb-3">
                <label for="newPasswordRepeat" class="form-label">Yeni Şifre Tekrar: </label>
                <input type="password" class="form-control" id="newPasswordRepeat" placeholder="Giriniz..." v-model="userData.NewPasswordRepeat">
            </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <div class="btn btn-success" @click="changePasswordOnClick()">
                Kaydet
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth/authStore';

    const authStore = useAuthStore();

    const userData = computed(() => authStore.userDataForPasswordChange);

    function changePasswordOnClick() {
        authStore.changePassword();
    }
</script>

<style scoped>
</style>