import { App } from "vue";
import "uno.css";
import MyButton from "./button";
import MyButton2 from "./button/button.vue";
import MyButton3 from "./button/button.tsx";

export { MyButton, MyButton2, MyButton3 };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(MyButton2.name, MyButton2);
    app.component(MyButton3.name, MyButton3);
  },
};
