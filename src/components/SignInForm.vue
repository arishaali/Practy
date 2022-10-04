<template>
  <div>
    <h4 class="text-2xl md:text-3xl front-bold mt-12">Sign In</h4>
    <div class="bg-yellow h-1 w-12 mt-2 md:w-16 md:mt-4 rounded"></div>
    <form>
      <div class="mt-8 md:mt-12">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-regular fa-envelope"
            class="text-yellow mr-2 text-lg"
          />Email Address</label
        >
        <input
          type="email"
          name="email"
          placeholder="john.doe@gmail.com"
          class="border border-gray-300 text-sm rounded-lg block w-full p-3 mt-2"
        />
      </div>
      <div class="mt-8">
        <label for="email" class="text-sm text-gray-600"
          ><font-awesome-icon
            icon="fa-solid fa-lock"
            class="text-yellow mr-2 text-lg"
          />Password</label
        >
        <input
          type="password"
          name="password"
          placeholder="********"
          class="border border-gray-300 text-lg rounded-lg block w-full p-3 mt-2"
        />
        <a href="#" class="text-sm underline text-primary float-right mt-1"
          >Forgot Password?</a
        >
      </div>
      <div class="relative">
        <button
          @click="SignIn"
          id="SignIn"
          type="button"
          class="text-white bg-primary py-3 px-14 md:px-6 lg:px-14 rounded-full my-28 md:my-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      Login: false,
    };
  },
  methods: {
    SignIn: function () {
      this.Login = !this.Login;
      this.$router.push("/dashboard");
    },
  },
});
</script>
