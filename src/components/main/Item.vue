<template>
    <div 
        class="item hover:bg-gray-100 py-1 px-1"
        :class="{selected, selecting}" 
    >
        <button @click="toggle" class="mr-2 toggle-complete">
            <span v-if="!item.completed">✔️</span>
            <span v-else>❌</span>
        </button>
        <button class="item-name cursor-pointer flex-grow text-left" @click="emit('openModal')">{{ item.name }}</button>
        <input 
            type="checkbox" 
            class="mr-2 item-checkbox cursor-pointer"
            :checked="selected"
            @input="emit('toggleSelect')" 
        />
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
    },
    selecting: {
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
        &:hover, &.selected, &.selecting{
            .item-checkbox{
                visibility: visible;
            }
        }
        &.selecting{
            .toggle-complete{
                pointer-events: none;
                filter: grayscale(1);
            }
            .item-name{
                pointer-events: none;
            }
        }
    }


</style>
