<template>
  <section id="projects" class="relative overflow-hidden bg-white">
    <!-- Subtle right accent -->
    <div class="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#dab996] to-transparent opacity-30"></div>


    <div class="max-w-6xl mx-auto section-container">
      <!-- Header -->
      <div class="mb-16 reveal">
        <span class="inline-flex mb-5 section-pill">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          Featured Work
        </span>
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 class="text-4xl font-black leading-tight md:text-5xl text-neutral-900">
            Selected <span class="italic text-[#a86d42]">Projects</span>
          </h2>
          <p class="max-w-md text-sm text-neutral-500 md:text-right" style="font-family:'DM Sans',sans-serif">
            Real projects demonstrating problem-solving, clean code, and continuous learning.
          </p>
        </div>
      </div>


      <!-- Featured Projects — Alternating layout -->
      <div class="space-y-8">
        <div
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          class="reveal tilt-card shine group relative overflow-hidden rounded-2xl border border-neutral-100
            bg-gradient-to-br from-[#faf8f5] to-white p-8 md:p-10
            hover:border-[#dab996] hover:shadow-[0_8px_40px_rgba(168,109,66,0.12)]
            transition-all duration-500 cursor-default"
          :class="`reveal-delay-${i + 1}`"
          @mousemove="handleTilt($event, `proj-${i}`)"
          @mouseleave="resetTilt(`proj-${i}`)"
          :ref="el => { if (el) tiltRefs[`proj-${i}`] = el }"
        >
          <!-- Top row -->
          <div class="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
            <div class="flex items-center gap-3">
              <!-- Project number -->
              <span class="text-4xl font-black text-[#e9d3bc]" style="font-family:'Playfair Display',serif">
                0{{ i + 1 }}
              </span>
              <div>
                <h3 class="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-[#8c5835] transition-colors duration-300">
                  {{ project.title }}
                </h3>
                <div class="flex flex-wrap gap-1.5 mt-1">
                  <span
                    v-for="tech in project.tech.slice(0, 3)"
                    :key="tech"
                    class="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full
                      bg-neutral-100 text-neutral-600"
                    style="font-family:'DM Sans',sans-serif"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.tech.length > 3"
                    class="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-neutral-100 text-neutral-500"
                    style="font-family:'DM Sans',sans-serif">
                    +{{ project.tech.length - 3 }}
                  </span>
                </div>
              </div>
            </div>


            <!-- Links -->
            <div class="flex items-center flex-shrink-0 gap-2">
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full
                  border border-neutral-200 text-neutral-600 hover:border-[#a86d42] hover:text-[#a86d42]
                  transition-all duration-200"
                style="font-family:'DM Sans',sans-serif"
                @click.stop>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Demo
              </a>
              <a :href="project.github" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full
                  border border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900
                  hover:bg-neutral-900 hover:text-white transition-all duration-200"
                style="font-family:'DM Sans',sans-serif"
                @click.stop>
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>
          </div>


          <!-- Description -->
          <p class="mb-5 leading-relaxed text-neutral-600" style="font-family:'DM Sans',sans-serif">
            {{ project.description }}
          </p>


          <!-- Problem solved -->
          <div class="flex items-start gap-3 p-4 bg-white border rounded-xl border-neutral-100">
            <div class="w-1.5 h-1.5 rounded-full bg-[#a86d42] mt-2 flex-shrink-0"></div>
            <div>
              <span class="text-xs font-semibold tracking-wider uppercase text-[#8c5835] block mb-1"
                style="font-family:'DM Sans',sans-serif">Problem Solved</span>
              <p class="text-sm text-neutral-600" style="font-family:'DM Sans',sans-serif">{{ project.problem }}</p>
            </div>
          </div>
        </div>
      </div>


      <!-- Other Projects -->
      <div v-if="otherProjects.length > 0" class="mt-16">
        <div class="flex items-center gap-3 mb-8 reveal">
          <div class="w-6 h-px bg-[#a86d42]"></div>
          <span class="text-xs font-semibold tracking-widest uppercase text-[#8c5835]"
            style="font-family:'DM Sans',sans-serif">Other Projects</span>
          <div class="flex-1 h-px bg-neutral-200"></div>
        </div>


        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="(project, i) in otherProjects"
            :key="project.id"
            class="reveal p-6 rounded-xl border border-neutral-100 bg-[#faf8f5] hover:bg-white
              hover:border-[#dab996] hover:shadow-md transition-all duration-300"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="flex items-start justify-between mb-3">
              <h4 class="font-semibold text-neutral-900">{{ project.title }}</h4>
              <a :href="project.github" target="_blank" rel="noopener noreferrer"
                class="flex-shrink-0 ml-2 transition-colors duration-200 text-neutral-400 hover:text-neutral-900">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p class="mb-3 text-sm text-neutral-600" style="font-family:'DM Sans',sans-serif">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.tech" :key="tech"
                class="px-2 py-0.5 text-[10px] font-medium rounded-full bg-neutral-200/70 text-neutral-600"
                style="font-family:'DM Sans',sans-serif">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>


      <!-- CTA -->
      <div class="mt-16 text-center reveal">
        <p class="mb-5 text-sm text-neutral-500" style="font-family:'DM Sans',sans-serif">
          Want to see more? All my work is open source.
        </p>
        <a :href="data.personal.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 btn-primary">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View GitHub Profile
        </a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'


const data = portfolioData
const tiltRefs = ref({})


const featuredProjects = computed(() => data.projects.filter(p => p.featured))
const otherProjects = computed(() => data.projects.filter(p => !p.featured))


const handleTilt = (e, key) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = tiltRefs.value[key]
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
  el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.01)`
}


const resetTilt = (key) => {
  const el = tiltRefs.value[key]
  if (el) el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
}


onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('#projects .reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('#projects .reveal').forEach(el => observer.observe(el))
})
</script>
