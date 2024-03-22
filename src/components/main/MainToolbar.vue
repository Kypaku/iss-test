<template>
    <div class="main-toolbar flex flex-col">
        <div class="select text-sm text-right">            
            <label for="main-toolbar-select" class="mr-2">Показать:</label>
            <select id="main-toolbar-select" v-model="store.filter" @change="setFilter(store.filter)">
                <option value="all">Все</option>
                <option value="active">Активные</option>
                <option value="completed">Завершенные</option>
            </select>
        </div>
        <div class="selected-actions text-sm mt-2 flex flex-col-reverse md:flex-row" :class="{invisible: !selectedIds.length}">
            <button @click="emit('clearSelected')" class="mr-4 underline text-left mt-2 md:mt-0">Снять выделение</button> 
            <div class="flex flex-col md:flex-row">
                Выбранные:
                <div>
                    <button class="md:ml-2 bg-red-200 px-1 rounded" @click="emit('removeItems')">Удалить</button>
                    <button class="ml-2 bg-gray-200 px-1 rounded" v-if="hasUncompleted" @click="emit('completeItems')">Завершить</button>
                    <button class="ml-2 bg-gray-200 px-1 rounded" v-if="hasCompleted" @click="emit('activateItems')">Активировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import type { IToDo } from '@/types';
import { computed } from 'vue';

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

const emit = defineEmits(['removeItems', 'completeItems', 'activateItems', 'clearSelected', 'selectAll']);

const store = useItemsStore();

const setFilter = (filter: string) => {
    store.setFilter(filter);
    emit('clearSelected');
};

const selectedItems = computed(() => {
    return props.items.filter(item => props.selectedIds.includes(item.id));
});

const hasUncompleted = computed(() => {
    return selectedItems.value.some(item => !item.completed);
});
const hasCompleted = computed(() => {
    return selectedItems.value.some(item => item.completed);
});


</script>

<style lang="scss" scoped></style>
