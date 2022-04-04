import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NavBar from "@/components/NavBar.vue";
import AnimalCard from "@/components/AnimalCard.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");

app.component("NavBar", NavBar);
app.component("AnimalCard", AnimalCard)
