<template>
  <div :class="{ 'dark': isDarkMode }">
    <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <!-- Navbar -->
      <nav class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-blue-600 dark:text-blue-400">Portfolio</a>
          <div class="flex items-center space-x-6">
            <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              {{ section.title }}
            </a>
            <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              <SunIcon v-if="isDarkMode" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="container mx-auto px-4 pt-20 pb-24">
        <!-- About Me Section -->
        <section id="about" class="py-20">
          <h2 class="text-3xl font-bold mb-6">About Me</h2>
          <p class="text-lg">
            Hello! I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. 
            With expertise in Vue.js, React, and modern web technologies, I bring ideas to life through code.
          </p>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="py-20">
          <h2 class="text-3xl font-bold mb-6">Experience</h2>
          <div class="space-y-6">
            <div v-for="(job, index) in experience" :key="index" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex items-start">
              <div class="w-16 h-16 mr-6 flex-shrink-0 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center">
                <img :src="job.logo" :alt="`${job.company} logo`" class="w-12 h-12 object-contain" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ job.title }} at {{ job.company }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ job.period }}</p>
                <p class="mt-2">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Work Section -->
        <section id="work" class="py-20">
          <h2 class="text-3xl font-bold mb-6">Work</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="project in projects" :key="project.id" class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                <a :href="project.link" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20">
          <h2 class="text-3xl font-bold mb-6">Contact</h2>
          <p class="text-lg mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a href="mailto:your.email@example.com" class="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
            Get in Touch
          </a>
        </section>
      </main>

      <!-- Footer -->
      <footer class="fixed bottom-0 right-0 p-4 z-50">
        <div class="flex justify-end space-x-4">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <LinkedinIcon class="h-6 w-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <GithubIcon class="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SunIcon, MoonIcon, LinkedinIcon, GithubIcon } from 'lucide-vue-next'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' }
]

const experience = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2020 - Present',
    description: 'Lead the frontend development team, implementing cutting-edge web applications using Vue.js and React.',
    logo: '/placeholder.svg?height=100&width=100'
  },
  {
    title: 'Web Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Jun 2017 - Dec 2019',
    description: 'Developed responsive websites and web applications for various clients using modern JavaScript frameworks.',
    logo: '/placeholder.svg?height=100&width=100'
  }
]

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with Vue.js and Node.js',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app built with React and Firebase',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather information app using Vue.js and OpenWeatherMap API',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
]
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
}

body {
  padding-bottom: 4rem; /* Add padding to the bottom to prevent content from being hidden by the footer */
}
</style>