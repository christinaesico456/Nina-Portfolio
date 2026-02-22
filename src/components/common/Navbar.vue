<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-[#faf8f5]/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-neutral-200/60'
      : 'bg-transparent'"
  >
    <div class="px-6 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <div class="relative flex items-center justify-center w-9 h-9">
            <div class="absolute inset-0 rounded-lg border border-[#a86d42]/40 rotate-45 group-hover:rotate-[55deg] transition-transform duration-500"></div>
            <span class="relative text-sm font-bold text-[#a86d42]" style="font-family:'Playfair Display',serif">N</span>
          </div>
          <span class="text-base font-medium tracking-wide text-neutral-800 group-hover:text-[#a86d42] transition-colors duration-300" style="font-family:'DM Sans',sans-serif">
            {{ data.personal.name }}
          </span>
        </a>


        <!-- Desktop Nav -->
        <div class="items-center hidden gap-1 md:flex">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="setActiveSection(item.id)"
            class="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group"
            :class="activeSection === item.id
              ? 'text-[#8c5835]'
              : 'text-neutral-600 hover:text-neutral-900'"
          >
            <!-- Active indicator underline -->
            <span
              class="absolute bottom-0.5 left-4 right-4 h-px bg-[#a86d42] transition-all duration-300 rounded-full"
              :class="activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
            ></span>
            {{ item.label }}
          </a>


          <a
            href="#contact"
            class="ml-4 px-5 py-2.5 text-sm font-medium text-white rounded-full
              bg-neutral-900 hover:bg-[#8c5835] transition-all duration-300
              hover:shadow-lg hover:shadow-neutral-900/20 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
          >
            Let's talk
          </a>
        </div>


        <!-- Mobile Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 transition-all duration-300 rounded-full md:hidden text-neutral-600 hover:bg-neutral-100"
          aria-label="Toggle menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>


      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div v-if="mobileMenuOpen" class="pb-6 md:hidden">
          <div class="pt-2 space-y-1 border-t border-neutral-200/60">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click="handleMobileClick(item.id)"
              class="block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl"
              :class="activeSection === item.id
                ? 'text-[#8c5835] bg-[#f4e9de]'
                : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'"
            >
              {{ item.label }}
            </a>
            <a
              href="#contact"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-sm font-medium text-center text-white rounded-xl bg-neutral-900 hover:bg-[#8c5835] transition-colors duration-300 mt-2"
            >
              Let's talk
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
const activeSection = ref('home')
const scrolled = ref(false)


const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' }
]


const setActiveSection = (id) => { activeSection.value = id }
const handleMobileClick = (id) => {
  setActiveSection(id)
  mobileMenuOpen.value = false
}


const handleScroll = () => {
  scrolled.value = window.scrollY > 20


  const allSections = ['home', ...navItems.map(i => i.id), 'contact']
  const pos = window.scrollY + 120


  for (const id of allSections) {
    const el = document.getElementById(id)
    if (el) {
      const { offsetTop, offsetHeight } = el
      if (pos >= offsetTop && pos < offsetTop + offsetHeight) {
        activeSection.value = id
        break
      }
    }
  }
}


onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>


