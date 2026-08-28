<template>

    <div>lessons</div>

    <div class="test">
        <AudioPlayer src="/src/midia/work-and-study.mp3"/>
    </div>
    
</template>

<script setup>
import AudioPlayer from "../components/AudioPlayer.vue";
</script>

<style scoped>

.test {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
}

</style>