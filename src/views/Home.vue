<template>
    <header>
        <PhoneticandoHeader>Home</PhoneticandoHeader>
    </header>
    <main>
        <HeadingTwo>Home Main Title</HeadingTwo>
        <HeadingThree>Home Subtitle</HeadingThree>
        <nav>
            <router-link to="/lessons">Lessons</router-link>
        </nav>
    </main>
    <footer>
        <PhoneticandoFooter />
    </footer>
</template>

<script setup>
    import PhoneticandoHeader from '../components/PhoneticandoHeader.vue';
    import HeadingTwo from '../components/HeadingTwo.vue';
    import HeadingThree from '../components/HeadingThree.vue';
    import PhoneticandoFooter from '../components/PhoneticandoFooter.vue';
</script>

<style scoped>

</style>