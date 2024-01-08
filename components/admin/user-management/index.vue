<template>
    <ProfileSearch v-if="!isSelected"></ProfileSearch>
    <ProfileEdit v-if="isSelected"></ProfileEdit>
</template>

<script setup lang="ts">
    import { useUserManagementStore } from '~/stores/admin/userManagementStore';

    const userManagementStore = useUserManagementStore();

    const isSelected = computed(() => userManagementStore.isSelected);
</script>

<style scoped>
</style>