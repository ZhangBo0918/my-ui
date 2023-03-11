/*
 * @Date: 2023-03-11 02:46:30
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 10:32:40
 * @FilePath: \ReBack\my-ui\src\docs\vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
import "unocss";

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [vueJsx(), Unocss()],
});
