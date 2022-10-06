<template>
  <div class="md:grid md:grid-cols-2">
    <div class="hidden md:block md:relative md:text-center">
      <img
        src="..\assets\Login_Img.png"
        alt="Sign In Page Image"
        class="object-cover h-screen w-full"
      />
      <h1
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl text-center tracking-widest"
      >
        Track the <br />
        practice on your <br />
        musical <br />
        instrument.
      </h1>
    </div>
    <div class="px-6 md:px-12 lg:px-20">
      <h1 class="text-primary font-bold text-3xl mt-10 text-center md:hidden">
        Logo
      </h1>
      <SignInForm />

      <div class="flex justify-center items-center mt-44 mx-12">
        <div class="h-px bg-yellow flex-grow"></div>
        <span class="flex-shrink text-sm lg:text-base px-1 lg:px-2"
          >Or sign in with</span
        >
        <div class="h-px bg-yellow flex-grow"></div>
      </div>
      <div class="flex justify-center space-x-4 mt-8 md:mt-10">
        <SocialIcon
          :src="require('../assets/Google.png')"
          :alt="'Google Icon'"
        />
        <SocialIcon
          :src="require('../assets/Twitter.png')"
          :alt="'Twitter Icon'"
        />
        <SocialIcon
          :src="require('../assets/Facebook.png')"
          :alt="'Facebook Icon'"
        />
      </div>
      <div class="my-8 md:my-10">
        <p class="text-center text-sm md:text-base">
          Don't have an account?<a href="#" class="underline text-primary ml-1"
            >Register a New Account.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignInForm from "@/components/SignInForm.vue";
import SocialIcon from "@/components/SocialIcon.vue";
export default defineComponent({
  name: "SignIn",
  components: {
    SignInForm,
    SocialIcon,
  },
});
</script>
