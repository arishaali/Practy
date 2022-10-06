<template>
  <div>
    <h4 class="text-2xl md:text-3xl front-bold mt-12">Sign In</h4>
    <div class="bg-yellow h-1 w-12 mt-2 md:w-16 md:mt-4 rounded"></div>
    <form>
      <InputField
        :type="'email'"
        :name="'email'"
        v-model="email"
        :placeholder="'john.doe@gmail.com'"
        :label="'Email Address'"
        :src="require('../assets/mail.png')"
      />
      <div>
        <InputField
          :type="'password'"
          :name="'password'"
          v-model="password"
          :placeholder="'********'"
          :label="'Password'"
          :src="require('../assets/lock.png')"
        />
        <a href="#" class="text-sm underline text-primary float-right mt-1"
          >Forgot Password?</a
        >
      </div>
      <div class="relative">
        <button
          @click="SignIn"
          id="SignIn"
          class="text-white text-sm md:text-lg bg-primary py-2 px-10 md:px-6 lg:px-14 rounded-full my-28 md:my-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "@/components/InputField.vue";

export default defineComponent({
  name: "SignInForm",
  components: {
    InputField,
  },
  data() {
    return {
      Login: false,
      email: "",
      password: "",
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
