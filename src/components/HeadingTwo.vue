<template>
    <h2 class="heading-two"><slot></slot></h2>
</template>

<style scoped>
    .heading-two {
        scroll-margin-top: 64px;
        margin-bottom: 16px;
        margin-top: 64px;
        margin-left: -2px;
        margin-right: -2px;
        border-radius: 4px;
        padding: 2px;
        background-color: var(--cerulean100);
        color: var(--graycool800);
    }
</style>