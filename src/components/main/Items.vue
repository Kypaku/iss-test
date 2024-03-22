<template>
    <div class="items">
        <Item 
            v-for="item in filtered"
            :item="item"
            :key="item.id"
            :selected="selectedIds.includes(item.id)"
            @toggleSelect="() => emit('toggleSelect', item.id)"
            @openModal="currentItem = item"
        />
        <ItemModal v-if="currentItem" :item="currentItem" @close="currentItem = null"/>
    </div>
</template>

<script setup lang="ts">
import type { IToDo } from '@/types';
import Item from './Item.vue';
import ItemModal from './ItemModal.vue';
import { useItemsStore } from '@/stores/items';
import { computed, ref } from 'vue';

const props = defineProps({
    items: {
        type: Array as () => IToDo[],
        required: true
    },
    selectedIds: {
        type: Array as () => number[],
        required: true
    }
})

const emit = defineEmits(['toggleSelect']);

const store = useItemsStore();

const currentItem = ref(null as IToDo | null);

const filtered = computed(() => {
    return props.items.filter(item => {
        if (store.filter === 'all') return true;
        if (store.filter === 'active') return !item.completed;
        if (store.filter === 'completed') return item.completed;
    });
});
</script>

<style lang="scss" scoped></style>
