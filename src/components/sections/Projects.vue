<template>
  <section id="projects" class="bg-white section-container">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl text-neutral-900">
          Featured Projects
        </h2>
        <div class="w-20 h-1 mx-auto mb-4 rounded-full bg-primary-600"></div>
        <p class="max-w-2xl mx-auto text-neutral-600">
          Real projects that demonstrate my ability to solve problems, write clean code, and learn new technologies.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="project in featuredProjects" 
          :key="project.id"
          class="transition-all duration-300 card group hover:shadow-xl"
        >
          <!-- Project Badge -->
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700">
              Featured
            </span>
            <div class="flex items-center space-x-2">
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors text-neutral-400 hover:text-primary-600"
                title="View Demo"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <a 
                :href="project.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors text-neutral-400 hover:text-neutral-900"
                title="View on GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Title -->
          <h3 class="mb-3 text-xl font-bold transition-colors text-neutral-900 group-hover:text-primary-600">
            {{ project.title }}
          </h3>

          <!-- Project Description -->
          <p class="mb-4 leading-relaxed text-neutral-600">
            {{ project.description }}
          </p>

          <!-- Problem Solved -->
          <div class="p-3 mb-4 border-l-4 rounded-lg bg-neutral-50 border-primary-600">
            <p class="text-sm text-neutral-700">
              <span class="font-semibold text-neutral-900">Problem Solved:</span> 
              {{ project.problem }}
            </p>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div v-if="otherProjects.length > 0" class="mt-16">
        <h3 class="mb-8 text-2xl font-bold text-center text-neutral-900">
          Other Projects
        </h3>
        <div class="grid gap-6 md:grid-cols-2">
          <div 
            v-for="project in otherProjects" 
            :key="project.id"
            class="p-6 transition-all duration-300 rounded-lg bg-neutral-50 hover:bg-white hover:shadow-md"
          >
            <div class="flex items-start justify-between mb-3">
              <h4 class="text-lg font-semibold text-neutral-900">
                {{ project.title }}
              </h4>
              <a 
                :href="project.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex-shrink-0 transition-colors text-neutral-400 hover:text-neutral-900"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p class="mb-3 text-sm text-neutral-600">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-2 py-1 text-xs bg-white rounded text-neutral-600"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <p class="mb-6 text-neutral-600">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a 
          :href="data.personal.github" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block btn-primary"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData

const featuredProjects = computed(() => 
  data.projects.filter(p => p.featured)
)

const otherProjects = computed(() => 
  data.projects.filter(p => !p.featured)
)
</script>