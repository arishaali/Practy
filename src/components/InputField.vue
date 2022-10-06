<template>
  <div class="mt-8 md:mt-12">
    <div class="flex items-center space-x-1">
      <img :src="src" />
      <label for="email" class="text-sm text-gray-600"> {{ label }}</label>
    </div>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="border border-gray-300 text-sm rounded-lg block w-full p-3 mt-2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    src: {
      type: String,
    },
    label: {
      type: String,
    },
  },
});
</script>
