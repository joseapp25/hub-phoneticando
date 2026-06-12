<script setup>
    import GlobalMenu from '../components/GlobalMenu.vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <header>
        <nav>
            <GlobalMenu />         
        </nav>
        <Header />
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<style scoped>

</style>