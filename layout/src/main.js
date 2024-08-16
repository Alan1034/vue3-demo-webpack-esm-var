import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from 'pinia'
import Layout from "./Layout.vue";

import HomeContent from "home/Content";
import HomeApp from "home/App";

const HomeButton = defineAsyncComponent(() => import("home/Button"));
const app = createApp(Layout);

app.component("home-content", HomeContent);
app.component("home-button", HomeButton);
app.component("home-app", HomeApp);

app.use(createPinia());
app.mount("#root");
