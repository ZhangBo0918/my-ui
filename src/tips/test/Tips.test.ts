import Tips from "../tips";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Tips", () => {
  console.log(Tips);

  test("mount  @vue/test-utils", () => {
    const wrapper = shallowMount(Tips, {
      slots: {
        default: "Tips",
      },
    });
    console.log(wrapper.classes());

    expect(wrapper.text()).toBe("Tips");
  });
});
