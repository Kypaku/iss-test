<template>
    <Teleport to="body">
        <div class="overlay"></div>
        <div class="app-modal fixed" v-click-outside="() => emit('close')">
            <button class="close" @click="emit('close')">X</button>
            <slot/>
        </div>
    </Teleport>
</template>

<script setup lang="ts">

const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
    .app-modal{
        z-index: 1000;
        width: 100%;
        height: 100vh;
        border-radius: 0;
        padding: 20px;
        top: 0;
        background: white;
        @screen lg{   
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            width: 480px;
            height: auto;
        }
    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.2);
    }

</style>