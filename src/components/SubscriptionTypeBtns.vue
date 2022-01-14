<template>
  <div class="mt-8">
    <span
      class="font-regular cursor-pointer text-sm tracking-wide"
      @click="input = false"
      >Monthly</span
    >
    <label class="switch mx-3">
      <input v-model="input" type="checkbox" />
      <span class="slider round"></span>
    </label>

    <span
      class="font-regular cursor-pointer text-sm tracking-wide"
      @click="input = true"
      >Yearly</span
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SubscriptionTypeBtns",
  watch: {
    input(val) {
      this.$emit("changeTime", val ? "YEAR" : "MONTH");
    },
  },
  data: () => ({
    input: null,
  }),
});
</script>

<style lang="scss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 25px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: transparent;
  border: 2px solid rgba($color: #000000, $alpha: 0.2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 4px;
  top: 2px;
  border-radius: 50%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  background-color: #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}
</style>
