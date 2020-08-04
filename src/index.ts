import _Vue from "vue";

import DonateButton from "./components/DonateButton.vue";

export function DonatePlugin(Vue: typeof _Vue) {
  Vue.component("DonateButtton", DonateButton);
}
