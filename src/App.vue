<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
import Projects from './components/sections/Projects.vue'
import Education from './components/sections/Education.vue'
import Contact from './components/sections/Contact.vue'
</script>

