<template>
    <div class="items">
        <Item v-for="item in items" :item="item" :key="item.id" :selected="selectedIds.includes(item.id)"
            @toggleSelect="() => emit('toggleSelect', item.id)" />
    </div>
</template>

<script setup lang="ts">
import Item from './Item.vue';

defineProps(['items', 'selectedIds']);

const emit = defineEmits(['toggleSelect']);
</script>

<style lang="scss" scoped></style>
