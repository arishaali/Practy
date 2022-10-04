import { shallowMount, mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from 'vue-router'
import SignInForm from "@/components/SignInForm.vue";

describe("SignInForm.vue", () => {
    it("does button exists", () => {
        const wrapper = shallowMount(SignInForm, {
        });
            expect(wrapper.find('#SignIn').exists()).toBe(true)
    })

    it("button contains sign in text", () => {
        const wrapper = shallowMount(SignInForm, {
        });
            expect(wrapper.find('#SignIn').text()).toMatch("Sign In")
    })
    // it("should change login to true on button click", async () => {
        
    //     const router = createRouter({
    //         history: createWebHistory(),
    //         routes: [{
    //           path: '/dashboard',
    //           name: 'Dashboard',
    //           component: Dashboard
    //         }]
    //       })

    //       router.push('/dashboard')
    //     await router.isReady()

    //     const wrapper = mount(SignInForm, {
    //         global: {
    //           plugins: [router]
    //         }
    //       })
    //         const button = wrapper.find("#SignIn").trigger('click')
    //         expect(button).toBeTruthy()
    // })
})