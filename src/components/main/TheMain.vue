<template>
    <main class="app">
        <MainToolbar :selectedIds="selectedIds" />
        <AddItem />
        <Items :items="store.items" :selectedIds="selectedIds" @toggleSelect="toggleSelect" />
    </main>
</template>

<script setup lang="ts">
import MainToolbar from './MainToolbar.vue';
import Items from './Items.vue';
import AddItem from './AddItem.vue';
import { useItemsStore } from '@/stores/items';
import { reactive } from 'vue';

const store = useItemsStore();

const selectedIds = reactive([]) as number[];

const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
        selectedIds.splice(selectedIds.indexOf(id), 1);
    } else {
        selectedIds.push(id);
    }
};
</script>

<style lang="scss" scoped></style>