<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-900 text-white shadow-md">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" class="text-xl font-bold">Amma Logic</a>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-blue-300">Projects</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-blue-300">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-blue-300">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-blue-300">Contact Us</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow container mx-auto px-6 py-8">
      <Nuxt />
    </main>

    <footer class="bg-gray-800 text-white text-center py-4">
      © 2024 Amma Logic. All rights reserved.
    </footer>
  </div>
</template>

<style>
/* Additional global styles if needed */
</style>
