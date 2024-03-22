<template>
    <TheHeader />
    <TheMain />
    <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMain from './components/main/TheMain.vue'
import { useItemsStore } from './stores/items';

const store = useItemsStore();
store.getData();
</script>

<style lang="scss" scoped>

</style>
