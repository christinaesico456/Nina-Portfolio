<template>
  <section id="contact" class="relative min-h-screen overflow-hidden bg-transparent">
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute inset-0 grid-lines"></div>
    </div>
    
    <!-- Floating Gradient Orb -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-300/20 via-primary-200/10 to-transparent rounded-full blur-3xl animate-float"></div>
    
    <div class="relative section-container">
      <div class="grid min-h-screen lg:grid-cols-2">
        <!-- Left Panel - Profile -->
        <div class="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-32">
          <!-- Status Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full shadow-sm bg-white/60 backdrop-blur-sm">
            <div class="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></div>
            <span class="text-sm font-medium tracking-wide uppercase text-primary-700">Available for opportunities</span>
          </div>

          <!-- Main Heading -->
          <h2 class="mb-3 text-3xl font-bold md:text-4xl text-neutral-900">
            Let's Connect
          </h2>

          <p class="max-w-lg mb-12 text-lg text-neutral-600">
            I'm actively seeking internship opportunities and would love to hear from you. 
            Feel free to reach out through any of the channels!
          </p>

          <!-- Profile Card -->
          <div class="relative p-1 mb-12 overflow-hidden transition-all duration-300 border bg-white/60 backdrop-blur-md rounded-2xl border-neutral-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30 group">
            <div class="p-6 md:p-8">
              <div class="flex items-center gap-6">
                <!-- Profile Image -->
                <div class="relative group">
                  <div class="absolute inset-0 transition-opacity bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50"></div>
                  <div class="relative w-20 h-20 overflow-hidden rounded-2xl ring-2 ring-primary-400/50">
                    <img 
                      :src="data.personal.profileImage || '/path/to/your/image.jpg'"
                      :alt="data.personal.name"
                      class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <!-- Info -->
                <div class="flex-1">
                  <h3 class="mb-1 text-xl font-bold md:text-2xl text-neutral-900">
                    {{ data.personal.name }}
                  </h3>
                  <p class="mb-3 text-base md:text-lg text-neutral-600">
                    {{ data.personal.title }}
                  </p>
                  <div class="flex items-center gap-2 text-xs text-neutral-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Response within 24h</span>
                  </div>
                </div>
              </div>

              <!-- Download Resume Button -->
              <a 
                :href="data.personal.resumeUrl || '/resume.pdf'"
                download
                class="flex items-center justify-center gap-3 px-6 py-4 mt-6 font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:shadow-primary-300/50 group"
              >
                <svg class="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="p-4 transition-all duration-300 border-l-4 rounded-lg border-primary-600 bg-white/60 backdrop-blur-md hover:shadow-md">
              <div class="text-xl font-bold text-neutral-900">5+</div>
              <div class="text-xs text-neutral-600">Platforms</div>
            </div>
            <div class="p-4 transition-all duration-300 border-l-4 rounded-lg border-primary-500 bg-white/60 backdrop-blur-md hover:shadow-md">
              <div class="text-xl font-bold text-neutral-900">24h</div>
              <div class="text-xs text-neutral-600">Response</div>
            </div>
            <div class="p-4 transition-all duration-300 border-l-4 rounded-lg border-primary-700 bg-white/60 backdrop-blur-md hover:shadow-md">
              <div class="text-xl font-bold text-neutral-900">100%</div>
              <div class="text-xs text-neutral-600">Active</div>
            </div>
          </div>
        </div>

        <!-- Right Panel - Contact Links -->
        <div class="flex flex-col justify-center px-8 py-20 bg-transparent lg:px-16 lg:py-32">
          <!-- Section Label -->
          <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full shadow-sm bg-white/60 backdrop-blur-sm">
            <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm font-medium tracking-wide uppercase text-primary-700">Contact channels</span>
          </div>

          <!-- Contact Links -->
          <div class="space-y-3">
            <!-- Email -->
            <a 
              :href="`mailto:${data.personal.email}`"
              class="flex items-center justify-between p-5 transition-all duration-300 border group border-neutral-200/60 hover:border-primary-300 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-primary-100/30"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 transition-colors rounded-lg bg-primary-100 group-hover:bg-primary-600">
                  <svg class="w-5 h-5 transition-colors text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium tracking-wider uppercase text-neutral-500">Email</div>
                  <div class="text-sm font-medium text-neutral-900">{{ data.personal.email }}</div>
                </div>
              </div>
              <svg class="w-5 h-5 transition-transform text-neutral-400 group-hover:translate-x-1 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a 
              :href="data.personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-5 transition-all duration-300 border group border-neutral-200/60 hover:border-blue-300 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-blue-100/30"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 transition-colors bg-blue-100 rounded-lg group-hover:bg-blue-600">
                  <svg class="w-5 h-5 text-blue-600 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium tracking-wider uppercase text-neutral-500">LinkedIn</div>
                  <div class="text-sm font-medium text-neutral-900">Professional Network</div>
                </div>
              </div>
              <svg class="w-5 h-5 transition-transform text-neutral-400 group-hover:translate-x-1 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- GitHub -->
            <a 
              :href="data.personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-5 transition-all duration-300 border group border-neutral-200/60 hover:border-neutral-400 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-neutral-100/30"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 transition-colors rounded-lg bg-neutral-100 group-hover:bg-neutral-900">
                  <svg class="w-5 h-5 transition-colors text-neutral-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium tracking-wider uppercase text-neutral-500">GitHub</div>
                  <div class="text-sm font-medium text-neutral-900">Code Repository</div>
                </div>
              </div>
              <svg class="w-5 h-5 transition-transform text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a 
              :href="data.personal.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-5 transition-all duration-300 border group border-neutral-200/60 hover:border-pink-300 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-pink-100/30"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 transition-colors rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-600 group-hover:to-pink-600">
                  <svg class="w-5 h-5 text-pink-600 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium tracking-wider uppercase text-neutral-500">Instagram</div>
                  <div class="text-sm font-medium text-neutral-900">Visual Portfolio</div>
                </div>
              </div>
              <svg class="w-5 h-5 transition-transform text-neutral-400 group-hover:translate-x-1 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- Facebook -->
            <a 
              :href="data.personal.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-5 transition-all duration-300 border group border-neutral-200/60 hover:border-blue-300 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-blue-100/30"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 transition-colors bg-blue-100 rounded-lg group-hover:bg-blue-500">
                  <svg class="w-5 h-5 text-blue-500 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium tracking-wider uppercase text-neutral-500">Facebook</div>
                  <div class="text-sm font-medium text-neutral-900">Social Network</div>
                </div>
              </div>
              <svg class="w-5 h-5 transition-transform text-neutral-400 group-hover:translate-x-1 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Footer Note -->
          <div class="p-5 mt-8 transition-all duration-300 border-l-4 rounded-lg border-primary-600 bg-white/60 backdrop-blur-md hover:shadow-md">
            <p class="text-sm leading-relaxed text-neutral-600">
              Open to collaborations, freelance projects, and full-time opportunities. 
              Let's create something extraordinary together.
            </p>
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
/* Grid Lines Background */
.grid-lines {
  background-image: 
    linear-gradient(to right, rgba(139, 92, 70, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 70, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-scroll 20s linear infinite;
}

@keyframes grid-scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(30px, 30px) rotate(-5deg);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

/* Pulse animation */
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