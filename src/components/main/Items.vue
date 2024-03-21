<template>
    <div class="items">
        <Item 
            v-for="item in items"
            :item="item"
            :key="item.id"
            :selected="selectedIds.includes(item.id)"
            @toggleSelect="() => emit('toggleSelect', item.id)" 
        />
    </div>
</template>

<script setup lang="ts">
import type { IToDo } from '@/types';
import Item from './Item.vue';


defineProps({
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
</script>

<style lang="scss" scoped></style>
