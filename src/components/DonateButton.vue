<template>
  <div>
    <form
      class="donate-btn-form"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" v-bind:value="value" />
      <button
        class="donate-btn d-flex"
        type="submit"
        v-bind:style="cssProps"
      >
        <img
          class="donate-btn-image"
          type="image"
          v-bind:src="btnImage"
          border="0"
          alt=""
        />
        <div>{{ btnText }}</div>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class DonateButton extends Vue {
  @Prop({ default: process.env.VUE_APP_BTNTEXT }) btnText!: string;
  @Prop({ default: require("../assets/beer-mug.png") }) btnImage!: string;
  @Prop({ default: process.env.VUE_APP_BTNVALUE }) value!: string;
  @Prop({ default: "red" }) color!: string;
  @Prop({ default: "black"}) hoverColor!: string;

  get cssProps() {
    return {
      "--color": this.color,
      "--hover-color": this.hoverColor
    };
  }
}
</script>
<style lang="scss">
.d-flex {
  display: flex;
}
.donate-btn {
  cursor: pointer;
  padding: 5px;
  width: auto;
  border: var(--color);
  background-color: var(--color);
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: var(--hover-color);
  }
  &-image {
    height: 20px;
    margin-right: 10px;
  }
}

img {
  height: 15px;
}
</style>
