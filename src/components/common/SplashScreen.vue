<template>
  <Transition name="splash-fade" @after-leave="$emit('done')">
    <div
      v-if="visible"
      class="fixed inset-0 flex flex-col items-center justify-center bg-[#faf8f5]"
      style="z-index: 100"
    >
      <!-- Subtle corner accents -->
      <div class="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#f0e8df] to-transparent opacity-60 pointer-events-none" />
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#f0e8df] to-transparent opacity-60 pointer-events-none" />

      <!-- Logo mark -->
      <div class="mb-12 opacity-0 animate-fade-up" style="animation-delay:0.2s; animation-fill-mode:forwards">
        <div class="w-14 h-14 rounded-xl border-2 border-[#c8956a] flex items-center justify-center">
          <span class="font-serif text-xl font-bold text-[#a86d42]">N</span>
        </div>
      </div>

      <!-- Name -->
      <div class="text-center opacity-0 animate-fade-up" style="animation-delay:0.5s; animation-fill-mode:forwards">
        <h1 class="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-none"
          style="font-family:'Playfair Display',serif">
          Christina M. Esico
        </h1>
      </div>

      <!-- Divider line -->
      <div class="my-6 opacity-0 animate-fade-up" style="animation-delay:0.8s; animation-fill-mode:forwards">
        <div class="w-16 h-px bg-[#c8956a] mx-auto" />
      </div>

      <!-- Animated subtitle -->
      <div class="opacity-0 animate-fade-up" style="animation-delay:1s; animation-fill-mode:forwards">
        <p class="text-neutral-500 text-base md:text-lg tracking-widest uppercase"
          style="font-family:'DM Sans',sans-serif; letter-spacing:0.18em">
          <span
            v-for="(char, i) in subtitleChars"
            :key="i"
            class="inline-block opacity-0 animate-char"
            :style="{ animationDelay: `${1.2 + i * 0.045}s`, animationFillMode: 'forwards' }"
          >{{ char === ' ' ? ' ' : char }}</span>
        </p>
      </div>

      <!-- CTA button -->
      <div class="mt-16 opacity-0 animate-fade-up" style="animation-delay:2.4s; animation-fill-mode:forwards">
        <button
          @click="leave"
          class="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-neutral-300
            text-neutral-700 text-sm tracking-widest uppercase transition-all duration-400
            hover:border-[#a86d42] hover:text-[#8c5835] hover:shadow-[0_4px_24px_rgba(168,109,66,0.15)]"
          style="font-family:'DM Sans',sans-serif; letter-spacing:0.12em"
        >
          <span>View Portfolio</span>
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>

      <!-- Scroll hint -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style="animation-delay:2.8s; animation-fill-mode:forwards">
        <div class="flex flex-col items-center gap-2">
          <div class="w-px h-8 bg-neutral-300 animate-pulse" />
          <span class="text-[10px] tracking-widest text-neutral-400 uppercase"
            style="font-family:'DM Sans',sans-serif">scroll</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['done'])

const subtitle = 'Aspiring Software Engineer'
const subtitleChars = computed(() => subtitle.split(''))

const visible = ref(true)

function leave() {
  visible.value = false
}
</script>

<style scoped>
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes char-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-char {
  animation: char-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.splash-fade-leave-active {
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.splash-fade-leave-to {
  opacity: 0;
  transform: translateY(-24px);
}
</style>
