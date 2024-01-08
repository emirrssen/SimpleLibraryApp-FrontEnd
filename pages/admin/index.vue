<template>
    <div>
        <AdminNavbar></AdminNavbar>
        <div class="container mb-3 mt-3">
            <div class="row">
                <div class="col-3">
                    <div class="card component-card">
                        <div class="card-header">Paneller</div>
                        <div class="card-body px-0 py-0">
                            <div class="list-group list-group-flush">
                                <a
                                    v-for="item in listItems" 
                                    @click="selectPanelOnClick(item.Id)"
                                    :key="item.Id" 
                                    class="list-group-item list-group-item-action" 
                                    :class="{'active': item.IsSelected}"
                                    :aria-current="item.IsSelected"
                                >{{ item.Title }}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card component-card">
                        <div class="card-header">{{ listItems.find(x => x.Id === selectedPanel)?.Title }}</div>
                        <div class="card-body">
                            <AdminProfileManagement v-if="selectedPanel === 8"></AdminProfileManagement>
                            <UserManagement v-if="selectedPanel === 1"></UserManagement>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAdminStore } from "~/stores/admin/adminStore";

    definePageMeta({
        layout: false
    })

    const adminStore = useAdminStore();

    const listItems = computed(() => adminStore.listItems);
    const selectedPanel = computed(() => adminStore.selectedPanel);

    function selectPanelOnClick(selectedPanelId: number) {
        adminStore.selectPanel(selectedPanelId);
    }

</script>

<style scoped>
    .list-group-item:hover {
        cursor: pointer;
    }
</style>