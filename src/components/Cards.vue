<template>
  <div
    class="relative w-full rounded-3xl border border-gray-200 p-5 shadow-md"
    v-for="card in visibleCards"
    :key="card.id"
  >
    <div
      class="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-1.5 h-44 z-10 rounded"
    ></div>
    <!-- name & date -->
    <div class="flex justify-between">
      <h3 class="font-bold text-base md:text-2xl">
        {{ card.heading }}
      </h3>
      <p class="font-semibold text-xs md:text-sm">{{ card.date }}</p>
    </div>

    <div class="flex justify-between items-center md:space-x-20">
      <!-- details -->
      <div class="text-sm flex flex-col space-y-2 md:space-y-3">
        <p class="mt-3">{{ card.details }}</p>
        <p class="font-semibold">
          Instrument Name: <span>{{ card.instrumentName }}</span>
        </p>
        <p class="text-primary font-semibold">{{ card.BPM }} BPM</p>
      </div>
      <!-- ratings -->
      <div
        class="flex flex-col justify-end items-center mt-24 md:mt-0 space-y-1"
      >
        <div class="mx-auto rounded-lg text-white text-center">
          <div
            :class="[parseInt(card.rating) > 5 ? 'bg-green-400' : 'bg-red-500']"
            class="h-10 w-10 flex items-center justify-center mx-auto rounded-lg text-white"
          >
            {{ card.rating }}
          </div>
        </div>
        <p class="hidden md:block text-sm">Rating</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    visibleCards: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
