<template>
  <section id="skills" class="relative overflow-hidden section-container bg-gradient-to-br from-white via-primary-50/30 to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-primary-200/40 mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"></div>
      <div class="absolute rounded-full bottom-10 right-1/4 w-80 h-80 bg-primary-300/40 mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-3000"></div>
      
      <!-- Minimal dot pattern background -->
      <div class="absolute inset-0 opacity-[0.015]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 32px 32px;"></div>
    </div>
    
    <div class="relative max-w-6xl mx-auto">
      <!-- Section Header - Redesigned -->
      <div class="mb-16 text-center">
        <div class="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full shadow-sm bg-white/60 backdrop-blur-sm">
          <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          <span class="text-sm font-medium tracking-wide uppercase text-primary-700">My toolkit</span>
        </div>
        <h2 class="mb-3 text-3xl font-bold md:text-4xl text-neutral-900">
          Technical Stack
        </h2>
        <p class="text-lg text-neutral-600">
          Technologies I work with to build modern applications
        </p>
      </div>

      <!-- Skills Grid - Original Layout -->
      <div class="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
        <div 
          v-for="skill in allSkills" 
          :key="skill.name"
          class="group"
        >
          <div class="relative p-4 transition-all duration-300 border bg-white/60 backdrop-blur-md aspect-square rounded-2xl border-neutral-200/80 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30 hover:-translate-y-1">
            <!-- Skill icon -->
            <div class="relative flex items-center justify-center h-full">
              <div class="relative w-10 h-10 transition-transform duration-300 md:w-12 md:h-12 group-hover:scale-110">
                <img 
                  :src="skill.logo" 
                  :alt="skill.name"
                  class="object-contain w-full h-full transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
                <!-- Glow effect -->
                <div class="absolute transition-opacity duration-300 rounded-full opacity-0 -inset-3 bg-primary-400/20 blur-xl group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
          <!-- Skill name below card -->
          <p class="mt-2 text-[10px] md:text-xs font-medium text-center transition-colors duration-300 text-neutral-500 group-hover:text-neutral-900">
            {{ skill.name }}
          </p>
        </div>
      </div>

      <!-- Skills Summary Card -->
      <div class="max-w-4xl p-8 mx-auto mt-16 border shadow-lg rounded-2xl bg-white/60 backdrop-blur-md border-primary-200/40">
        <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div class="text-center md:text-left">
            <h3 class="mb-2 text-xl font-semibold text-neutral-900">Always Learning</h3>
            <p class="text-neutral-600">Constantly expanding my tech stack and exploring new technologies</p>
          </div>
          <div class="flex gap-4">
            <div class="px-6 py-4 text-center bg-white border rounded-xl border-neutral-200">
              <div class="text-2xl font-bold text-primary-600">{{ allSkills.length }}+</div>
              <div class="text-xs font-medium text-neutral-600">Technologies</div>
            </div>
            <div class="px-6 py-4 text-center bg-white border rounded-xl border-neutral-200">
              <div class="text-2xl font-bold text-primary-600">∞</div>
              <div class="text-xs font-medium text-neutral-600">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioData } from '../../data/portfolio.js'

const data = portfolioData

// Skill logos mapping with CDN URLs
const skillLogos = {
  // Programming Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  
  // Frameworks & Libraries
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  
  // Tools & Technologies
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
}

// Flatten all skills into one array with logos
const allSkills = computed(() => {
  const skills = []
  
  Object.entries(data.skills).forEach(([category, skillList]) => {
    skillList.forEach(skill => {
      // Handle both string and object format
      const skillName = typeof skill === 'string' ? skill : skill.name
      
      skills.push({
        name: skillName,
        logo: skillLogos[skillName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
        category: category
      })
    })
  })
  
  return skills
})
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
</style>