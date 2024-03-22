
<template>
    <AppModal @close="emit('close')">
        <div class="item-modal mt-4">
            <InputText class="w-full mb-4" :error="!name.length && 'Поле название необходимо'" v-model:value="name" label="Название*: "/>
            <InputTextarea class="w-full mb-4" v-model:value="description" label="Описание: "/>
            <div class="flex items-center justify-between text-white">
                <button :disabled="!name" class="disabled:bg-blue-500 bg-blue-700 px-2 py-1 rounded" @click="save">Сохранить</button>
                <button class="bg-red-400 px-2 py-1 rounded" @click="del">Удалить</button>
            </div>
        </div>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/misc/AppModal.vue';
import type {IToDo} from '@/types'
import { useItemsStore } from '@/stores/items';
import { ref } from 'vue';
import InputText from '@/components/misc/InputText.vue'
import InputTextarea from '@/components/misc/InputTextarea.vue'

const props = defineProps({
    item: {
        type: Object as () => IToDo,
        required: true
    },
})

const emit = defineEmits(['close']);

const store = useItemsStore()

const name = ref(props.item.name)
const description = ref(props.item.description)

const del = () => {
    store.removeItem(props.item.id);
    emit('close');
};

const save = () => {
    store.editItem({
        id: props.item.id,
        name: name.value,
        description: description.value,
    })
    emit('close');
}
</script>
        