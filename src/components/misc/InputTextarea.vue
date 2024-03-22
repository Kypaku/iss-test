<template>
    <label class="input-textarea block">
        <span class="label">{{ label }}</span>
        <div class="input-body flex items-center">
            <textarea
                :class="{error}"
                class="w-full"
                v-bind="{...$attrs, class: undefined}"
                :value="value"
                @input="emitData"
            ></textarea>
        </div>
        <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
    </label>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({
    value: String,
    label: String,
    error: [String, Boolean],
});

const emit = defineEmits(['update:value']);

const emitData = (e: Event) => {
    const value = (e.target as HTMLTextAreaElement).value;
    emit('update:value', value);
};

</script>

<style lang="scss" scoped>
    .input-textarea{
        textarea {
            padding: 0.25rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            &.error{
                border-color:red;
            }
            &:focus{
				outline: none;
				border-color: #aaa;
			}
        }
    }
</style>