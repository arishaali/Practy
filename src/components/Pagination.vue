<template>
  <div v-if="TotalPages() > 0" class="font-semibold flex space-x-1">
    <button
      id="prevButton"
      :class="this.currentPage == 1 ? 'text-gray-400' : 'text-black'"
      @click="PrevPage"
      class="cursor-pointer border border-gray-200 rounded-lg py-2 px-3 font-semibold"
    >
      &lt;
    </button>
    <div v-for="page in TotalPages()" :key="page">
      <span @click.prevent="updatePage(page)">
        <div
          :class="{ 'bg-primary text-white': currentPage === page }"
          class="border border-gray-200 rounded-lg py-2 px-3 cursor-pointer"
        >
          {{ page }}
        </div>
      </span>
    </div>
    <button
      id="nextButton"
      :class="
        this.currentPage == this.TotalPages() ? 'text-gray-400' : 'text-black'
      "
      @click="NextPage"
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
    PrevPage() {
      return this.updatePage(this.currentPage - 1);
    },
    NextPage() {
      return this.updatePage(this.currentPage + 1);
    },
  },
});
</script>
