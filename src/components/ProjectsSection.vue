<template>
  <!-- Work Section -->
  <section
    id="work"
    class="py-24 reveal-on-scroll"
    v-intersect.once
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
      <p class="text-gray-600 dark:text-gray-400">Some things I've built</p>
    </div>
    <div class="w-full px-4 md:px-8 lg:px-12">
      <div class="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg reveal-on-scroll card-spotlight"
          v-intersect.once
          :style="{ transitionDelay: `${index * 80}ms` }"
          @mousemove="handleSpotlight"
        >
        <div class="relative overflow-hidden h-48">
          <img 
            :src="getImageUrl(project.image)"
            @error="e => e.target.src = fallbackLogo"
            :alt="project.title" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" 
              class="px-5 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
              View Project →
            </a>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="skill in project.skills" :key="skill" 
                  class="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
              <img 
                :src="getLogoUrl(skillLogoByName[skill] || 'placeholder-logo.png')"
                loading="lazy"
                :alt="skill" 
                class="object-contain" 
                :class="largeLogoSkills.includes(skill) ? 'w-7 h-7' : 'w-5 h-5'"
              />
              <span>{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fallbackLogo from '../assets/logo.png'

const logoFiles = import.meta.glob('../assets/logos/*', { eager: true, as: 'url' })
const imageFiles = import.meta.glob('../assets/img/*', { eager: true, as: 'url' })

const getLogoUrl = (fileName) => {
  return logoFiles[`../assets/logos/${fileName}`] || fallbackLogo
}

const getImageUrl = (fileName) => {
  return imageFiles[`../assets/img/${fileName}`] || fallbackLogo
}

const handleSpotlight = (event) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

defineProps({
  projects: {
    type: Array,
    required: true,
  },
  largeLogoSkills: {
    type: Array,
    required: true,
  },
  skillLogoByName: {
    type: Object,
    required: true,
  },
})
</script>
