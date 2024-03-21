<template>
    <main class="app">
        <MainToolbar />
        <AddItem />
        <Items :items="store.items" />
    </main>
</template>

<script setup lang="ts">
import MainToolbar from './MainToolbar.vue';
import Items from './Items.vue';
import { useItemsStore } from '@/stores/items';

const store = useItemsStore();

</script>

<style lang="scss" scoped></style>