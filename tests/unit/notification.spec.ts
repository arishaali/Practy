import { mount } from "@vue/test-utils";
import NotificationBar from "@/components/NotificationBar.vue";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("check if notification component exists", async () => {
    const wrapper = mount(Navbar);

    expect(wrapper.findComponent(NotificationBar).exists()).toBe(true);
  });
});
