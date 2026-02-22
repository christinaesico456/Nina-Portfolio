<template>
  <section id="skills" class="relative bg-[#faf8f5] overflow-hidden">


    <div class="max-w-6xl mx-auto section-container">


      <!-- Header -->
      <div class="flex flex-col gap-4 mb-16 md:flex-row md:items-end md:justify-between reveal">
        <div>
          <span class="inline-flex mb-5 section-pill">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            My Toolkit
          </span>
          <h2 class="text-4xl font-black leading-tight md:text-5xl text-neutral-900">
            Technical <span class="italic text-[#a86d42]">Stack</span>
          </h2>
        </div>
        <p class="max-w-xs pb-1 text-sm text-neutral-400 md:text-right" style="font-family:'DM Sans',sans-serif">
          {{ totalSkills }}+ technologies across {{ Object.keys(skillsByCategory).length }} categories
        </p>
      </div>


      <!-- Bento Grid -->
      <div class="grid grid-cols-12 gap-4 reveal reveal-delay-1">


        <!-- Category cards -->
        <div
          v-for="(catEntry, ci) in categoryEntries"
          :key="catEntry.key"
          class="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white
            hover:border-[#dab996] hover:shadow-[0_4px_24px_rgba(168,109,66,0.08)]
            transition-all duration-500"
          :class="bentoClass(ci)"
        >
          <!-- Category label -->
          <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-50">
            <span class="text-xs font-bold tracking-[0.18em] uppercase text-[#a86d42]"
              style="font-family:'DM Sans',sans-serif">
              {{ catEntry.key }}
            </span>
            <span class="text-xs text-neutral-300" style="font-family:'DM Sans',sans-serif">
              {{ catEntry.skills.length }}
            </span>
          </div>


          <!-- Skills -->
          <div class="flex flex-wrap gap-2 p-5">
            <div
              v-for="skill in catEntry.skills"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-100
                bg-[#faf8f5] hover:bg-white hover:border-[#e9d3bc] hover:shadow-sm
                transition-all duration-200 cursor-default group/skill"
            >
              <img :src="skill.logo" :alt="skill.name"
                class="object-contain w-4 h-4 transition-opacity opacity-60 group-hover/skill:opacity-100"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
              <span class="text-xs font-medium transition-colors text-neutral-600 group-hover/skill:text-neutral-900 whitespace-nowrap" style="font-family:'DM Sans',sans-serif">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>


        <!-- Stats card -->
        <div class="col-span-12 md:col-span-3 rounded-2xl border border-neutral-100 bg-white p-6
          flex flex-col justify-between min-h-[140px]
          hover:border-[#dab996] transition-colors duration-300">
          <span class="text-xs font-bold tracking-[0.18em] uppercase text-neutral-300"
            style="font-family:'DM Sans',sans-serif">Total Stack</span>
          <div>
            <div class="text-6xl font-black leading-none text-neutral-900">
              {{ totalSkills }}<span class="text-[#a86d42]">+</span>
            </div>
            <p class="mt-2 text-xs text-neutral-400" style="font-family:'DM Sans',sans-serif">technologies</p>
          </div>
        </div>


        <!-- Currently learning card -->
        <div class="col-span-12 md:col-span-5 rounded-2xl border border-neutral-100 bg-white p-6
          flex flex-col justify-between min-h-[140px]
          hover:border-[#dab996] transition-colors duration-300">
          <span class="text-xs font-bold tracking-[0.18em] uppercase text-neutral-300"
            style="font-family:'DM Sans',sans-serif">Currently Exploring</span>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="item in ['Advanced Vue.js', 'Full-stack Dev', 'AI & ML', 'System Design']"
              :key="item"
              class="px-3 py-1.5 rounded-full border border-neutral-100 bg-[#faf8f5]
                text-xs font-medium text-neutral-600"
              style="font-family:'DM Sans',sans-serif">
              {{ item }}
            </span>
          </div>
        </div>


        <!-- Always learning card -->
        <div class="col-span-12 md:col-span-4 rounded-2xl border border-[#e9d3bc] bg-[#faf5f0] p-6
          flex flex-col justify-between min-h-[140px]
          hover:border-[#a86d42] hover:shadow-[0_4px_20px_rgba(168,109,66,0.08)] transition-all duration-300">
          <span class="text-xs font-bold tracking-[0.18em] uppercase text-[#a86d42]"
            style="font-family:'DM Sans',sans-serif">Mindset</span>
          <div>
            <h3 class="text-xl font-black leading-tight text-neutral-900">Always<br/>Learning</h3>
            <p class="mt-2 text-xs text-neutral-500" style="font-family:'DM Sans',sans-serif">
              Constantly growing, one commit at a time.
            </p>
          </div>
        </div>


      </div>


      <!-- Marquee strip -->
      <div class="mt-8 overflow-hidden reveal">
        <div class="flex gap-4 marquee-track">
          <div
            v-for="skill in marqueeSkills"
            :key="skill.name + '-m'"
            class="flex items-center flex-shrink-0 gap-2 px-4 py-2 text-xs font-medium bg-white border rounded-full border-neutral-200 text-neutral-400 whitespace-nowrap"
            style="font-family:'DM Sans',sans-serif"
          >
            <img :src="skill.logo" :alt="skill.name"
              class="w-3.5 h-3.5 object-contain opacity-50" loading="lazy"
              @error="$event.target.style.display='none'" />
            {{ skill.name }}
          </div>
          <div
            v-for="skill in marqueeSkills"
            :key="skill.name + '-m2'"
            class="flex items-center flex-shrink-0 gap-2 px-4 py-2 text-xs font-medium bg-white border rounded-full border-neutral-200 text-neutral-400 whitespace-nowrap"
            style="font-family:'DM Sans',sans-serif"
          >
            <img :src="skill.logo" :alt="skill.name"
              class="w-3.5 h-3.5 object-contain opacity-50" loading="lazy"
              @error="$event.target.style.display='none'" />
            {{ skill.name }}
          </div>
        </div>
      </div>


    </div>
  </section>
</template>


<script setup>
import { computed, onMounted } from 'vue'
import { portfolioData } from '../../data/portfolio.js'


const data = portfolioData


const skillLogos = {
  // Programming Languages
  'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'SQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'HTML':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  // Frameworks & Libraries
  'Vue.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'React':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Django':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Flask':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Vite':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  // Developer Tools
  'Git & GitHub':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Visual Studio':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
  'MySQL Workbench':  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Firebase':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Vercel':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'MS Access':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  'Railway':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg',
  // Multimedia Tools
  'Figma':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Canva':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  'Capcut':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capcut/capcut-original.svg',
}


const fallback = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'


const bentoSpans = [
  'col-span-12 md:col-span-8', // Programming Languages — wide
  'col-span-12 md:col-span-4', // Frameworks — narrow
  'col-span-12 md:col-span-7', // Developer Tools — wide
  'col-span-12 md:col-span-5', // Multimedia — narrow
]
const bentoClass = (i) => bentoSpans[i] ?? 'col-span-12 md:col-span-6'


const skillsByCategory = computed(() => {
  const result = {}
  Object.entries(data.skills).forEach(([cat, list]) => {
    result[cat] = list.map(s => {
      const name = typeof s === 'string' ? s : s.name
      return { name, logo: skillLogos[name] || fallback }
    })
  })
  return result
})


const categoryEntries = computed(() =>
  Object.entries(skillsByCategory.value).map(([key, skills]) => ({ key, skills }))
)


const totalSkills = computed(() => Object.values(data.skills).flat().length)
const marqueeSkills = computed(() => categoryEntries.value.flatMap(c => c.skills))


onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('#skills .reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('#skills .reveal').forEach(el => observer.observe(el))
})
</script>


<style scoped>
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 30s linear infinite;
  width: max-content;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
