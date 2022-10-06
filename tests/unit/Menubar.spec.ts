import { mount } from "@vue/test-utils";
import Menubar from "@/components/Menubar.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faBars,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faChevronDown, faBars, faXmarkCircle, faChevronRight);

describe("Menubar", () => {
  const wrapper = mount(Menubar, {
    global: {
      stubs: { FontAwesomeIcon },
    },
  });
  test("if menu icon clicked, menu bar will open", async () => {
    await wrapper.setData({ menubar: true });
    expect(wrapper.find("#menubar").isVisible()).toBe(true);
  });
});
