<template>
    <div class="add-item">
        <input type="text" v-model="name" />
        <button :disabled="!name" @click="add">Add</button>
    </div>
</template>

<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import type { IToDo } from '@/types';
import { ref } from 'vue';

const store = useItemsStore();

const name = ref('');

const add = () => {
    const item = {
        name: name.value,
        id: Date.now(),
        description: ''
    } as IToDo
    store.addItem(item);
    name.value = '';
};

</script>

<style lang="scss" scoped></style>