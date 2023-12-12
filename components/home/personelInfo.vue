<template>
    <div class="card component-card">
        <div class="card-header">Kişisel Bilgiler</div>
        <div class="card-body">
            <div class="row">
                <div class="col-4 d-flex align-items-center justify-content-center">
                    <img 
                        :src="currentUserInfo.profileImageUrl && currentUserInfo.profileImageUrl?.length > 0 ? currentUserInfo.profileImageUrl : 'https://static.thenounproject.com/png/5034901-200.png'" 
                        style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;"
                    >
                </div>
                <div class="col-8 d-flex flex-column justify-content-center">
                    <div><strong>{{ currentUserInfo.firstName + ' ' + currentUserInfo.lastName }}</strong></div>
                    <div>{{ currentUserInfo.age }} yaşında</div>
                    <div>Toplamda {{ currentUserInfo.numberOfBookReaded }} kitap okudu</div>
                    <div v-if="currentUserInfo.bookNamesCurrentlyReading && currentUserInfo.bookNamesCurrentlyReading.length > 0">
                        <div v-if="currentUserInfo.bookNamesCurrentlyReading.length > 1">
                            Şu anda <strong v-for="item in currentUserInfo.bookNamesCurrentlyReading">{{ item }}, </strong> kitaplarını okuyor.
                        </div>
                        <div v-else>Şu anda <strong>{{ currentUserInfo.bookNamesCurrentlyReading[0] }}</strong> kitabını okuyor</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { usePersonelInfoStore } from '~/stores/home/personelInfoStore';

    const personelInfoStore = usePersonelInfoStore();

    onMounted(() => {
        personelInfoStore.loadPersonelInfo();
    })

    const currentUserInfo = computed(() => {
      return personelInfoStore.personelInformationOfCurrentUser;  
    })
</script>