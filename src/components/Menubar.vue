<template>
  <div class="md:hidden flex items-center relative">
    <div
      ref="menu"
      @click="menubar = !menubar"
      class="rounded-lg py-2 px-3 bg-primary-rgba border border-primary-rgba flex items-center cursor-pointer"
    >
      <font-awesome-icon icon="fa-solid fa-bars" class="text-white text-xl" />
    </div>
    <div
      class="flex items-center fixed z-10 overflow-hidden bg-black bg-opacity-25 h-screen w-screen top-0 left-0"
      id="menubar"
      v-show="menubar"
    >
      <div
        class="absolute top-0 -left-0 bg-primary z-20 h-screen w-72 p-4 border-r-2 border-white"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center text-sm">
            <img
              src="..\assets\User.png"
              alt="user image"
              class="rounded-xl border border-white"
            />
            <DropDown />
          </div>
          <div @click="menubar = !menubar">
            <font-awesome-icon
              icon="fa-regular fa-circle-xmark"
              class="text-white text-2xl"
            />
          </div>
        </div>
        <div class="py-8 text-white text-lg px-2">
          <ul class="flex flex-col space-y-6">
            <li class="py-1">Dashboard</li>
            <li class="py-1">Courses</li>
            <li class="py-1">Plans</li>
            <li class="py-1">About Us</li>
            <li class="py-1">Settings</li>
            <li class="py-1">Help</li>
            <li class="py-1">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "@/components/DropDown.vue";
export default defineComponent({
  components: {
    DropDown,
  },
  data() {
    return {
      menubar: false,
    };
  },
});
</script>
