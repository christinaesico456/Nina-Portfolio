<template>
  <section id="home" class="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 rounded-full w-96 h-96 bg-primary-200 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-primary-300 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute rounded-full top-1/2 left-1/2 w-96 h-96 bg-primary-100 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="relative z-10 text-center section-container animate-fadeInUp">
      <!-- Greeting Badge -->
      <div class="inline-flex items-center px-4 py-2 mb-8 space-x-2 bg-white rounded-full shadow-sm animate-fadeIn" style="animation-delay: 0.2s;">
        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span class="text-sm text-neutral-600">Available for OJT/Internship opportunities</span>
      </div>

      <!-- Main Heading -->
      <h1 class="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-neutral-900 animate-slideUp" style="animation-delay: 0.4s;">
        Hi, I'm <span class="text-primary-600">{{ data.personal.name }}</span>
      </h1>

      <!-- Role -->
      <p class="mb-4 text-xl font-medium md:text-2xl text-neutral-600 animate-slideUp" style="animation-delay: 0.6s;">
        {{ data.personal.role }}
      </p>

      <!-- Tagline -->
      <p class="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-neutral-500 animate-slideUp" style="animation-delay: 0.8s;">
        {{ data.personal.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row animate-fadeIn" style="animation-delay: 1s;">
        <a href="#projects" class="w-full btn-primary sm:w-auto">
          View My Projects
        </a>
        <a href="#contact" class="w-full btn-secondary sm:w-auto">
          Get In Touch
        </a>
      </div>

      <!-- Social Links -->
      <div class="flex items-center justify-center space-x-6 animate-fadeIn" style="animation-delay: 1.2s;">
        <a 
          :href="data.personal.github" 
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors text-neutral-600 hover:text-neutral-900"
          aria-label="GitHub"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        
        <a 
          :href="data.personal.linkedin" 
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors text-neutral-600 hover:text-neutral-900"
          aria-label="LinkedIn"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        <a 
          :href="`mailto:${data.personal.email}`"
          class="transition-colors text-neutral-600 hover:text-neutral-900"
          aria-label="Email"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute transform -translate-x-1/2 bottom-1 left-1/2 animate-bounce">
        <a href="#about" class="transition-colors text-neutral-400 hover:text-neutral-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData
</script>

<style scoped>
/* Fade in and slide up - Main container */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
  animation-fill-mode: both;
}

/* Fade in only */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
  animation-fill-mode: both;
}

/* Slide up from bottom */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out;
  animation-fill-mode: both;
}

/* Bounce for scroll indicator */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

/* Pulse for green dot */
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

/* Blob animation for background orbs */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Grid pattern background */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>