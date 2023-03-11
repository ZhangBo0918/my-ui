/*
 * @Date: 2023-03-11 02:02:36
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 02:12:55
 * @FilePath: \ReBack\my-ui\src\config\unocss.ts
 * @Description:
 */
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];

const textColor = ["white", "black", "red", "yellow", "green", "blue"];

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...icons.map((v) => `i-ic-baseline-${v}`),
  ...textColor.map((v) => `text-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
