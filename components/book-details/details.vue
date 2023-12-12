<template>
    <div class="card component-card">
        <div class="card-header d-flex align-items-center">
            <h5>{{ currentBook.bookName }}</h5>
        </div>
        <div class="card-body py-0">
            <div class="row">
                <div class="col-4 px-4 py-4 d-flex justify-content-center" style="border-right: 1px solid rgba(0, 0, 0, .2);">
                    <img :src="currentBook.bookImage" class="img-fluid rounded-start">
                </div>
                <div class="col-8 py-3 px-3 d-flex flex-column justify-content-center">
                    <h5 style="text-decoration: underline;">Açıklama:</h5>
                    <p>
                        {{ currentBook.description }}
                    </p>
                    <h5 style="text-decoration: underline;">Sayfa Sayısı:</h5>
                    <p>
                        {{ currentBook.pageNumber }}
                    </p>
                    <h5 style="text-decoration: underline;">Yazar:</h5>
                    <p>
                        {{ currentBook.author }}
                    </p>
                    <h5 style="text-decoration: underline;">Yayın Tarihi:</h5>
                    <p>
                        {{ currentBook.releaseYear }}
                    </p>
                    <h5 style="text-decoration: underline;">Kategori:</h5>
                    <p>
                        {{ currentBook.category }}
                    </p>
                    <h5 style="text-decoration: underline;">Yayıncı:</h5>
                    <p>
                        {{ currentBook.publisher }}
                    </p>
                </div>
            </div>
        </div>
        <div class="card-footer d-flex align-items-center justify-content-end" style="gap: 10px;">
            <div class="btn btn-warning" v-if="!checkIsAddedToFavourites()" @click="addToFavouritesOnClick()">Favorilere Ekle</div>
            <div class="btn btn-danger" v-else @click="removeFromFavouritesOnClick()">Favorilerden Kaldır</div>
            <div class="btn btn-success">Ödünç Al</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useDetailsStore } from "~/stores/book-details/detailsStore";
    import { useFavouriteBooksStore } from "~/stores/home/favouriteBooksStore";
    import { navigateTo } from "nuxt/app";

    const store = useDetailsStore();
    const favouriteBookStore = useFavouriteBooksStore();

    const currentBook = computed(() => store.currentBook);

    function addToFavouritesOnClick() {
        favouriteBookStore.insertFavouriteBook(currentBook.value.id);
    }

    function removeFromFavouritesOnClick() {
        const idToDelete = favouriteBookStore.favouriteBooksOfCurrentUser.filter(x => x.bookImage === currentBook.value.bookImage).map(x => x.id)[0];
        favouriteBookStore.deleteFavouriteBookById(idToDelete);
    }

    function checkIsAddedToFavourites(): boolean {
        return favouriteBookStore.favouriteBooksOfCurrentUser.some(x => x.bookImage === currentBook.value.bookImage);
    }

</script>