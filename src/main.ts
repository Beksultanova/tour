import { createApp } from "vue";
import "./styles/common.css";
import "./styles/reset.css";
import "./styles/style.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
