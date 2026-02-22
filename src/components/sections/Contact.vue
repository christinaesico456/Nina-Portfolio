<template>
  <section id="contact" class="relative overflow-hidden bg-white">
    <!-- Floating orb -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(188,132,85,0.07) 0%, transparent 70%);">
    </div>


    <div class="max-w-5xl mx-auto section-container">
      <div class="grid items-start gap-16 lg:grid-cols-2">


        <!-- Left: Info -->
        <div>
          <div class="reveal">
            <span class="inline-flex mb-5 section-pill">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for opportunities
            </span>
            <h2 class="mb-4 text-4xl font-black leading-tight md:text-5xl text-neutral-900">
              Let's <span class="italic text-[#a86d42]">Connect</span>
            </h2>
            <p class="leading-relaxed text-neutral-500" style="font-family:'DM Sans',sans-serif">
              I'm actively seeking internship opportunities and would love to hear from you.
              Reach out through any channel below!
            </p>
          </div>


          <!-- Profile card -->
          <div class="reveal reveal-delay-1 mt-8 p-6 rounded-2xl border border-neutral-100 bg-[#faf8f5]
            hover:border-[#dab996] hover:shadow-[0_4px_24px_rgba(168,109,66,0.1)] transition-all duration-300">
            <div class="flex items-center gap-5">
              <div class="relative">
                <div class="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#dab996]/40">
                  <img
                    :src="data.personal.profileImage || '/imageME.jpeg'"
                    :alt="data.personal.name"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="absolute w-4 h-4 border-2 border-white rounded-full -bottom-1 -right-1 bg-emerald-400"></div>
              </div>
              <div>
                <h3 class="font-bold text-neutral-900">{{ data.personal.name }}</h3>
                <p class="text-sm text-neutral-500" style="font-family:'DM Sans',sans-serif">{{ data.personal.role }}</p>
                <p class="text-xs text-neutral-400 mt-0.5" style="font-family:'DM Sans',sans-serif">Response within 24h</p>
              </div>
            </div>


            <a
              :href="data.personal.resumeUrl || '/Esico_Resume.pdf'"
              download
              class="mt-5 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl
                bg-neutral-900 text-white text-sm font-medium
                hover:bg-[#8c5835] transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20"
              style="font-family:'DM Sans',sans-serif"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </a>
          </div>


          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-3 mt-4 reveal reveal-delay-2">
            <div class="text-center p-4 rounded-xl border border-neutral-100 bg-[#faf8f5] hover:border-[#dab996] transition-colors duration-200">
              <div class="text-xl font-black text-[#a86d42]">5+</div>
              <div class="text-[10px] text-neutral-500 mt-0.5" style="font-family:'DM Sans',sans-serif">Platforms</div>
            </div>
            <div class="text-center p-4 rounded-xl border border-neutral-100 bg-[#faf8f5] hover:border-[#dab996] transition-colors duration-200">
              <div class="text-xl font-black text-[#a86d42]">24h</div>
              <div class="text-[10px] text-neutral-500 mt-0.5" style="font-family:'DM Sans',sans-serif">Response</div>
            </div>
            <div class="text-center p-4 rounded-xl border border-neutral-100 bg-[#faf8f5] hover:border-[#dab996] transition-colors duration-200">
              <div class="text-xl font-black text-[#a86d42]">100%</div>
              <div class="text-[10px] text-neutral-500 mt-0.5" style="font-family:'DM Sans',sans-serif">Active</div>
            </div>
          </div>
        </div>


        <!-- Right: Contact links -->
        <div class="space-y-3">
          <div
            v-for="(link, i) in contactLinks"
            :key="link.label"
            class="reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <a
              :href="link.href"
              :target="link.target || '_self'"
              :rel="link.target ? 'noopener noreferrer' : undefined"
              class="flex items-center justify-between p-5 transition-all duration-300 bg-white border group rounded-xl border-neutral-100 hover:shadow-lg"
              :class="[link.hoverBorder, link.hoverShadow]"
            >
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center flex-shrink-0 transition-colors duration-300 w-11 h-11 rounded-xl"
                  :class="[link.iconBg, link.iconBgHover]">
                  <component :is="link.icon" class="w-5 h-5 transition-colors duration-300" :class="[link.iconColor, link.iconColorHover]" />
                </div>
                <div>
                  <div class="text-[10px] font-semibold tracking-widest uppercase text-neutral-400"
                    style="font-family:'DM Sans',sans-serif">{{ link.platform }}</div>
                  <div class="text-sm font-medium text-neutral-900" style="font-family:'DM Sans',sans-serif">{{ link.label }}</div>
                </div>
              </div>
              <svg class="w-4 h-4 transition-transform duration-200 text-neutral-300 group-hover:translate-x-1"
                :class="link.arrowColor"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>


          <!-- Footer note -->
          <div class="reveal reveal-delay-5 mt-4 p-5 rounded-xl border-l-4 border-[#a86d42] bg-[#faf5f0]">
            <p class="text-sm leading-relaxed text-neutral-600" style="font-family:'DM Sans',sans-serif">
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
import { computed, onMounted, h } from 'vue'
import { portfolioData } from '../../data/portfolio.js'


const data = portfolioData


// Icon components inline
const EmailIcon = { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]) }


const LinkedInIcon = { render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
]) }


const GitHubIcon = { render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' })
]) }


const InstagramIcon = { render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
]) }


const FacebookIcon = { render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })
]) }


const contactLinks = computed(() => [
  {
    platform: 'Email',
    label: data.personal.email,
    href: `mailto:${data.personal.email}`,
    icon: EmailIcon,
    iconBg: 'bg-[#f4e9de]',
    iconBgHover: 'group-hover:bg-[#a86d42]',
    iconColor: 'text-[#a86d42]',
    iconColorHover: 'group-hover:text-white',
    hoverBorder: 'hover:border-[#dab996]',
    hoverShadow: 'hover:shadow-[#dab996]/20',
    arrowColor: 'group-hover:text-[#a86d42]',
  },
  {
    platform: 'LinkedIn',
    label: 'Professional Network',
    href: data.personal.linkedin,
    target: '_blank',
    icon: LinkedInIcon,
    iconBg: 'bg-blue-50',
    iconBgHover: 'group-hover:bg-blue-600',
    iconColor: 'text-blue-600',
    iconColorHover: 'group-hover:text-white',
    hoverBorder: 'hover:border-blue-200',
    hoverShadow: 'hover:shadow-blue-100/40',
    arrowColor: 'group-hover:text-blue-600',
  },
  {
    platform: 'GitHub',
    label: 'Code Repository',
    href: data.personal.github,
    target: '_blank',
    icon: GitHubIcon,
    iconBg: 'bg-neutral-100',
    iconBgHover: 'group-hover:bg-neutral-900',
    iconColor: 'text-neutral-900',
    iconColorHover: 'group-hover:text-white',
    hoverBorder: 'hover:border-neutral-300',
    hoverShadow: 'hover:shadow-neutral-100/50',
    arrowColor: 'group-hover:text-neutral-900',
  },
  {
    platform: 'Instagram',
    label: 'Visual Portfolio',
    href: data.personal.instagram,
    target: '_blank',
    icon: InstagramIcon,
    iconBg: 'bg-pink-50',
    iconBgHover: 'group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600',
    iconColor: 'text-pink-500',
    iconColorHover: 'group-hover:text-white',
    hoverBorder: 'hover:border-pink-200',
    hoverShadow: 'hover:shadow-pink-100/40',
    arrowColor: 'group-hover:text-pink-500',
  },
  {
    platform: 'Facebook',
    label: 'Social Network',
    href: data.personal.facebook,
    target: '_blank',
    icon: FacebookIcon,
    iconBg: 'bg-blue-50',
    iconBgHover: 'group-hover:bg-blue-500',
    iconColor: 'text-blue-500',
    iconColorHover: 'group-hover:text-white',
    hoverBorder: 'hover:border-blue-200',
    hoverShadow: 'hover:shadow-blue-100/40',
    arrowColor: 'group-hover:text-blue-500',
  },
])


onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('#contact .reveal').forEach(el => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('#contact .reveal').forEach(el => observer.observe(el))
})
</script>


