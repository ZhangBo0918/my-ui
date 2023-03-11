/*
 * @Date: 2023-03-11 00:04:13
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 01:43:45
 * @FilePath: \ReBack\my-ui\vite.config.ts
 * @Description:
 */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./src/config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/Entry.ts",
      name: "MyUI",
      fileName: "my-ui",
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web:[/.[tj]sx$/]
    }
  }
});
