<template>
    <div class="card component-card">
        <div class="card-header">Ödünç Alınan Kitaplar</div>
        <div class="card-body d-flex justify-content-center align-items-between" style="gap: 15px; flex-wrap: wrap;">
            <div v-for="item in borrowedBookDetails" class="card mb-3 book-preview" style="width: 400px; height: 215px">
                <div class="row">
                    <div class="col-5 d-flex flex-column align-items-center justify-content-center px-4 py-2">
                        <img :src="item.bookImage" class="img-fluid rounded-start w-100">
                    </div>
                    <div class="col-7 py-3 px-1">
                        <div class="pb-3"><strong>{{ item.bookName }}</strong></div>
                        <div><strong>Yazarı - </strong>{{ item.author }}</div>
                        <div><strong>Sayfa Sayısı - </strong>{{ item.pageNumber }}</div>
                        <div class="pb-3"><strong>Türü - </strong>{{ item.bookCategory }}</div>
                        <div><strong>{{ item.borrowedDate }}</strong> günü ödünç alındı</div>
                        <div><strong>{{ item.returnedDate }}</strong> günü teslim edildi</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useBorrowedBookDetailsStore } from '~/stores/profile/borrowedBookDetailsStore';

    const borrowedBookDetailsStore = useBorrowedBookDetailsStore();

    const borrowedBookDetails = computed(() => borrowedBookDetailsStore.borrowedBookDetails);

    onMounted(() => {
        borrowedBookDetailsStore.getBorrowedBookDetails();
    })
</script>

<style scoped>
    .form-button:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .book-preview {
        transition: all 0.17s ease-in-out;
    }

    .book-preview:hover {
        cursor: pointer;
        box-shadow: rgba(17, 17, 26, 0.15) 0px 0px 16px;
    }
</style>