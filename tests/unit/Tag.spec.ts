import { shallowMount } from "@vue/test-utils";
import Tag from "@/components/Tag.vue";

describe("Tags", () => {
  test("matches prop name", async () => {
    const tag = "All";
    const wrapper = shallowMount(Tag);
    await wrapper.setProps({ name: "All" });
    expect(wrapper.find("span").text()).toMatch(tag);
  });
});
