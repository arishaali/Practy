<template>
  <div v-if="TotalPages() > 0" class="font-semibold flex space-x-1">
    <button
      :class="this.currentPage == 1 ? 'text-gray-400' : 'text-black'"
      @click="updatePage(currentPage - 1)"
      class="cursor-pointer border border-gray-200 rounded-lg py-2 px-3 font-semibold"
    >
      &lt;
    </button>
    <!-- {{ currentPage + 1 }} of {{ TotalPages()}}  -->
    <div v-for="page in TotalPages()" :key="page">
      <span @click.prevent="updatePage(page)">
        <div
          :class="{ 'bg-primary text-white': currentPage === page }"
          class="border border-gray-200 rounded-lg py-2 px-3 cursor-pointer"
        >
          {{ page }}
          <!-- <span class="transform -rotate-45">{{ page }}</span> -->
        </div>
      </span>
    </div>
    <!-- <span class="cursor-pointer border border-gray-200 rounded-lg py-2 px-3">{{ currentPage + 1 }} of {{ TotalPages()}}</span> -->
    <button
      :class="
        this.currentPage == this.TotalPages() ? 'text-gray-400' : 'text-black'
      "
      @click="updatePage(currentPage + 1)"
      class="cursor-pointer border border-gray-200 rounded-lg py-2 px-3 font-semibold"
    >
      &gt;
    </button>
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
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    updatePage(pageNo: number) {
      this.$emit("page:update", pageNo);
    },
    TotalPages() {
      return Math.ceil(this.cards.length / this.pageSize);
    },
  },
});
</script>
