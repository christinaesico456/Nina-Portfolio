<template>
  <section id="education" class="relative bg-[#faf8f5] overflow-hidden">
    <div class="absolute inset-0 opacity-[0.018]"
      style="background-image: radial-gradient(circle, #78716c 1px, transparent 1px); background-size: 28px 28px;">
    </div>


    <div class="max-w-4xl mx-auto section-container">
      <!-- Header -->
      <div class="mb-16 text-center reveal">
        <span class="inline-flex mb-5 section-pill">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
          </svg>
          Academic Background
        </span>
        <h2 class="text-4xl font-black leading-tight md:text-5xl text-neutral-900">
          <span class="italic text-[#a86d42]">Education</span>
        </h2>
        <p class="mt-3 text-neutral-500" style="font-family:'DM Sans',sans-serif">My academic journey and achievements</p>
      </div>


      <!-- Education Cards -->
      <div class="space-y-6">
        <div
          v-for="(edu, i) in data.education"
          :key="i"
          class="reveal group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white
            hover:border-[#dab996] hover:shadow-[0_8px_40px_rgba(168,109,66,0.1)]
            transition-all duration-500 p-8 md:p-10"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Decorative gradient corner -->
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#f4e9de]/40 to-transparent
            transition-opacity duration-300 opacity-60 group-hover:opacity-100 rounded-bl-[4rem] rounded-tr-2xl pointer-events-none">
          </div>


          <div class="relative">
            <!-- Top row -->
            <div class="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
              <div class="flex items-start gap-4">
                <!-- Icon -->
                <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f4e9de]
                  group-hover:bg-[#a86d42] transition-colors duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 text-[#a86d42] group-hover:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-neutral-900">{{ edu.degree }}</h3>
                  <p class="text-neutral-500 text-sm mt-0.5" style="font-family:'DM Sans',sans-serif">{{ edu.school }}</p>
                </div>
              </div>


              <!-- Period badge -->
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e9d3bc]
                bg-[#faf5f0] text-[#8c5835] text-xs font-medium whitespace-nowrap self-start"
                style="font-family:'DM Sans',sans-serif">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ edu.period }}
              </div>
            </div>


            <!-- Achievements -->
            <div class="space-y-2">
              <div
                v-for="(achievement, ai) in edu.achievements"
                :key="ai"
                class="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-transparent
                  hover:border-[#e9d3bc] hover:bg-[#faf5f0] transition-all duration-200"
              >
                <div class="w-5 h-5 rounded-full bg-[#f4e9de] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-[#a86d42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-sm leading-relaxed text-neutral-700" style="font-family:'DM Sans',sans-serif">{{ achievement }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Certifications -->
      <div v-if="data.certifications && data.certifications.length > 0" class="mt-16">
        <div class="flex items-center gap-3 mb-8 reveal">
          <div class="w-6 h-px bg-[#a86d42]"></div>
          <span class="text-xs font-semibold tracking-widest uppercase text-[#8c5835]"
            style="font-family:'DM Sans',sans-serif">Certifications</span>
          <div class="flex-1 h-px bg-neutral-200"></div>
        </div>


        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(cert, i) in data.certifications"
            :key="i"
            class="reveal group p-5 rounded-xl border border-neutral-100 bg-white
              hover:border-[#dab996] hover:shadow-md transition-all duration-300 flex items-start gap-4"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f4e9de]
              group-hover:bg-[#a86d42] transition-colors duration-300 flex-shrink-0">
              <svg class="w-5 h-5 text-[#a86d42] group-hover:text-white transition-colors duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-neutral-900 group-hover:text-[#8c5835] transition-colors duration-300">{{ cert.name }}</h4>
              <p class="text-sm text-neutral-500 mt-0.5" style="font-family:'DM Sans',sans-serif">{{ cert.issuer }}</p>
              <span class="inline-flex items-center gap-1 mt-1.5 text-xs text-neutral-400"
                style="font-family:'DM Sans',sans-serif">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ cert.date }}
              </span>
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


onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('#education .reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('#education .reveal').forEach(el => observer.observe(el))
})
</script>
