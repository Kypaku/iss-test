<template>
    <label class="input-text block">
        <span class="label">{{ label }}</span>
        <div class="input-body flex items-center">
            <input
                v-bind="{...$attrs, class: undefined}"
                :class="{error}"
                class="w-full"
                :value="value"
                :type="type || 'text'"
                @input="emitData"
            >
        </div>
        <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
    </label>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({
    value: String,
    error: [String, Boolean],
    label: String,
    type: String,
});

const emit = defineEmits(['update:value']);

const emitData = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    emit('update:value', value);
};
</script>

<style lang="scss" scoped>
    .input-text{
        input {
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