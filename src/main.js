import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./styles/styles.scss";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css'
import {clickOutsideDirective} from './directives'

const app = createApp(App);

app.use(SetupCalendar, {})
app.use(router);
app.use(store);
app.use(ElementPlus)


app.directive('click-outside', clickOutsideDirective)

app.config.globalProperties.$filters = {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    formatNumber(number) {
        return Intl.NumberFormat().format(number);
    }
  }

app.mount("#app");
