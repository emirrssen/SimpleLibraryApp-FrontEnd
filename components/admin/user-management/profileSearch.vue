<template>
    <div class="mb-3 d-flex" style="gap: 15px;">
        <input type="text" class="form-control" placeholder="Giriniz..." v-model="searchText">
        <div class="btn btn-success d-flex" style="gap: 10px;" @click="searchOnClick()">Ara <i class="bi bi-search"></i></div>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center" style="gap: 15px;">
        <div v-for="item in searchResult" class="card w-75 person-preview" @click="selectUserOnClick(item)">
            <div class="card-body">
                <div class="row">
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <img v-if="item.id === 1" :src="item.userImage" class="img-fluid w-75 h-100" style="object-fit: cover; border-radius: 50%;">
                        <img v-else src="https://img.internethaber.com/rcman/Cw480h270q95gc/files/2018/2/20/1848758/1848758-MXaSWw.jpg" class="img-fluid w-75 h-100" style="object-fit: cover; border-radius: 50%;">
                    </div>
                    <div class="col-8 d-flex flex-column justify-content-center">
                        <strong class="pb-2">{{ item.name }}</strong>
                        <span><strong>{{ item.age }}</strong> yaşında ({{ item.dateOfBirth }})</span>
                        <span>Toplamda <strong>{{ item.totalReadedBooks }}</strong> kitap okudu</span>
                        <span v-if="item.currentReadedBookName">Şu anda <strong>{{ item.currentReadedBookName }}</strong> kitabını okuyor</span>
                        <span v-else>Şu anda herhangi bir kitap okumuyor</span>
                        <span><strong>{{ item.accountStartDate }}</strong> tarihinden beridir üye</span>
                        <span><strong>{{ item.email }}</strong> mail adresine sahip</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserManagementStore } from "~/stores/admin/userManagementStore";
    import { UserDetailsForAdminSearch } from "~/services/auth/userTypes";

    const userManagementStore = useUserManagementStore();
    
    let searchText = "";
    const searchResult = computed(() => userManagementStore.searchResult);

    function selectUserOnClick(user: UserDetailsForAdminSearch) {
        userManagementStore.selectUser();
        userManagementStore.selectedSearchResult = user;
    }

    function searchOnClick() {
        userManagementStore.searchUsers(searchText);
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