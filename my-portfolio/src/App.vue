<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 transition-all duration-500">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">jerheng.com</a>
        <div class="flex items-center space-x-6">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" 
             class="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 relative group">
            {{ section.title }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <button @click="toggleDarkMode" 
                  class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
            <SunIcon v-if="isDarkMode" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 pt-24 pb-24">
      <!-- Hero Section -->
      <section class="py-20 text-center">
        <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{{ displayedName }}</h1>
        <p class="text-2xl mb-8">{{ fullDescription }}</p>
        <div class="flex justify-center space-x-4">
          <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">Get in Touch</a>
          <a href="#work" class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">View My Work</a>
        </div>
      </section>

      <!-- About Me Section -->
      <section id="about" class="py-20">
        <h2 class="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div class="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p class="text-lg leading-relaxed">
            Hello! I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. 
            With expertise in Vue.js, React, Node.js, and modern web technologies, I bring ideas to life through code.
            I believe in the power of technology to solve real-world problems and am constantly learning to stay at the forefront of web development.
          </p>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-20">
        <h2 class="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div class="space-y-6">
          <div v-for="(job, index) in experience" :key="index" 
               class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-start hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="w-16 h-16 mr-6 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <img :src="require(`@/assets/icons/${job.logo}`)" :alt="`${job.company} logo`" class="w-full h-full object-cover rounded-full" />
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
  <h2 class="text-3xl font-bold mb-6 text-center">Work</h2>
  <div :class="`grid gap-8 ${projects.length === 1 ? 'grid-cols-1 justify-items-center' : projects.length === 2 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`">
    <div v-for="project in projects" :key="project.id" 
         class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group w-full">
      <div class="relative overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a :href="project.link" target="_blank" rel="noopener noreferrer" 
             class="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
            View Project
          </a>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
      </div>
    </div>
  </div>
</section>


      <!-- Skills Section -->
      <section id="skills" class="py-20">
        <h2 class="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="skill in skills" :key="skill" 
               class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {{ skill }}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <h2 class="text-3xl font-bold mb-6 text-center">Contact</h2>
        <div class="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p class="text-lg mb-6 text-center">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <form @submit.prevent="submitForm" class="space-y-4">
            <input v-model="form.name" type="text" placeholder="Your Name" required
                   class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input v-model="form.email" type="email" placeholder="Your Email" required
                   class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea v-model="form.message" placeholder="Your Message" required rows="4"
                      class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>

    <!-- Floating Social Icons -->
    <div class="fixed bottom-6 right-6 flex space-x-4">
      <a href="https://linkedin.com/in/jerheng" target="_blank" rel="noopener noreferrer" 
         class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <LinkedinIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </a>
      <a href="https://github.com/jerheng" target="_blank" rel="noopener noreferrer" 
         class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <GithubIcon class="h-6 w-6 text-gray-800 dark:text-gray-200" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { SunIcon, MoonIcon, LinkedinIcon, GithubIcon } from 'lucide-vue-next'

const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true' || localStorage.getItem('isDarkMode') === null)
const displayedName = ref('')
const displayedDescription = ref('')
const fullName = "Hi! I'm Jeremy."
const fullDescription = "Full-Stack Developer & UI/UX Enthusiast"

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('isDarkMode', isDarkMode.value)
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

const experience = [
  {
    title: 'Data Analyst Intern',
    company: 'Temasek',
    period: 'Aug 2024 - Present',
    description: 'Lead the development team, implementing cutting-edge web applications using Vue.js, React, and Node.js.',
    logo: 'temasek-international.jpg'
  },
  {
    title: 'Business Analyst Intern',
    company: 'Shopee',
    period: 'May 2024 - Aug 2024',
    description: 'Developed responsive websites and web applications for various clients using modern JavaScript frameworks and backend technologies.',
    logo: 'shopee-icon.webp'
  }
]

const projects = [
  {
    id: 1,
    title: 'Spotify Utility',
    description: 'Spotify CLI and Streamlit Utility for downloading songs and merging playlists',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 2,
    title: 'LOA Helper',
    description: 'A discord bot to assist with raid scheduling in different threads',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
  // {
  //   id: 3,
  //   title: 'Weather Dashboard',
  //   description: 'A real-time weather information app using Vue.js and OpenWeatherMap API',
  //   image: '/placeholder.svg?height=300&width=400',
  //   link: '#'
  // }
]

const skills = [
  'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Node.js', 'Express.js', 
  'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'HTML5', 'CSS3', 
  'Sass', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 'CI/CD'
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', message: '' }
  alert('Thank you for your message! I will get back to you soon.')
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
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