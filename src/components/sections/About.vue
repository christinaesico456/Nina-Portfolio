<template>
  <section id="about" class="relative overflow-hidden bg-transparent section-container">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute rounded-full top-20 right-10 w-72 h-72 bg-neutral-200 mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow"></div>
      <div class="absolute rounded-full bottom-20 left-10 w-80 h-80 bg-neutral-300 mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow animation-delay-3000"></div>
      
      <!-- Subtle grid pattern background -->
      <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 24px 24px;"></div>
    </div>
    
    <div class="relative max-w-5xl mx-auto">
      <!-- Section Header - Redesigned -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full shadow-sm bg-white/60 backdrop-blur-sm">
          <div class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></div>
          <span class="text-sm font-medium tracking-wide uppercase text-primary-700">Get to know me</span>
        </div>
        <h2 class="text-3xl font-bold md:text-4xl text-neutral-900">
          About Me
        </h2>
      </div>

      <!-- Main Content - Redesigned Layout -->
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Left Column - Introduction (spans 2 columns) -->
        <div class="space-y-8 lg:col-span-2">
          <!-- Introduction Text -->
          <div class="p-8 border shadow-sm rounded-2xl bg-white/60 backdrop-blur-md border-neutral-200/60">
            <p class="text-lg leading-relaxed text-neutral-700">
              {{ data.about.introduction }}
            </p>
          </div>

          <!-- Highlights Grid -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div 
              v-for="(highlight, index) in data.about.highlights" 
              :key="index"
              class="relative p-5 overflow-hidden transition-all duration-300 border bg-white/60 backdrop-blur-md group rounded-xl border-neutral-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50"
            >
              <div class="absolute top-0 right-0 w-20 h-20 transition-opacity rounded-bl-full opacity-0 bg-primary-100/30 group-hover:opacity-100"></div>
              <div class="relative flex items-start gap-3">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-lg bg-primary-100 group-hover:bg-primary-200">
                  <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="flex-1 pt-1.5 text-neutral-700">{{ highlight }}</span>
              </div>
            </div>
          </div>

          <!-- Call to Action - Moved and redesigned -->
          <div class="p-8 border shadow-sm rounded-2xl bg-white/60 backdrop-blur-md border-primary-200/40">
            <div class="flex items-start justify-between gap-6">
              <div class="flex-1">
                <h3 class="mb-2 text-lg font-semibold text-neutral-900">Ready to collaborate?</h3>
                <p class="text-neutral-600">
                  I'm actively seeking internship opportunities where I can contribute to real-world projects and grow as a developer.
                </p>
              </div>
              <a href="#contact" class="flex-shrink-0 px-6 py-3 font-medium transition-all duration-300 rounded-xl bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 hover:-translate-y-0.5">
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Interests & Learning -->
        <div class="space-y-8 lg:col-span-1">
          <!-- Interests -->
          <div class="p-6 border shadow-sm bg-white/60 backdrop-blur-md rounded-2xl border-neutral-200/60">
            <div class="flex items-center gap-2 mb-5">
              <div class="w-1 h-6 rounded-full bg-primary-600"></div>
              <h3 class="text-lg font-semibold text-neutral-900">
                Interests
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(interest, index) in data.about.interests" 
                :key="index"
                class="px-3 py-1.5 text-sm font-medium transition-all duration-200 border rounded-lg bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700"
              >
                {{ interest }}
              </span>
            </div>
          </div>

          <!-- Currently Learning -->
          <div class="p-6 text-white border shadow-lg rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 border-primary-700">
            <div class="flex items-center gap-2 mb-5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <h4 class="text-sm font-semibold tracking-wide uppercase opacity-90">
                Learning Now
              </h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-start gap-3 p-3 transition-all duration-200 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <div class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                <span class="text-sm leading-relaxed">Advanced Vue.js patterns</span>
              </div>
              <div class="flex items-start gap-3 p-3 transition-all duration-200 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <div class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                <span class="text-sm leading-relaxed">Full-stack development</span>
              </div>
              <div class="flex items-start gap-3 p-3 transition-all duration-200 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <div class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                <span class="text-sm leading-relaxed">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData
</script>

<style scoped>
/* Slow blob animation for background orbs */
@keyframes blob-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-15px, 15px) scale(0.95);
  }
}

.animate-blob-slow {
  animation: blob-slow 10s infinite;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

/* Pulse for dot */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>