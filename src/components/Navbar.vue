<template>
  <nav class="bg-primary rounded-b-3xl sticky top-0 z-30">
    <div class="mx-auto px-4 md:px-12">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <!-- menubar (mobile) -->

          <Menubar />

          <div class="flex md:space-x-8 lg:space-x-12">
            <!-- logo -->
            <div>
              <a href="#" class="flex items-center py-5 md:px-2 text-white">
                <span class="font-bold text-2xl">Logo</span>
              </a>
            </div>

            <!-- primary nav -->
            <div
              class="hidden md:flex text-white text-sm items-center md:space-x-6 lg:space-x-10"
            >
              <a href="#" class="py-2 relative" aria-current="page">
                <span
                  class="absolute top-8 left-6 w-5 h-1 bg-yellow rounded rounded-b-xl"
                ></span>
                Dashboard</a
              >
              <a href="#" class="hover:text-yellow">Courses</a>
              <a href="#" class="hover:text-yellow">Plans</a>
              <a href="#" class="hover:text-yellow">About Us</a>
            </div>
          </div>

          <!-- secondary nav -->
          <div class="hidden md:flex items-center space-x-3 text-white">
            <div class="relative">
              <span
                @click="notification = !notification"
                class="py-5 px-3 text-lg cursor-pointer"
                ><font-awesome-icon icon="fa-regular fa-bell"
              /></span>
              <NotificationBar :notification="notification" />
            </div>

            <div class="flex items-center text-sm">
              <img
                src="..\assets\User.png"
                alt="user image"
                class="rounded-xl border border-white"
              />
              <DropDown />
            </div>
          </div>

          <!-- notification (mobile) -->
          <div class="md:hidden flex items-center">
            <div
              id="notification"
              @click="notification = !notification"
              class="rounded-lg py-2 px-3 border border-white cursor-pointer bg-primary-rgba border border-primary-rgba"
            >
              <font-awesome-icon
                icon="fa-regular fa-bell"
                class="text-white text-xl"
              />
            </div>
            <NotificationBar :notification="notification" />
          </div>
        </div>

        <div class="md:hidden my-4">
          <SearchBar />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "@/components/DropDown.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Menubar from "@/components/Menubar.vue";

export default defineComponent({
  components: {
    DropDown,
    NotificationBar,
    SearchBar,
    Menubar,
  },
  data() {
    return {
      notification: false,
    };
  },
});
</script>
