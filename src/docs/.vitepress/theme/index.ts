/*
 * @Date: 2023-03-11 10:19:16
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 17:11:42
 * @FilePath: \ReBack\my-ui\src\docs\.vitepress\theme\index.ts
 * @Description:
 */
import Theme from "vitepress/theme";
import MyUI from "../../../Entry";
import demo from "vitepress-demoblock/demo.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(MyUI);
    app.component('demo', demo)
  },
};
