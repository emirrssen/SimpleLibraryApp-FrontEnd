<template>
    <div class="mb-3 d-flex" style="gap: 15px;">
        <input type="text" class="form-control" placeholder="Giriniz...">
        <div class="btn btn-success d-flex" style="gap: 10px;">Ara <i class="bi bi-search"></i></div>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center" style="gap: 15px;">
        <div class="card w-75 person-preview" @click="selectUserOnClick()">
            <div class="card-body">
                <div class="row">
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <img src="../../../assets/default-profile.png" class="img-fluid w-75">
                    </div>
                    <div class="col-8 d-flex flex-column justify-content-center">
                        <strong class="pb-2">Emirhan ŞEN</strong>
                        <span><strong>20</strong> yaşında (08.04.2003)</span>
                        <span>Toplamda <strong>4</strong> kitap okudu</span>
                        <span>Şu anda <strong>Beyaz Zambaklar Ülkesinde</strong> kitabını okuyor</span>
                        <span><strong>12.05.2022</strong> tarihinden beridir üye</span>
                        <span><strong>emirrssen@gmail.com</strong> mail adresine sahip</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserManagementStore } from "~/stores/admin/userManagementStore";

    const userManagementStore = useUserManagementStore();

    function selectUserOnClick() {
        userManagementStore.selectUser();
    }
    
</script>

<style scoped>
    .person-preview {
        transition: all 0.15s ease-in;
    }
    .person-preview:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
</style>