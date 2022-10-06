<template>
  <a href=""
    ><img
      :src="src"
      :alt="alt"
      class="bg-white border border-blue-400 p-3 rounded-full drop-shadow-2xl"
  /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    alt: {
      type: String,
    },
    src: {
      type: String,
    },
  },
});
</script>
