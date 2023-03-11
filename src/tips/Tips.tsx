import { defineComponent } from 'vue'

export default defineComponent({
  name: "Tips",
  setup(props, {slots}) {
    return () => (
      <button class={`w-100 h-100`}>
        {slots.default ? slots.default() : 'Tips'}
      </button>
    )
  },
})