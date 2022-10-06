<template>
  <div class="py-2 relative">
    <span @click="dropdown = !dropdown" class="cursor-pointer text-white px-1">
      Mira Dokidis
      <font-awesome-icon
        class="hidden md:inline-block"
        icon="fa-solid fa-chevron-down ml-2"
    /></span>
    <div
      v-show="dropdown"
      id="dropdown"
      class="bg-white absolute w-40 right-0 top-12 z-10 border border-gray-200 rounded py-4"
    >
      <ul
        v-for="lst in dropLst"
        :key="lst.id"
        class="text-black text-sm flex flex-col space-y-3"
      >
        <div
          @click="$router.push(lst.path)"
          class="flex justify-between items-center border-b border-gray-200 p-2 cursor-pointer hover:bg-primary hover:text-white"
        >
          <li>{{ lst.name }}</li>
          <font-awesome-icon
            class="text-xs"
            icon="fa-solid fa-chevron-right ml-2"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      dropdown: false,
      dropLst: [
        { id: 1, name: "Settings", path: "" },
        { id: 1, name: "Help", path: "" },
        { id: 1, name: "Logout", path: "/" },
      ],
    };
  },
});
</script>
