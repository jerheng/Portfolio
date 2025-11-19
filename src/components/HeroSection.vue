<template>
  <!-- Hero Section -->
  <section class="min-h-[85vh] flex items-center justify-center relative">
    <div class="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-pink-950/40"></div>
      <div class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-purple-500/40 dark:bg-purple-500/30 blur-3xl animate-slow-pulse"></div>
      <div class="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 bg-blue-500/30 dark:bg-blue-500/25 blur-3xl animate-slow-pulse delay-200"></div>
    </div>
    <div class="text-center space-y-8 py-20">
      <div class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
        👋 Welcome to my portfolio
      </div>
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
        <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{{ displayedName }}</span>
      </h1>
      <div class="flex justify-center gap-4 pt-4">
        <a href="#contact" @click.prevent="smoothScroll('contact')" class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          Get in Touch
          <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
        <a href="#work" @click.prevent="smoothScroll('work')" class="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
          View My Work
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  displayedName: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  smoothScroll: {
    type: Function,
    required: true,
  },
})
</script>
