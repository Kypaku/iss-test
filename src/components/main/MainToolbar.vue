<template>
    <div class="main-toolbar">
        <div class="filter">
            <button :class="{ active: store.filter === 'all' }" @click="setFilter('all')">All</button>
            <button :class="{ active: store.filter === 'active' }" @click="setFilter('active')">Active</button>
            <button :class="{ active: store.filter === 'completed' }" @click="setFilter('completed')">Completed</button>
        </div>
        <div class="selected-actions" v-show="selectedIds.length">
            <button @click="emit('removeItems')">Remove selected</button>
            <button v-if="hasUncompleted" @click="emit('completeItems')">Complete selected</button>
            <button v-if="hasCompleted" @click="emit('activateItems')">Activate selected</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import type { IToDo } from '@/types';

const props = defineProps({
    selectedIds: {
        type: Array as () => number[],
        required: true
    },
    items: {
        type: Array as () => IToDo[],
        required: true
    }
});

const emit = defineEmits(['removeItems', 'completeItems', 'activateItems']);

const store = useItemsStore();

const setFilter = (filter: string) => {
    store.setFilter(filter);
};

const hasUncompleted = props.items.some(item => props.selectedIds.includes(item.id) && !item.completed);
const hasCompleted = props.items.some(item => props.selectedIds.includes(item.id) && item.completed);


</script>

<style lang="scss" scoped></style>
