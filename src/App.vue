<template>
  <div id="app">
    <SplashScreen v-if="!portfolioReady" @done="portfolioReady = true" />
    <Transition name="portfolio-enter">
      <div v-if="portfolioReady">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
import Projects from './components/sections/Projects.vue'
import Education from './components/sections/Education.vue'
import Contact from './components/sections/Contact.vue'
import SplashScreen from './components/common/SplashScreen.vue'

const portfolioReady = ref(false)
</script>

<style>
.portfolio-enter-enter-active {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.portfolio-enter-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
</style>

