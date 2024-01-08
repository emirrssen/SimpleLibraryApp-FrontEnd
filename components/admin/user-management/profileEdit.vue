<template>
    <div class="container">
        <div class="row">
            <div class="col-3 d-flex align-items-center justify-content-center">
                <img :src="selectedUser.userImage" class="img-fluid" style="object-fit: cover; border-radius: 50%; width: 160px; height: 150px;">
            </div>
            <div class="col-9">
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="email" class="form-label">E-Posta</label>
                            <input type="email" class="form-control" id="email" placeholder="Giriniz...">
                        </div>
                        <div class="mb-3">
                            <label for="emailRepeat" class="form-label">E-Posta Tekrarı</label>
                            <input type="email" class="form-control" id="emailRepeat" placeholder="Giriniz...">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="password" class="form-label">Şifre</label>
                            <input type="password" class="form-control" id="password" placeholder="Giriniz...">
                        </div>
                        <div class="mb-3">
                            <label for="passwordRepeat" class="form-label">Şifre Tekrarı</label>
                            <input type="password" class="form-control" id="passwordREpeat" placeholder="Giriniz...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-flex justify-content-between mt-2">
            <div>
                <div class="btn btn-danger" @click="closeAccountOnClick()">Hesabı Kapat</div>
            </div>
            <div class="d-flex" style="gap: 15px;">
                <div class="btn btn-warning" @click="returnToUserSearchOnClick()">Geri Dön</div>
                <div class="btn btn-success">Kaydet</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserManagementStore } from "~/stores/admin/userManagementStore";

    const userManagementStore = useUserManagementStore();

    const selectedUser = computed(() => userManagementStore.selectedSearchResult);

    function returnToUserSearchOnClick() {
        userManagementStore.returnToUserSearch();
    }

    function closeAccountOnClick() {
        userManagementStore.closeAccount(selectedUser.value.id);
    }

</script>

<style scoped>
</style>