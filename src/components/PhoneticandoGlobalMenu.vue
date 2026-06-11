<template>
    <div class="global-menu">
        <div class="global-menu-container">
            <router-link to="/">
                <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                    <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                    <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                </svg>
            </router-link>
            <div class="menu-page-title">{{ pageTitle }}</div>
            <svg class="global-menu-hamburger" viewBox="0 0 1024 1024" @click="toggleMenu">
                <path d="M853.335 341.333H170.668V256H853.335V341.333Z"/>
                <path d="M853.335 554.667H170.668V469.333H853.335V554.667Z"/>
                <path d="M170.668 768H853.335V682.667H170.668V768Z"/>
            </svg>
        </div>
    </div>
    <Transition name="menu">
        <div class="menu-container" v-if="isMenuOpen">
            <div class="menu-header">
                <div>Phoneticando</div>
                <button class="mode-button"@click="toggleDarkMode">
                    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
                </button>
                <button class="hamburger-menu-close-button" aria-label="Close menu">
                    <svg class="hamburger-menu-close-button-icon" viewBox="0 0 1024 1024">
                        <path d="M243.507 840.837L512.007 572.337L780.507 840.837L840.846 780.497L572.346 511.997L840.84 243.504L780.5 183.164L512.007 451.658L243.513 183.164L183.173 243.504L451.667 511.997L183.167 780.497L243.507 840.837Z" />
                    </svg>
                </button>
            </div>
            <router-link class="menu-container-router-link" to="/">Home</router-link>
            <router-link class="menu-container-router-link" to="/lessons">Lessons</router-link>
            <router-link class="menu-container-router-link" to="/phonetics">Phonetics</router-link>
            <router-link class="menu-container-router-link" to="/about">About</router-link>
        </div>
    </Transition>
</template>

<script setup>

    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()
    const pageTitle = computed(() => route.meta.title)

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
        width: 100vw;
        height: 48px;
        top: 0;
        background-color: white;
        box-shadow: 0px 0px 4px var(--graycool200);
        z-index: 1;
    }

    .global-menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        padding-left: 16px;
        padding-right: 24px;
    }

    .menu-page-title {
        font-weight: 400;
        color: var(--cerulean700);
        font-size: 16px;
    }

    .global-menu-logo {
        display: flex;
        width: 24px;
        height: 24px;
        fill: var(--cerulean600);
        transition-duration: 0.2s;
    }

    .global-menu-logo:hover {
        transition-duration: 0.2s;
        fill: var(--sunset600);
        cursor: pointer;
    }

    .global-menu-logo:active {
        fill: var(--sunset300);
        transition-duration: 0.2s;
    }

    .global-menu-hamburger {
        width: 24px;
        height: 24px;
        fill: var(--cerulean600);
        transition-duration: 0.2s;
        border-radius: 4px;
    }

    .global-menu-hamburger:hover {
        transition-duration: 0.2s;
        cursor: pointer;
        fill: var(--sunset600);
        transition-duration: 0.2s;
    }

    .global-menu-hamburger:active {
        fill: var(--sunset300);
        transition-duration: 0.2s;
    }

    .menu-container {
        position: fixed;
        background-color: white;
        box-shadow: 0px 0px 8px var(--graycool200);
        right: 0;
        top: 0;
        z-index: 2;
        height: 100vh;
    }

    .menu-header {
        display: flex;
        gap: 16px;
        padding: 16px;
        align-items: center;
        background-color: var(--cerulean100);
        color: var(--graycool800);
        font-weight: 600;
    }

    .menu-container-router-link {
        display: flex;
        align-items: center;
        color: var(--cerulean600);
        text-decoration: none;
        font-weight: 600;
        padding: 16px;
        transition-duration: 0.2s;
    }

    .menu-container-router-link:hover {
        transition-duration: 0.2s;
        color: var(--graycool0);
        background-color: var(--cerulean600);
        cursor: pointer;
    }

    .menu-container-router-link:active {
        background-color: var(--cerulean800);
        transition-duration: 0.2s;
    }

    .hamburger-menu-close-button {
        display: flex;
        background: none;
        border: none;
        cursor: pointer;
        fill: var(--cerulean600);
        transition-duration: 0.2s;
    }

    .hamburger-menu-close-button:hover {
        fill: var(--sunset600);
        transition-duration: 0.2s;
    }

    .hamburger-menu-close-button:active {
        fill: var(--sunset300);
        transition-duration: 0.2s;
    }

    .hamburger-menu-close-button-icon {
        width: 24px;
        height: 24px;
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    .menu-enter-from,
    .menu-leave-to {
        opacity: 0;
        transform: translateX(80px);
    }

    .mode-button {
        border: none;
        background: none;
        background-color: var(--cerulean600);
        color: var(--graycool0);
        padding: 4px;
        border-radius: 4px;
        transition-duration: 0.2s;
        font-weight: 700;
    }

    .mode-button:hover {
        background-color: var(--sunset600);
        transition-duration: 0.2s;
    }

    .mode-button:active {
        background-color: var(--graycool800);
        transition-duration: 0.2s;
    }

</style>