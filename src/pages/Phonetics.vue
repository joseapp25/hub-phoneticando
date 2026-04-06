<template>
    <header>
        <nav>
            <PhoneticandoGlobalMenu />      
        </nav>
        <PhoneticandoHeader></PhoneticandoHeader>
    </header>
    <main>
        <div class="test-main">
            <HeadingTwo>Phonetics Main Title</HeadingTwo>
            <HeadingThree>Phonetics Subtitle</HeadingThree>
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

    .test-main {
        margin-top: 264px;
        margin-bottom: 264px;
        margin-left: auto;
        margin-right: auto;
        max-width: 64vw;
    }

</style>