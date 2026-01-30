<template>
  <nav class="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/80 backdrop-blur-md">
    <div class="px-6 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-20">
        <!-- Logo/Name with accent -->
        <a 
          href="#home" 
          class="flex items-center space-x-2 group"
        >
          <div class="flex items-center justify-center w-10 h-10 text-lg font-bold text-white transition-transform duration-300 rounded-xl bg-primary-600 group-hover:rotate-6 group-hover:scale-110">
            {{ data.personal.name.charAt(0) }}
          </div>
          <span class="text-2xl font-bold transition-colors duration-300 text-neutral-900 group-hover:text-primary-600">
            {{ data.personal.name.split(' ')[0] }}
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="items-center hidden space-x-2 md:flex">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="`#${item.id}`"
            @click="setActiveSection(item.id)"
            class="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl"
            :class="activeSection === item.id 
              ? 'text-white bg-primary-600 shadow-md' 
              : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'"
          >
            {{ item.label }}
          </a>
          
          <a 
            href="#contact"
            class="px-6 py-2.5 ml-2 text-sm font-bold text-white transition-all duration-300 rounded-xl bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 hover:-translate-y-1 active:translate-y-0 group"
          >
            <span class="flex items-center space-x-2">
              <span>Contact Me</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-3 transition-all duration-300 rounded-xl md:hidden hover:bg-primary-50"
          :class="mobileMenuOpen ? 'bg-primary-600 text-white' : 'text-neutral-700'"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div 
          v-if="mobileMenuOpen"
          class="pb-6 overflow-hidden md:hidden"
        >
          <div class="pt-4 space-y-2">
            <a 
              v-for="item in navItems" 
              :key="item.id"
              :href="`#${item.id}`"
              @click="handleMobileClick(item.id)"
              class="block px-5 py-3 text-sm font-semibold transition-all duration-200 rounded-xl"
              :class="activeSection === item.id 
                ? 'text-white bg-primary-600 shadow-md' 
                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'"
            >
              {{ item.label }}
            </a>
            <a 
              href="#contact"
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center px-5 py-3 mt-4 text-sm font-bold text-white transition-all duration-300 rounded-xl bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 hover:-translate-y-1 active:translate-y-0 group"
            >
              <span>Contact Me</span>
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData
const mobileMenuOpen = ref(false)
const activeSection = ref('about')

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' }
]

const setActiveSection = (sectionId) => {
  activeSection.value = sectionId
}

const handleMobileClick = (sectionId) => {
  setActiveSection(sectionId)
  mobileMenuOpen.value = false
}

// Auto-detect active section on scroll
const handleScroll = () => {
  const sections = navItems.map(item => item.id)
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>