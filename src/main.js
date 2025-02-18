import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Import our custom CSS
import "./scss/styles.scss";
import router from "./routers/index";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
const app = createApp(App);

app.use(router);

app.mount("#app");
