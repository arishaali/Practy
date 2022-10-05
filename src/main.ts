import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLock,
  faChevronDown,
  faMagnifyingGlass,
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faBell,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGoogle,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./main.css";

library.add(
  faEnvelope,
  faLock,
  faFacebookF,
  faGoogle,
  faTwitter,
  faBell,
  faChevronDown,
  faMagnifyingGlass,
  faBars,
  faCheckCircle,
  faXmarkCircle,
  faChevronLeft,
  faChevronRight
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
