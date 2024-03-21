<template>
    <div class="items">
        <Item v-for="item in items" :item="item" :key="item.id" />
    </div>
</template>

<script setup lang="ts">
import Item from './Item.vue';

defineProps(['items']);
</script>

<style lang="scss" scoped></style>
