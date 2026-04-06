<template>
    <div class="global-menu">
        <svg class="global-menu-logo" viewBox="0 0 1024 1024">
            <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
            <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
        </svg>
        <svg class="global-menu-hamburger" viewBox="0 0 1024 1024" @click="toggleMenu">
            <path d="M853.335 341.333H170.668V256H853.335V341.333Z"/>
            <path d="M853.335 554.667H170.668V469.333H853.335V554.667Z"/>
            <path d="M170.668 768H853.335V682.667H170.668V768Z"/>
        </svg>
    </div>
    <Transition name="menu">
        <div class="menu-container" v-if="isMenuOpen">
            <router-link class="menu-container-router-link" to="/">Home</router-link>
            <router-link class="menu-container-router-link" to="/lessons">Lessons</router-link>
            <router-link class="menu-container-router-link" to="/phonetics">Phonetics</router-link>
            <router-link class="menu-container-router-link" to="/about">About</router-link>
            <button @click="toggleDarkMode">
                {{ isDark ? '☀️ Light' : '🌙 Dark' }}
            </button>
        </div>
    </Transition>
</template>

<script setup>

    import { ref, onMounted, onUnmounted } from 'vue'

    const isMenuOpen = ref(false)

    function toggleMenu(event) {
        event.stopPropagation()
        isMenuOpen.value = !isMenuOpen.value
    }

    function handleOutsideClick() {
        isMenuOpen.value = false
    }

    onMounted(() => document.addEventListener('click', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('click', handleOutsideClick))

    import { useDarkMode } from '../composables/useDarkMode.js'

    const { isDark, toggleDarkMode } = useDarkMode()
</script>

<style scoped>
    .global-menu {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 40px;
        top: 0;
        gap: 4px;
        background-color: white;
        box-shadow: 0px 0px 8px var(--graycool200);
        z-index: 1;
    }

    .global-menu a {
        display: flex;
        align-items: center;
        color: var(--cerulean600);
        fill: var(--cerulean600);
        text-decoration: none;
        font-weight: 500;
        border-radius: 4px;
        padding: 4px;
        transition-duration: 0.2s;
    }

    .global-menu a:hover {
        color: var(--graycool0);
        fill: var(--graycool0);
        background-color: var(--cerulean600);
        transition-duration: 0.2s;
        box-shadow: 0px 0px 4px var(--cerulean600);
        cursor: pointer;
    }

    .global-menu-chevron {
        width: 16px;
        height: 16px;
    }

    .global-menu-logo {
        width: 24px;
        height: 24px;
        fill: var(--cerulean600);
        margin-left: 8px;
        transition-duration: 0.2s;
    }

    .global-menu-logo:hover {
        transition-duration: 0.2s;
        fill: var(--cerulean400);
        cursor: pointer;
    }

    .global-menu-hamburger {
        width: 24px;
        height: 24px;
        fill: var(--cerulean600);
        margin-right: 16px;
        transition-duration: 0.2s;
        border-radius: 4px;
    }

    .global-menu-hamburger:hover {
        transition-duration: 0.2s;
        cursor: pointer;
        background-color: var(--cerulean600);
        transition-duration: 0.2s;
        box-shadow: 0px 0px 4px var(--cerulean600);
        fill: var(--graycool50);
    }

    .menu-container {
        position: fixed;
        width: 32vw;
        padding: 16px;
        background-color: white;
        box-shadow: 0px 0px 8px var(--graycool200);
        right: 8px;
        top: 48px;
    }

    .menu-container-router-link {
        display: flex;
        align-items: center;
        color: var(--cerulean600);
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
        padding: 4px;
        transition-duration: 0.2s;
    }

    .menu-container-router-link:hover {
        transition-duration: 0.2s;
        color: var(--cerulean300);
        cursor: pointer;
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .menu-enter-from,
    .menu-leave-to {
        opacity: 0;
        transform: translateY(-8px);
    }
</style>