<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                    Carousel Here!
                </div>
                <div class="col-12 col-md-6 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="card">
                                <div class="card-header">Kişisel Bilgiler</div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 d-flex align-items-center justify-content-center">
                                            <img 
                                                :src="currentUserInfo.profileImageUrl && currentUserInfo.profileImageUrl?.length > 0 ? currentUserInfo.profileImageUrl : '../../assets/default-profile.png'" 
                                                style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;"
                                            >
                                        </div>
                                        <div class="col-8">
                                            <div><strong>{{ currentUserInfo.firstName + ' ' + currentUserInfo.lastName }}</strong></div>
                                            <div>{{ currentUserInfo.age }} yaşında</div>
                                            <div>Toplamda {{ currentUserInfo.numberOfBookReaded }} kitap okudu</div>
                                            <div v-if="currentUserInfo && currentUserInfo.bookNamesCurrentlyReading">
                                                <div v-if="currentUserInfo.bookNamesCurrentlyReading.length > 1">
                                                    Şu anda <strong v-for="item in currentUserInfo.bookNamesCurrentlyReading">{{ item }}, </strong> kitaplarını okuyor.
                                                </div>
                                                <div v-else>Şu anda <strong>{{ currentUserInfo.bookNamesCurrentlyReading[0] }}</strong> kitabını okuyor</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">Favori Kitapları</div>
                                <div class="card-body d-flex flex-wrap justify-content-center" style="gap: 10px;">
                                    <div v-for="item in favouriteBooks" :key="item.id" class="card d-flex align-items-center pt-2" style="width: 180px;">
                                        <img :src="item.bookImage" class="card-img-top" style="width: 145px;">
                                        <div class="card-body d-flex flex-column justify-content-end">
                                            <strong>{{ item.bookName }}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth/authStore';
    import { useFavouriteBookStore } from '~/stores/favourite-book/favouriteBookStore'

    const authStore = useAuthStore();
    const favouriteBookStore = useFavouriteBookStore();

    onBeforeMount(() => {
        authStore.loadPersonelInfo();
        favouriteBookStore.getFavouriteBooksByUserId();
    })

    const currentUserInfo = computed(() => {
      return authStore.personelInformationOfCurrentUser;  
    })

    const favouriteBooks = computed(() => {
        return favouriteBookStore.favouriteBooksOfCurrentUser;
    })
</script>