<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar
      :sections="sections"
      :is-dark-mode="isDarkMode"
      :toggle-dark-mode="toggleDarkMode"
      :smooth-scroll="smoothScroll"
    />

    <!-- Main Content -->
    <main class="container mx-auto px-6 pt-24 pb-24 max-w-7xl">
      <HeroSection
        :displayed-name="displayedName"
        :full-description="displayedDescription"
        :smooth-scroll="smoothScroll"
      />

      <AboutSection />

      <ExperienceSection
        :experience="experience"
        :large-logo-skills="largeLogoSkills"
        :skill-logo-by-name="skillLogoByName"
      />

      <ProjectsSection
        :projects="projects"
        :large-logo-skills="largeLogoSkills"
        :skill-logo-by-name="skillLogoByName"
      />

      <SkillsSection
        :skills="skills"
        :large-logo-skills="largeLogoSkills"
      />

      <ContactSection />
    </main>

    <!-- Scroll to Top Button -->
    <button @click="scrollToTop"
       class="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 z-40">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, defineAsyncComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
import { skills, largeLogoSkills, skillLogoByName } from '@/data/skills'

const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('@/components/ProjectsSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('@/components/SkillsSection.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))

const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true' || localStorage.getItem('isDarkMode') === null)
const displayedName = ref('')
const displayedDescription = ref('')
const fullName = "Hi! I'm Jeremy."
const fullDescription = "Software Engineer & Data Analyst"

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('isDarkMode', isDarkMode.value)
}

const smoothScroll = (targetId) => {
  const element = document.getElementById(targetId)
  if (element) {
    const navbarHeight = 80
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000 // 1 second
    let start = null

    const animation = (currentTime) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function for smooth animation
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
      
      window.scrollTo(0, startPosition + distance * ease)
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }
    
    requestAnimationFrame(animation)
  }
}

const scrollToTop = () => {
  const startPosition = window.pageYOffset
  const duration = 1000
  let start = null

  const animation = (currentTime) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)
    
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    
    window.scrollTo(0, startPosition * (1 - ease))
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }
  
  requestAnimationFrame(animation)
}

const typeWriterEffect = (text, index = 0, callback) => {
  if (index < text.length) {
    callback(text.substring(0, index + 1))
    setTimeout(() => typeWriterEffect(text, index + 1, callback), 100)
  }
}

watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
  typeWriterEffect(fullName, 0, (text) => {
    displayedName.value = text
  })
  typeWriterEffect(fullDescription, 0, (text) => {
    displayedDescription.value = text
  })
})

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'work', title: 'Work' },
  { id: 'skills', title: 'Skills' },
  { id: 'contact', title: 'Contact' }
]

// Currently commented out because gh-pages is a static site
// const form = ref({
//   name: '',
//   email: '',
//   message: ''
// })

// const submitForm = () => {
//   console.log('Form submitted:', form.value)
//   form.value = { name: '', email: '', message: '' }
//   alert('Thank you for your message! I will get back to you soon.')
// }
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

* {
  scroll-behavior: smooth !important;
}

html {
  scroll-behavior: smooth !important;
}

body {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Prevent overscroll */
html, body {
  overscroll-behavior-y: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>