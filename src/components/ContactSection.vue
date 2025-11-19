<template>
  <!-- Contact Section -->
  <section
    id="contact"
    class="py-24 reveal-on-scroll"
    v-intersect.once
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
      <p class="text-gray-600 dark:text-gray-400">Get in touch for opportunities and collaborations</p>
    </div>
    <div class="w-full px-4 md:px-8 lg:px-12">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white dark:bg-gray-900 p-10 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          I'm always open to new work opportunities and collaborations. Feel free to reach out!
        </p>
        <a href="mailto:contact@jerheng.com" 
           class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 mb-8">
          contact@jerheng.com
        </a>
        <div class="flex justify-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
          <a href="https://linkedin.com/in/jerheng" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <LinkedinIcon class="h-5 w-5" />
            <span class="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/jerheng" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <GithubIcon class="h-5 w-5" />
            <span class="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LinkedinIcon, GithubIcon } from 'lucide-vue-next'
</script>
