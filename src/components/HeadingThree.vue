<script setup>

    import { ref } from 'vue'

    const count = ref(0)

</script>

<template>

    <h3 class="heading-three"><slot></slot></h3>

</template>

<style scoped>

    .heading-three {
        scroll-margin-top: 64px;
        margin-bottom: 16px;
        margin-top: 40px;
    }

</style>