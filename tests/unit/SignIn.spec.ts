import { shallowMount, mount } from "@vue/test-utils";
import SignInForm from "@/components/SignInForm.vue";

describe("SignInForm.vue", () => {
  it("does button exists", () => {
    const wrapper = shallowMount(SignInForm, {});
    expect(wrapper.find("#SignIn").exists()).toBe(true);
  });
  it("after clicking sign in button, it goes to dashboard", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = mount(SignInForm, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });
    await wrapper.find("#SignIn").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/dashboard");
  });
});
