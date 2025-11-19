<template>
  <!-- About Me Section -->
  <section
    id="about"
    class="py-24 reveal-on-scroll"
    v-intersect.once
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
      <p class="text-gray-600 dark:text-gray-400">A bit about who I am</p>
    </div>
    <div class="w-full px-4 md:px-8 lg:px-12">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl border border-gray-200 dark:border-gray-800">
          <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Hello! I'm an aspiring software engineer, with a keen interest in the intersection of <span class="font-medium text-gray-900 dark:text-gray-100">technology</span> and <span class="font-medium text-gray-900 dark:text-gray-100">finance</span>. I'm especially interested
            in how we can apply <span class="font-medium text-gray-900 dark:text-gray-100">data</span> to the financial markets in high impact environments. After market hours, you'll find me highly caffeinated
            hopping by new cafes, or brewing some of my own <span class="font-medium text-gray-900 dark:text-gray-100">coffee</span> at home! I believe in the power of technology to <span class="font-medium text-gray-900 dark:text-gray-100">solve real-world problems</span> and I'm
            constantly improving my skillsets, staying at the forefront of engineering and financial markets today.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
