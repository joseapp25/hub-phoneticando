<template>
    <header>
        <PhoneticandoHeader>Lessons</PhoneticandoHeader>
    </header>
    <main>
        <HeadingTwo>Lessons Main Title</HeadingTwo>
        <HeadingThree>Lessons Subtitle</HeadingThree>
        <nav>
            <router-link to="/">Home</router-link>
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