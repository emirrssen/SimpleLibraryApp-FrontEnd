<template>
    <div class="card component-card">
        <div class="card-header">
            Kişisel Bilgilerim
        </div>
        <div class="card-body">
            <div style="border-bottom: 1px solid rgba(0, 0, 0, .3); width: 100%;" class="d-flex justify-content-center pb-3">
                <img :src="personelInfoDetails.profileImage" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover">
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center pt-4 px-1">
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>Adı</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.name }}</div>
                </div>
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>E-Posta</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.email }}</div>
                </div>
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>Doğum Tarihi</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.dateOfBirth }}</div>
                </div>
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>Hesap Başlangıç Tarihi</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.accountStartDate }}</div>
                </div>
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>Okuduğu Kitap Sayısı</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.readedBookNumber }}</div>
                </div>
                <div class="d-flex justify-content-around pb-3" style="width: 100%;">
                    <div style="width: 55%;" class="d-flex justify-content-start"><strong>Favori Kitap Sayısı</strong></div>
                    <div style="width: 45%;" class="d-flex justify-content-start">{{ personelInfoDetails.favouriteBookNumber }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePersonelInfoDetailsStore } from '~/stores/profile/personelInfoDetailsStore';

    const personelInfoDetailsStore = usePersonelInfoDetailsStore();

    const personelInfoDetails = computed(() => personelInfoDetailsStore.personelInfoDetails);

    onMounted(() => {
        personelInfoDetailsStore.getPersonelInfoDetails();
    })
</script>

<style scoped>
</style>