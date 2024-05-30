<script setup>
import Menu from '../components/Menu.vue'
</script>
<template>
    <main class="w-screen flex flex-row">
        <Menu />
        <div class="w-full h-full mb-20 " >
            <slot></slot>
        </div>

    </main>
</template>


<style lang="scss" scoped></style>