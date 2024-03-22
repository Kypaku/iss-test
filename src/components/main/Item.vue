<template>
    <div class="item hover:bg-gray-100 py-1 px-1" :class="{selected}">
        <input 
            type="checkbox" 
            class="mr-2 item-checkbox cursor-pointer"
            :checked="selected"
            @input="emit('toggleSelect')" 
        />
        <button @click="toggle" class="mr-2">
            <span v-if="!item.completed">✔️</span>
            <span v-else>❌</span>
        </button>
        <a href="#" @click.prevent="emit('openModal')">{{ item.name }}</a>
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

const emit = defineEmits(["toggleSelect", "openModal"]);

const store = useItemsStore();

const toggle = () => {
    store.toggleItem(props.item.id);
};
</script>

<style lang="scss" scoped>
    .item-checkbox{
        visibility: hidden;
    }
    .item{
        display: flex;
        &:hover, &.selected{
            .item-checkbox{
                visibility: visible;
            }
        }
    }


</style>
