import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./styles/styles.scss";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css'

const app = createApp(App);

app.use(SetupCalendar, {})
app.use(router);
app.use(store);
app.use(ElementPlus)

app.mount("#app");
