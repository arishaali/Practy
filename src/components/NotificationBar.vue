<template>
  <div
    v-if="notification"
    class="w-screen h-screen top-0 right-0 md:h-60 md:w-60 absolute md:top-10 md:right-6 z-20 border border-gray-200 bg-white rounded py-3 overflow-y-auto"
  >
    <div
      class="flex justify-between items-center bg-primary md:bg-white text-white py-3 px-4 md:py-0 md:px-0"
    >
      <font-awesome-icon
        @click="$router.go('/dashboard')"
        icon="fa-solid fa-chevron-left"
        class="md:hidden"
      />
      <h3 class="md:text-black md:font-semibold text-lg md:text-base md:px-3">
        Notifications
      </h3>
    </div>
    <hr class="bg-primary my-2" />
    <ul class="px-2">
      <div class="px-3 md:px-1">
        <a
          href="#"
          class="flex items-center space-x-2 py-3 hover:bg-gray-100 -mx-2"
        >
          <font-awesome-icon
            icon="fa-regular fa-circle-check"
            class="text-primary text-2xl md:text-base"
          />
          <p class="text-gray-600 text-base md:text-sm">
            <span class="font-bold" href="#">Account</span> created successfully
            . 3h
          </p>
        </a>
      </div>
      <div class="px-3 md:px-1">
        <a
          href="#"
          class="flex items-center space-x-2 py-3 hover:bg-gray-100 -mx-2"
        >
          <font-awesome-icon
            icon="fa-regular fa-circle-check"
            class="text-primary text-2xl md:text-base"
          />
          <p class="text-gray-600 text-base md:text-sm">
            <span class="font-bold" href="#">Account</span> created successfully
            . 3h
          </p>
        </a>
      </div>
      <div class="px-3 md:px-1">
        <a
          href="#"
          class="flex items-center space-x-2 py-3 hover:bg-gray-100 -mx-2"
        >
          <font-awesome-icon
            icon="fa-regular fa-circle-check"
            class="text-primary text-2xl md:text-base"
          />
          <p class="text-gray-600 text-base md:text-sm">
            <span class="font-bold" href="#">Account</span> created successfully
            . 3h
          </p>
        </a>
      </div>
      <div class="px-3 md:px-1">
        <a
          href="#"
          class="flex items-center space-x-2 py-3 hover:bg-gray-100 -mx-2"
        >
          <font-awesome-icon
            icon="fa-regular fa-circle-check"
            class="text-primary text-2xl md:text-base"
          />
          <p class="text-gray-600 text-base md:text-sm">
            <span class="font-bold" href="#">Account</span> created successfully
            . 3h
          </p>
        </a>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    notification: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
