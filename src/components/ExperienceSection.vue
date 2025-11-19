<template>
  <!-- Experience Section -->
  <section
    id="experience"
    class="py-24 reveal-on-scroll"
    v-intersect.once
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
      <p class="text-gray-600 dark:text-gray-400">My professional journey</p>
    </div>
    <div class="w-full px-4 md:px-8 lg:px-12">
      <!-- Timeline -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
        
        <div class="space-y-12">
          <div
            v-for="(job, index) in experience"
            :key="index"
            class="relative flex flex-col md:flex-row gap-8 reveal-on-scroll"
            v-intersect.once
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <!-- Timeline dot -->
            <div class="hidden md:flex absolute left-8 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-950 transform -translate-x-1.5"></div>
            
            <!-- Content -->
            <div class="md:ml-20 flex-1">
              <div class="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg card-spotlight" @mousemove="handleSpotlight">
                <div class="flex items-start gap-4">
                  <!-- Logo -->
                  <div class="flex-shrink-0 w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden"
                       :class="job.logo === 'smart-logo.png' ? 'p-2' : 'p-1'">
                    <img 
                      :src="getLogoUrl(job.logo)"
                      :class="job.logo === 'smart-logo.png' ? 'w-full h-full object-contain' : 'w-full h-full object-cover rounded-full'"
                      :alt="job.company"
                    />
                  </div>
                  
                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ job.title }}</h3>
                        <p class="text-base font-semibold text-blue-600 dark:text-blue-400">{{ job.company }} · {{ job.team }}</p>
                      </div>
                      <span class="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-medium">{{ job.period }}</span>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{{ job.description }}</p>
                    
                    <div class="flex flex-wrap gap-2">
                      <div v-for="skill in job.skills" :key="skill" 
                            class="flex items-center gap-2 text-sm font-medium px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
          </div>
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

const handleSpotlight = (event) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

defineProps({
  experience: {
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
