<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 z-50 transition-all duration-300">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center max-w-7xl">
      <a ref="navbarLeft" href="#" class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">jerheng.com</a>
      <div ref="navbarRight" class="flex items-center space-x-8">
        <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" 
           @click.prevent="smoothScroll(section.id)"
           class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group">
          {{ section.title }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </a>  
        <button @click="toggleDarkMode" 
                class="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
          <SunIcon v-if="isDarkMode" class="h-5 w-5 text-yellow-500" />
          <MoonIcon v-else class="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { SunIcon, MoonIcon } from 'lucide-vue-next'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
  isDarkMode: {
    type: Boolean,
    required: true,
  },
  toggleDarkMode: {
    type: Function,
    required: true,
  },
  smoothScroll: {
    type: Function,
    required: true,
  },
})

const navbarLeft = ref(null)
const navbarRight = ref(null)

const checkNavbarFit = () => {
  if (navbarLeft.value && navbarRight.value) {
    const navbarLeftElement = navbarLeft.value.offsetWidth
    const navbarRightElement = navbarRight.value
    const navbarWidth = navbarRightElement.parentElement.clientWidth
    const rightWidth = navbarRightElement.scrollWidth
    if ((rightWidth + navbarLeftElement) > navbarWidth) {
      navbarRightElement.style.display = 'none'
    } else {
      navbarRightElement.style.display = 'flex'
    }
  }
}

onMounted(() => {
  checkNavbarFit()
  window.addEventListener('resize', checkNavbarFit)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkNavbarFit)
})
</script>
