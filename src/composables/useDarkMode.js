import { ref, watchEffect } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

export function useDarkMode() {
    watchEffect(() => {
        document.documentElement.classList.toggle('dark', isDark.value)
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    })

    function toggleDarkMode() {
        isDark.value = !isDark.value
    }

    return { isDark, toggleDarkMode }
}

