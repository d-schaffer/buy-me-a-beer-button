import _Vue from "vue";

import DonateButton from "./components/DonateButton.vue";

export function UIPlugin(Vue: typeof _Vue) {
  Vue.component("DonateButtton", DonateButton);
}
