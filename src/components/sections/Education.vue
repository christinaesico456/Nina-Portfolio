<template>
  <section id="education" class="relative bg-transparent section-container">
    <!-- Minimal dot pattern background -->
    <div class="absolute inset-0 opacity-[0.015]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 32px 32px;"></div>
    
    <div class="relative max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <div class="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-primary-50/50 backdrop-blur-sm">
          <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          </svg>
          <span class="text-sm font-medium tracking-wide uppercase text-primary-700">Academic background</span>
        </div>
        <h2 class="mb-3 text-3xl font-bold md:text-4xl text-neutral-900">
          Education
        </h2>
        <p class="text-lg text-neutral-600">
          My academic journey and achievements
        </p>
      </div>

      <!-- Education Timeline -->
      <div class="relative space-y-6">
        <div 
          v-for="(edu, index) in data.education" 
          :key="index"
          class="relative"
        >
          <div class="relative p-6 overflow-hidden transition-all duration-300 bg-white border md:p-8 rounded-2xl border-neutral-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30 group">
            <!-- Subtle gradient overlay on hover -->
            <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-50/20 to-transparent group-hover:opacity-100 rounded-2xl"></div>
            
            <div class="relative">
              <!-- Header -->
              <div class="flex items-start gap-4 mb-6">
                <!-- Icon -->
                <div class="flex items-center justify-center flex-shrink-0 transition-all duration-300 w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-primary-600">
                  <svg class="transition-colors duration-300 w-7 h-7 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                  </svg>
                </div>

                <!-- Title & Period -->
                <div class="flex-1">
                  <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 class="text-xl font-bold md:text-2xl text-neutral-900">
                        {{ edu.degree }}
                      </h3>
                      <p class="mt-1 text-base md:text-lg text-neutral-600">
                        {{ edu.school }}
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border rounded-lg bg-primary-50 text-primary-700 border-primary-200 whitespace-nowrap">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ edu.period }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Achievements -->
              <div class="space-y-3">
                <div 
                  v-for="(achievement, i) in edu.achievements" 
                  :key="i"
                  class="flex items-start gap-3 p-3 transition-all duration-200 border group/item rounded-xl bg-neutral-50/50 border-neutral-200/60 hover:border-primary-200 hover:bg-primary-50/30"
                >
                  <div class="flex items-center justify-center flex-shrink-0 w-6 h-6 transition-all duration-200 rounded-lg bg-primary-100 group-hover/item:bg-primary-200">
                    <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="flex-1 text-sm leading-relaxed transition-colors duration-200 text-neutral-700 group-hover/item:text-neutral-900">
                    {{ achievement }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div v-if="data.certifications && data.certifications.length > 0" class="mt-16">
        <div class="mb-8 text-center">
          <div class="inline-flex items-center gap-3 px-4 py-2 mb-4 rounded-full bg-primary-50/50 backdrop-blur-sm">
            <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <span class="text-sm font-medium tracking-wide uppercase text-primary-700">Professional credentials</span>
          </div>
          <h3 class="text-2xl font-bold text-neutral-900">
            Certifications
          </h3>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div 
            v-for="(cert, index) in data.certifications" 
            :key="index"
            class="relative p-5 transition-all duration-300 bg-white border group rounded-xl border-neutral-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30"
          >
            <!-- Gradient overlay on hover -->
            <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-50/20 to-transparent group-hover:opacity-100 rounded-xl"></div>
            
            <div class="relative flex items-start gap-4">
              <!-- Certificate icon -->
              <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-lg bg-primary-100 group-hover:bg-primary-600">
                <svg class="w-6 h-6 transition-colors duration-300 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              
              <!-- Content -->
              <div class="flex-1 min-w-0">
                <h4 class="mb-1 font-semibold transition-colors duration-300 text-neutral-900 group-hover:text-primary-700">
                  {{ cert.name }}
                </h4>
                <p class="text-sm text-neutral-600">
                  {{ cert.issuer }}
                </p>
                <div class="inline-flex items-center gap-1.5 px-2 py-1 mt-2 text-xs font-medium border rounded-md bg-neutral-50 text-neutral-600 border-neutral-200">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ cert.date }}
                </div>
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