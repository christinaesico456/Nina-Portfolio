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

        <!-- Slider -->
        <div class="relative reveal">
          <!-- Prev button -->
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200
              hover:border-[#dab996] hover:shadow-md transition-all duration-200"
            aria-label="Previous"
          >
            <svg class="w-4 h-4 text-[#a86d42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <!-- Track -->
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out gap-4"
              :style="{ transform: `translateX(calc(-${currentSlide * (100 / visibleCount)}% - ${currentSlide * 16 / visibleCount}px))` }"
            >
              <div
                v-for="(cert, i) in data.certifications"
                :key="i"
                class="group rounded-xl border border-neutral-100 bg-white flex-shrink-0
                  hover:border-[#dab996] hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                :style="{ width: `calc(${100 / visibleCount}% - ${16 * (visibleCount - 1) / visibleCount}px)` }"
                @click="openLightbox(cert)"
              >
                <!-- Certificate image thumbnail -->
                <div class="relative overflow-hidden bg-neutral-50" style="aspect-ratio: 16/10;">
                  <img
                    v-if="cert.image"
                    :src="cert.image"
                    :alt="cert.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <!-- View overlay -->
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300
                    flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-white/90 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8c5835]"
                      style="font-family:'DM Sans',sans-serif">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View
                    </div>
                  </div>
                </div>

                <!-- Card info -->
                <div class="p-4 flex items-start gap-3">
                  <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f4e9de]
                    group-hover:bg-[#a86d42] transition-colors duration-300 flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-[#a86d42] group-hover:text-white transition-colors duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <h4 class="font-semibold text-neutral-900 group-hover:text-[#8c5835] transition-colors duration-300 text-sm leading-snug">{{ cert.name }}</h4>
                    <p class="text-xs text-neutral-500 mt-0.5 truncate" style="font-family:'DM Sans',sans-serif">{{ cert.issuer }}</p>
                    <span class="inline-flex items-center gap-1 mt-1.5 text-xs text-neutral-400"
                      style="font-family:'DM Sans',sans-serif">
                      <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <!-- Next button -->
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200
              hover:border-[#dab996] hover:shadow-md transition-all duration-200"
            aria-label="Next"
          >
            <svg class="w-4 h-4 text-[#a86d42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Dots -->
          <div class="flex justify-center gap-2 mt-6">
            <button
              v-for="(_, i) in data.certifications"
              :key="i"
              @click="currentSlide = Math.min(i, maxSlide)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentSlide === Math.min(i, maxSlide) ? 'bg-[#a86d42] w-4' : 'bg-neutral-300'"
              :aria-label="`Go to slide ${i + 1}`"
            />
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <Transition name="lightbox">
        <div
          v-if="lightboxCert"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <div class="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full">
            <!-- Close -->
            <button
              @click="closeLightbox"
              class="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center
                rounded-full bg-white/80 hover:bg-white border border-neutral-200 transition-all"
            >
              <svg class="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <!-- Image -->
            <img :src="lightboxCert.image" :alt="lightboxCert.name" class="w-full h-auto" />
            <!-- Caption -->
            <div class="px-6 py-4 border-t border-neutral-100">
              <p class="font-semibold text-neutral-900 text-sm">{{ lightboxCert.name }}</p>
              <p class="text-xs text-neutral-500 mt-0.5" style="font-family:'DM Sans',sans-serif">
                {{ lightboxCert.issuer }} · {{ lightboxCert.date }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>


<script setup>
import { onMounted, ref, computed, onUnmounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData

const currentSlide = ref(0)
const visibleCount = ref(2)
const lightboxCert = ref(null)

const maxSlide = computed(() => Math.max(0, data.certifications.length - visibleCount.value))

function updateVisibleCount() {
  visibleCount.value = window.innerWidth < 640 ? 1 : 2
}

function prevSlide() {
  currentSlide.value = Math.max(0, currentSlide.value - 1)
}

function nextSlide() {
  currentSlide.value = Math.min(maxSlide.value, currentSlide.value + 1)
}

function openLightbox(cert) {
  lightboxCert.value = cert
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxCert.value = null
  document.body.style.overflow = ''
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('#education .reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('#education .reveal').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lightbox-enter-active, .lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-active .relative,
.lightbox-leave-active .relative {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.lightbox-enter-from, .lightbox-leave-to {
  opacity: 0;
}
</style>
