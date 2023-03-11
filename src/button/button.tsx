/*
 * @Date: 2023-03-11 00:34:27
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 17:40:33
 * @FilePath: \ReBack\my-ui\src\button\button.tsx
 * @Description:
 */
import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor = "black" | "gray" | "red" | "blue" | "green" | "yellow";
export type Icon = "search" | "edit" | "check" | "message" | "star-off" | "delete" | "add" | "share" | "";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "gray",
  },
  icon: {
    type: String as PropType<Icon>,
    default: "",
  },
} as const;

export default defineComponent({
  name: "MyButton3",
  props,
  setup(props, { slots }) {
    console.log(props, slots);
    const textColor = props.color ? 'white' : 'black';
    console.log(textColor);
    
    return () => (
      <button
        class={`
        py-2
        px-4
        font-semibold 
        rounded-lg 
        shadow-md 
        text-${textColor} 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none 
        cursor-pointer 
        `}
      >
        {props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : "按钮"}
        {/* {props.name?props.name:'按钮'} */}
      </button>
    );
  },
});
