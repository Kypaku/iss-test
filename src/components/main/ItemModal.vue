
<template>
    <AppModal class="item-modal">
        <input type="text" v-model="name"/>
        <input type="text" v-model="description"/>
        <button @click="save">Save</button>
        <button @click="del">Del</button>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/misc/AppModal.vue';
import {IToDo} from '@/types'
import { useItemsStore } from './stores/items';
import { ref } from 'vue';

const props = defineProps({
    item: {
        type: Object as () => IToDo,
        required: true
    },
})

const store = useItemsStore()

const name = ref(props.item.name)
const description = ref(props.item.description)

const del = () => {
    store.removeItem(props.item.id);
};

const save = () => {
    store.editItem({
        id: props.item.id,
        name: name.value,
        description: description.value,
    })
}
</script>