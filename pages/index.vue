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
                                            <img src="../assets/default-profile.png" style="width: 100px;">
                                        </div>
                                        <div class="col-8">
                                            <div><strong>Emirhan ŞEN</strong></div>
                                            <div>Yaş 20</div>
                                            <div>Toplamda 34 kitap okudu</div>
                                            <div>Şu anda <strong>Beyaz Zambaklar Ülkesinde</strong> kitabını okuyor.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">Favori Kitapları</div>
                                <div class="card-body d-flex flex-wrap justify-content-center" style="gap: 10px;">
                                    <div v-for="item in dummyData" :key="item.Header" class="card d-flex" style="width: 180px;">
                                        <img :src="item.Link" class="card-img-top">
                                        <div class="card-body d-flex flex-column justify-content-end">
                                            <strong>{{ item.Header }}</strong>
                                            <div>{{ item.Page }} Sayfa</div>
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

<script lang="ts">
    export default {
        setup() {
            const dummyData = [
                { Header: 'Beyaz Zambaklar Ülkesinde', Page: 140, Link: 'https://www.altinkitabevi.com/medya/ems_1608200908.png' },
                { Header: 'Nutuk', Page: 543, Link: 'https://img.kitapyurdu.com/v1/getImage/fn:4060202/wh:true/wi:800' },
                { Header: 'Yeraltından Notlar', Page: 160, Link: 'https://isyonet.iskultur.com.tr/dosyalar/2008/07/Yeraltindan_Notlar41.png' },
                { Header: 'Bozkurt', Page: 246, Link: 'https://img.kitapyurdu.com/v1/getImage/fn:11515021/wh:true/miw:200/mih:200' },
            ]

            return { dummyData}
        }
    }
</script>