<script setup>
    import PhoneticandoGlobalMenu from '../components/PhoneticandoGlobalMenu.vue';
    import PhoneticandoHeader from '../components/PhoneticandoHeader.vue';
    import PhoneticandoFooter from '../components/PhoneticandoFooter.vue';
</script>

<template>
    <header>
        <nav>
            <PhoneticandoGlobalMenu />         
        </nav>
        <PhoneticandoHeader />
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <PhoneticandoFooter />
    </footer>
</template>

<style scoped>

</style>