<template>
  <section id="about" class="relative overflow-hidden bg-white">
    <!-- Decorative left accent -->
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#dab996] to-transparent opacity-40"></div>


    <div class="max-w-5xl mx-auto section-container">
      <!-- Header -->
      <div class="mb-16 reveal">
        <span class="inline-flex mb-5 section-pill">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></svg>
          Get to know me
        </span>
        <h2 class="text-4xl font-black leading-tight md:text-5xl text-neutral-900">
          About <span class="italic text-[#a86d42]">Me</span>
        </h2>
      </div>


      <div class="grid gap-10 lg:grid-cols-5">
        <!-- Left: Intro + CTA (3 cols) -->
        <div class="space-y-6 lg:col-span-3">
          <!-- Intro card -->
          <div class="reveal reveal-delay-1 relative p-8 rounded-2xl border border-neutral-100
            bg-gradient-to-br from-[#faf8f5] to-white
            shadow-[0_2px_24px_rgba(0,0,0,0.05)]">
            <div class="absolute top-0 right-0 w-24 h-24 bg-[#f4e9de] rounded-bl-[3rem] rounded-tr-2xl opacity-60"></div>
            <p class="relative text-lg leading-relaxed text-neutral-700" style="font-family:'DM Sans',sans-serif">
              {{ data.about.introduction }}
            </p>
          </div>


          <!-- Highlights -->
          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="(highlight, i) in data.about.highlights"
              :key="i"
              class="reveal p-4 rounded-xl border border-neutral-100 bg-white hover:border-[#dab996]
                hover:shadow-md transition-all duration-300 group flex items-start gap-3"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="w-5 h-5 rounded-full bg-[#f4e9de] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#a86d42] transition-colors duration-300">
                <svg class="w-3 h-3 text-[#a86d42] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm leading-snug text-neutral-700" style="font-family:'DM Sans',sans-serif">{{ highlight }}</span>
            </div>
          </div>


          <!-- CTA -->
          <div class="reveal reveal-delay-3 p-6 rounded-2xl border border-[#e9d3bc] bg-[#faf5f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 class="mb-1 text-base font-semibold text-neutral-900">Ready to collaborate?</h3>
              <p class="text-sm text-neutral-500" style="font-family:'DM Sans',sans-serif">Seeking internship opportunities to grow as a developer.</p>
            </div>
            <a href="#contact" class="flex-shrink-0 btn-primary whitespace-nowrap">Let's Connect</a>
          </div>
        </div>


        <!-- Right: Interests + Learning (2 cols) -->
        <div class="space-y-6 lg:col-span-2">
          <!-- Interests -->
          <div class="reveal reveal-delay-2 p-6 rounded-2xl border border-neutral-100 bg-white shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-1 h-5 rounded-full bg-[#a86d42]"></div>
              <h3 class="font-semibold text-neutral-900">Interests</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(interest, i) in data.about.interests"
                :key="i"
                class="px-3 py-1.5 text-xs font-medium rounded-full border border-neutral-200
                  bg-neutral-50 text-neutral-700 hover:border-[#a86d42] hover:bg-[#faf5f0]
                  hover:text-[#a86d42] transition-all duration-200 cursor-default"
                style="font-family:'DM Sans',sans-serif"
              >
                {{ interest }}
              </span>
            </div>
          </div>


          <!-- Currently Learning — dark card -->
          <div class="p-6 text-white reveal reveal-delay-3 rounded-2xl bg-neutral-900">
            <div class="flex items-center gap-2 mb-5">
              <svg class="w-4 h-4 text-[#dab996]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="text-xs tracking-widest uppercase text-neutral-400" style="font-family:'DM Sans',sans-serif">Learning Now</span>
            </div>
            <div class="space-y-2">
              <div v-for="item in learningItems" :key="item"
                class="flex items-center gap-3 p-3 transition-colors duration-200 rounded-xl bg-white/5 hover:bg-white/10">
                <div class="w-1.5 h-1.5 rounded-full bg-[#dab996] flex-shrink-0"></div>
                <span class="text-sm text-neutral-300" style="font-family:'DM Sans',sans-serif">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'


const data = portfolioData


const learningItems = ['Advanced Vue.js patterns', 'Full-stack development', 'Artificial Intelligence']


onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: 0.12 })
  document.querySelectorAll('#about .reveal').forEach(el => observer.observe(el))
})
</script>
