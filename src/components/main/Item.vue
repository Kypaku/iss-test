<template>
    <div class="item">
        <input type="checkbox" :checked="selected" @input="emit('toggleSelect')" />
        <button @click="toggle">
            <span v-if="!item.completed">✔️</span>
            <span v-else>❌</span>
        </button>
        <h3>{{ item.name }}</h3>
    </div>
</template>

<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import type { IToDo } from '@/types';


const props = defineProps({
    item: {
        type: Object as () => IToDo,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(["toggleSelect"]);

const store = useItemsStore();

const toggle = () => {
    store.toggleItem(props.item.id);
};
</script>

<style lang="scss" scoped></style>
