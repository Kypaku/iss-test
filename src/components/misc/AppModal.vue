<template>
    <Teleport to="body">
        <div class="app-modal">
            <button class="close" @click="emit('close')">X</button>
            <slot/>
        </div>
    </Teleport>
</template>

<script setup lang="ts">

const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>

</style>