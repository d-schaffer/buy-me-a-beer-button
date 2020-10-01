import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import DonateButton from "@/components/DonateButton.vue";

describe("DonateButton.vue", () => {
  it("renders props.btnText when passed", () => {
    const btnText = "This should show up in the button!";
    const wrapper = shallowMount(DonateButton, {
      propsData: { btnText }
    });
    expect(wrapper.text()).to.include(btnText);
  });
});
