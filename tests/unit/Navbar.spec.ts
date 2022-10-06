import { mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faBell,
  faChevronDown,
  faMagnifyingGlass,
  faBars,
  faCheckCircle,
  faXmarkCircle,
  faChevronLeft,
  faChevronRight
);

describe("Navbar.vue", () => {
  const wrapper = mount(Navbar, {
    global: {
      stubs: { FontAwesomeIcon },
    },
  });
  test("if notification icon clicked, it opens notification bar", async () => {
    const child = wrapper.findComponent(NotificationBar);
    await wrapper.setProps({ notification: true });
    expect(child.exists()).toBe(true);
  });
});
