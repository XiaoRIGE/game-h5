import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Import our custom CSS
import "./scss/styles.scss";
import router from "./routers/index";

import {
  message,
  Table,
  InputNumber,
  Form,
  Input,
  Select,
  Radio,
} from "ant-design-vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(router);

app.use(Table);
app.use(InputNumber);
app.use(Form);
app.use(Input);
app.use(Select);
app.use(Radio);

app.mount("#app");
