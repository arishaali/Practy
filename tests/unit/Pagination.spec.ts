import { mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";

describe("Pagination.vue", () => {
  it("calls a previous page, when previous button clicked", () => {
    // const removeItem = jest.spyOn(Pagination, 'removeItem')
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        PageSize: 4,
      },
    });
    expect(wrapper.find("#prevButton").text()).toBe("<");
    expect(wrapper.find("#nextButton").text()).toBe(">");
    //   expect(wrapper.find("#currentPage").text()).toBe("1");
  });
});
