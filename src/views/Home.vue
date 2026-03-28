<template>
    <header>
        <nav>
            <PhoneticandoGlobalMenu />
        </nav>
        <PhoneticandoHeader>Home</PhoneticandoHeader>
    </header>
    <main>
        <div class="test-style">
            <HeadingTwo>Home Main Title</HeadingTwo>
            <HeadingThree>Home Subtitle</HeadingThree>
            <nav>
                <router-link to="/lessons">Lessons</router-link>
            </nav>
        </div>
    </main>
    <footer>
        <PhoneticandoFooter />
    </footer>
</template>

<script setup>
    import PhoneticandoGlobalMenu from '../components/PhoneticandoGlobalMenu.vue';
    import PhoneticandoHeader from '../components/PhoneticandoHeader.vue';
    import HeadingTwo from '../components/HeadingTwo.vue';
    import HeadingThree from '../components/HeadingThree.vue';
    import PhoneticandoFooter from '../components/PhoneticandoFooter.vue';
</script>

<style scoped>

.test-style {
    margin-bottom: 512px;
    margin-left: auto;
    margin-right: auto;
    width: 64vw;
}

</style>