import { useToast } from "vue-toastification";

export const useAdminStore = defineStore('admin-store', () => {
    const toast = useToast();
    const listItems = ref([
        { Id: 1, Title: "Kullanıcı Yönetimi", IsSelected: true },
        { Id: 2, Title: "Kitap Yönetimi", IsSelected: false },
        { Id: 3, Title: "Yazar Yönetimi", IsSelected: false },
        { Id: 4, Title: "Kategori Yönetimi", IsSelected: false },
        { Id: 5, Title: "Ödünç Alma İşlemleri", IsSelected: false },
        { Id: 6, Title: "Personel Yönetimi", IsSelected: false },
        { Id: 7, Title: "Pano Yönetimi", IsSelected: false },
        { Id: 8, Title: "Kişisel Hesap Yönetimi", IsSelected: false },
    ]);
    const selectedPanel = ref(1);

    function selectPanel(selectedPanelId: number) {
        for (const item of listItems.value) {
            if (item.Id !== selectedPanelId) {
                item.IsSelected = false;
            } else {
                item.IsSelected = true;
                selectedPanel.value = selectedPanelId;
            }
        }
    }

    return {
        listItems, selectedPanel,
        selectPanel
    }
})