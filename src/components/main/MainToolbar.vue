<template>
    <div class="main-toolbar">
        <div class="filter">
            <button :class="{ active: store.filter === 'all' }" @click="setFilter('all')">All</button>
            <button :class="{ active: store.filter === 'active' }" @click="setFilter('active')">Active</button>
            <button :class="{ active: store.filter === 'completed' }" @click="setFilter('completed')">Completed</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useItemsStore } from '@/stores/items';

defineProps(['selectedIds']);

const store = useItemsStore();

const setFilter = (filter: string) => {
    store.setFilter(filter);
};



</script>

<style lang="scss" scoped></style>
