import { createApp } from "vue";
import App from "./App.vue";
import ToDoSeen from "./components/ToDo.vue";
import "./index.css";

createApp(App).mount("#app");
createApp(ToDoSeen).mount("#todo");
