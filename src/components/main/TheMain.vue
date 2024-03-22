<template>
    <main class="app">
        <MainToolbar
            class="mb-4"
            :selectedIds="selectedIds"
            :items="store.items"
            @removeItems="removeSelectedItems()"
            @completeItems="completeSelectedItems()"
            @activateItems="activateSelectedItems()"
            @clearSelected="selectedIds.splice(0)"
        />
        <Items 
            :items="store.items"
            :selectedIds="selectedIds" 
            @toggleSelect="toggleSelect" 
        />
    </main>
</template>

<script setup lang="ts">
import MainToolbar from './MainToolbar.vue';
import Items from './Items.vue';
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

const removeSelectedItems = () => {
    selectedIds.forEach(id => store.removeItem(id));
    selectedIds.splice(0);
};

const completeSelectedItems = () => {
    selectedIds.forEach(id => store.setCompleted(id, true));
    selectedIds.splice(0);
};

const activateSelectedItems = () => {
    selectedIds.forEach(id => store.setCompleted(id, false));
    selectedIds.splice(0);
};
</script>

<style lang="scss" scoped></style>