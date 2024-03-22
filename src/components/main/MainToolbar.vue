<template>
    <div class="main-toolbar flex flex-col lg:flex-row-reverse lg:justify-between">
        <div class="select text-sm text-right">            
            <label for="main-toolbar-select" class="mr-2">Показать:</label>
            <select id="main-toolbar-select" v-model="store.filter" @change="setFilter(store.filter)">
                <option value="all">Все</option>
                <option value="active">Активные</option>
                <option value="completed">Завершенные</option>
            </select>
        </div>
        <div class="selected-actions text-sm" v-show="selectedIds.length">
            Выбранные:
            <button @click="emit('removeItems')">Удалить</button>
            <button v-if="hasUncompleted" @click="emit('completeItems')">Завершить</button>
            <button v-if="hasCompleted" @click="emit('activateItems')">Активировать</button>
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

const emit = defineEmits(['removeItems', 'completeItems', 'activateItems']);

const store = useItemsStore();

const setFilter = (filter: string) => {
    store.setFilter(filter);
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
