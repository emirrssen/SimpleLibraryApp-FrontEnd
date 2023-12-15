<template>
    <div class="card component-card">
        <div class="card-header">Ödünç Alınan Kitaplar</div>
        <div class="card-body d-flex" style="gap: 15px; flex-wrap: wrap;">
            <div class="card mb-3 book-preview" style="width: 400px;">
                <div class="row">
                    <div class="col-5 d-flex flex-column align-items-center justify-content-center px-4 py-2">
                        <img src="https://i.dr.com.tr/cache/600x600-0/originals/0001784820001-1.jpg" class="img-fluid rounded-start w-100">
                    </div>
                    <div class="col-7 py-3">
                        <div class="pb-3"><strong>Beyaz Zambaklar Ülkesinde</strong></div>
                        <div><strong>Yazarı - </strong>Grigory Petrov</div>
                        <div><strong>Sayfa Sayısı - </strong>217</div>
                        <div class="pb-3"><strong>Türü - </strong>Roman</div>
                        <div><strong>14.12.2023</strong> günü ödünç alındı</div>
                        <div><strong>16.12.2023</strong> günü teslim edildi</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .form-button:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .book-preview {
        transition: transform 0.3s ease-in-out;
    }

    .book-preview:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
</style>