<template>
    <div class="container">
        <div class="row">
            <div class="col-3 d-flex align-items-center justify-content-center">
                <img src="../../../assets/default-profile.png" class="img-fluid w-75">
            </div>
            <div class="col-9">
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="firstname" class="form-label">Adı</label>
                            <input type="text" class="form-control" id="firstname" placeholder="Giriniz...">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-Posta</label>
                            <input type="email" class="form-control" id="email" placeholder="Giriniz...">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Soyadı</label>
                            <input type="text" class="form-control" id="lastname" placeholder="Giriniz...">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Şifre</label>
                            <input type="password" class="form-control" id="password" placeholder="Giriniz...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-flex justify-content-end" style="gap: 15px;">
            <div class="btn btn-warning" @click="returnToUserSearchOnClick()">Geri Dön</div>
            <div class="btn btn-success">Kaydet</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserManagementStore } from "~/stores/admin/userManagementStore";

    const props = defineProps({
        userId: {
            type: Number,
            required: true
        }
    })

    const userManagementStore = useUserManagementStore();

    function returnToUserSearchOnClick() {
        userManagementStore.returnToUserSearch();
    }

</script>

<style scoped>
</style>