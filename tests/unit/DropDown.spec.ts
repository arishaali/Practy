import { mount } from "@vue/test-utils";
import DropDown from "@/components/DropDown.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faChevronRight);

describe("Dropdown", () => {
  const wrapper = mount(DropDown, {
    global: {
      stubs: { FontAwesomeIcon },
    },
  });
  test("if dropdown not clicked, do not show dropdown", () => {
    expect(wrapper.find("#dropdown").isVisible()).toBe(false);
  });

  test("if dropdown clicked, show dropdown", async () => {
    await wrapper.setData({ dropdown: true });
    expect(wrapper.find("#dropdown").isVisible()).toBe(true);
  });
});
