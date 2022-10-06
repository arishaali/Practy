import { mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";

describe("Pagination.vue", () => {
  const wrapper = mount(Pagination);
  it("if total pages grater than 0, pagination will be displayed", async () => {
    await wrapper.setData({ Pages: 2 });
    expect(wrapper.find("#TotalPages").isVisible()).toBe(true);
  });
  it("previous and next button text check", async () => {
    await wrapper.setData({ Pages: 2 });
    expect(wrapper.find("#prevButton").text()).toBe("<");
    expect(wrapper.find("#nextButton").text()).toBe(">");
  });
});
