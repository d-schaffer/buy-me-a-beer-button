<template>
  <div>
    <donate-button color="black" hover-color="red" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DonateButton from "@/components/DonateButton.vue";

@Component({
  components: {
    DonateButton
  }
})
export default class App extends Vue {}
</script>
<style lang="scss"></style>
