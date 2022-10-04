<template>
  <div>
    <Navbar />
    <div
      class="md:w-3/5 lg:w-2/4 xl:w-2/5 mx-auto bg-white md:border md:border-gray-200 md:shadow-md rounded-2xl my-8 p-8"
    >
      <h1 class="font-bold text-lg">Form Title</h1>
      <div class="my-4 md:my-8">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-regular fa-envelope"
            class="text-yellow mr-2 text-lg"
          />Placeholder Field</label
        >
        <input
          type="email"
          name="email"
          placeholder="Enter your name"
          class="border border-gray-300 text-sm rounded-lg block w-full p-3 mt-2"
        />
      </div>
      <div class="my-4 md:my-8">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-regular fa-envelope"
            class="text-yellow mr-2 text-lg"
          />Field with a value inside</label
        >
        <input
          type="email"
          name="email"
          placeholder="Enter your name"
          v-model="Name"
          class="border border-gray-300 text-sm rounded-lg block w-full p-3 mt-2"
        />
      </div>
      <div class="my-4 md:my-8">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-regular fa-envelope"
            class="text-yellow mr-2 text-lg"
          />Wrong Text Field</label
        >
        <input
          type="email"
          name="email"
          placeholder="Enter your name"
          v-model="FullName"
          @keypress="Check"
          :class="[
            Invaliderror ? 'border border-red-600' : 'border border-gray-300 ',
          ]"
          class="text-sm rounded-lg block w-full p-3 mt-2"
        />
        <div v-if="Invaliderror" class="text-red-600 text-xs">
          {{ Invaliderror }}
        </div>
      </div>
      <div class="my-4 md:my-8">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-regular fa-envelope"
            class="text-yellow mr-2 text-lg"
          />Valid Text Field</label
        >
        <div class="relative">
          <div
            v-if="validError == 'valid'"
            class="flex absolute z-0 inset-y-0 right-0 items-center pr-3"
          >
            <font-awesome-icon
              icon="fa-regular fa-circle-check"
              class="w-5 h-5 text-green-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your name"
            v-model="ValidFullName"
            @keypress="CheckValid"
            class="text-sm rounded-lg block w-full p-3 mt-2"
            :class="[
              validError === 'valid'
                ? 'border border-green-600'
                : 'border border-gray-300 ',
            ]"
          />
        </div>
      </div>

      <!-- buttons -->
      <div
        class="flex flex-col md:flex-row justify-center md:items-center md:space-x-4"
      >
        <button
          class="border border-primary text-primary w-48 px-5 py-3 rounded-full"
        >
          Secondary Button
        </button>
        <button class="bg-primary text-white w-48 px-5 py-3 rounded-full">
          Primary Button
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
export default defineComponent({
  components: {
    Navbar,
  },
  data() {
    return {
      Name: "John Doe",
      FullName: "",
      ValidFullName: "",
      Invaliderror: "",
      validError: "",
    };
  },
  methods: {
    Check() {
      if (/^[a-zA-Z\s]*$/.test(this.FullName)) {
        this.Invaliderror = "";
      } else {
        this.Invaliderror = "Please enter valid info.";
      }
    },
    CheckValid() {
      if (/^[a-zA-Z\s]*$/.test(this.ValidFullName)) {
        this.validError = "valid";
      } else {
        this.validError = "";
      }
    },
  },
});
</script>
