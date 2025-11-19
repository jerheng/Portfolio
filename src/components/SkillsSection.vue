<template>
  <!-- Skills Section -->
  <section
    id="skills"
    class="py-24 reveal-on-scroll"
    v-intersect.once
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
      <p class="text-gray-600 dark:text-gray-400">Tools and technologies I work with</p>
    </div>
    <div class="w-full px-4 md:px-8 lg:px-12">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group bg-white dark:bg-gray-900 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-md flex items-center gap-2.5 reveal-on-scroll"
          v-intersect.once
          :style="{ transitionDelay: `${index * 40}ms` }"
        >
          <img 
            :src="getLogoUrl(skill.logo)"
            @error="e => e.target.src = fallbackLogo"
            :alt="skill.name" 
            loading="lazy" 
            class="object-contain" 
            :class="largeLogoSkills.includes(skill.name) ? 'w-7 h-7' : 'w-5 h-5'"
          />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fallbackLogo from '../assets/logo.png'

const logoFiles = import.meta.glob('../assets/logos/*', { eager: true, as: 'url' })

const getLogoUrl = (fileName) => {
  return logoFiles[`../assets/logos/${fileName}`] || fallbackLogo
}

defineProps({
  skills: {
    type: Array,
    required: true,
  },
  largeLogoSkills: {
    type: Array,
    required: true,
  },
})
</script>
