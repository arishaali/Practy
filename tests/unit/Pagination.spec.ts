import { mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";

describe("Pagination.vue", () => {
  it("emit a page if previous button clicked", async () => {
    const wrapper = mount(Pagination);
    await wrapper.find("#prevButton").trigger("click");

    expect(wrapper.emitted().page).toBe(1);
  });
});
