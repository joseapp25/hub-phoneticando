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

        <div class="text-email">

            <p style="margin-bottom: 32px;">Saudações,</p>

            <p style="margin-bottom: 8px;">Clique neste link para redefinir a senha de login no app <span style="font-weight: 900">Trainer</span> do <span style="color: #2269D3; font-weight: 900;">Phoneticando</span> com sua conta %EMAIL%.</p>

            <p style="margin-bottom: 16px;"><a href='%LINK%'>%LINK%</a></p>

            <p style="margin-bottom: 32px;"><span style="font-weight: 900;">Observação:</span> Desconidere este email caso não tenha solicitado a redefinição da sua senha.</p>

            <p>Att,</p>

            <p>Equipe do <span style="color: #2269D3; font-weight: 900;">Phoneticando</span>.</p>

        </div>

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
.text-email{
    margin-top: 32px;
}

</style>