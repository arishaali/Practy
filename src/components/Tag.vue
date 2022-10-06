<template>
  <span
    :selected="selected"
    :class="[
      selected === true
        ? 'bg-yellow text-white'
        : 'bg-white border border-gray-300 text-black',
    ]"
    class="px-6 py-2 rounded-full text-sm flex align-center w-max cursor-pointer"
  >
    {{ name }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
    selected: {
      type: Boolean,
    },
  },
});
</script>
