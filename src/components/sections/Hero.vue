<template>
  <section
    id="home"
    ref="heroRef"
    class="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#faf8f5]"
  >
    <!-- Parallax background layer -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{ transform: `translateY(${parallaxY}px)` }"
    >
      <!-- Large warm gradient blob -->
      <div class="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
        style="background: radial-gradient(circle, rgba(188,132,85,0.12) 0%, rgba(188,132,85,0.04) 50%, transparent 70%);">
      </div>
      <div class="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full"
        style="background: radial-gradient(circle, rgba(168,109,66,0.08) 0%, transparent 70%);">
      </div>
      <!-- Fine dot grid -->
      <div class="absolute inset-0 opacity-[0.025]"
        style="background-image: radial-gradient(circle, #78716c 1px, transparent 1px); background-size: 28px 28px;">
      </div>
    </div>


    <!-- Decorative editorial line top-left -->
    <div class="absolute flex-col items-center hidden gap-2 pointer-events-none top-28 left-8 md:left-16 md:flex opacity-30">
      <div class="w-px h-16 bg-[#a86d42]"></div>
      <span class="text-[10px] tracking-[0.3em] uppercase text-[#a86d42] rotate-90 translate-y-8" style="font-family:'DM Sans',sans-serif">scroll</span>
    </div>


    <!-- Content -->
    <div class="relative z-10 w-full text-center section-container lg:text-left">
      <div class="max-w-5xl mx-auto lg:mx-0">


        <!-- Availability badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-[#e9d3bc] bg-[#faf5f0] opacity-0 animate-in-badge">
          <span class="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-medium tracking-wide text-neutral-600" style="font-family:'DM Sans',sans-serif">
            Available for OJT / Internship
          </span>
        </div>


        <!-- Main headline — staggered reveal -->
        <div class="mb-2 overflow-hidden">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-neutral-900 translate-y-full opacity-0 animate-in-h1-1">
            Hi, I'm
          </h1>
        </div>
        <div class="mb-6 overflow-hidden">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#a86d42] italic translate-y-full opacity-0 animate-in-h1-2">
            {{ data.personal.name }}
          </h1>
        </div>


        <!-- Role & Tagline -->
        <div class="mb-3 overflow-hidden">
          <p class="text-lg font-medium translate-y-8 opacity-0 md:text-xl text-neutral-500 animate-in-sub" style="font-family:'DM Sans',sans-serif">
            {{ data.personal.role }}
          </p>
        </div>
        <div class="mb-12 overflow-hidden">
          <p class="max-w-xl text-base translate-y-8 opacity-0 md:text-lg text-neutral-400 animate-in-sub2" style="font-family:'DM Sans',sans-serif; animation-delay: 0.7s">
            {{ data.personal.tagline }}
          </p>
        </div>


        <!-- CTA Buttons -->
        <div class="flex flex-col items-center justify-center gap-4 mb-16 opacity-0 sm:flex-row lg:justify-start animate-in-cta">
          <a
            href="#projects"
            ref="magnetBtn"
            class="magnetic-btn w-full sm:w-auto px-8 py-4 text-sm font-medium text-white rounded-full bg-neutral-900 hover:bg-[#8c5835] transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/20 hover:-translate-y-0.5 text-center"
            style="font-family:'DM Sans',sans-serif"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="w-full px-8 py-4 text-sm font-medium text-center transition-all duration-300 border rounded-full sm:w-auto border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900"
            style="font-family:'DM Sans',sans-serif"
          >
            Get in Touch →
          </a>
        </div>


        <!-- Social Links -->
        <div class="flex items-center justify-center gap-5 opacity-0 lg:justify-start animate-in-social">
          <a :href="data.personal.github" target="_blank" rel="noopener noreferrer"
            class="text-neutral-400 hover:text-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a :href="data.personal.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-neutral-400 hover:text-[#0077b5] transition-all duration-300 hover:-translate-y-0.5"
            aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="`mailto:${data.personal.email}`"
            class="text-neutral-400 hover:text-[#a86d42] transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Email">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>


          <div class="w-16 h-px ml-1 bg-neutral-300"></div>
          <span class="text-xs tracking-wider text-neutral-400" style="font-family:'DM Sans',sans-serif">Connect</span>
        </div>
      </div>
    </div>


    <!-- Scroll indicator -->
    <div class="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2 animate-bounce-gentle opacity-60">
      <div class="w-px h-8 bg-neutral-400"></div>
      <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'


const data = portfolioData
const heroRef = ref(null)
const parallaxY = ref(0)
const magnetBtn = ref(null)


const handleScroll = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  parallaxY.value = window.scrollY * 0.25
}


// Magnetic button effect
const setupMagnet = () => {
  const btn = magnetBtn.value
  if (!btn) return


  btn.addEventListener('mousemove', (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`
  })


  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)'
  })
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  setupMagnet()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>


<style scoped>
@keyframes in-badge {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes in-h1 {
  from { opacity: 0; transform: translateY(100%); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes in-sub {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes in-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes bounce-gentle {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}


.animate-in-badge  { animation: in-badge 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
.animate-in-h1-1   { animation: in-h1   0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
.animate-in-h1-2   { animation: in-h1   0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
.animate-in-sub    { animation: in-sub  0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
.animate-in-sub2   { animation: in-sub  0.7s cubic-bezier(0.16,1,0.3,1) 0.7s  both; }
.animate-in-cta    { animation: in-fade 0.7s ease 0.9s both; }
.animate-in-social { animation: in-fade 0.7s ease 1.1s both; }


.animate-bounce-gentle {
  animation: bounce-gentle 2.5s ease-in-out infinite;
}


@media (prefers-reduced-motion: reduce) {
  [class*="animate-in"],
  .animate-bounce-gentle {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>


