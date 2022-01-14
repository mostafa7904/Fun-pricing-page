<template>
  <h1 class="md:text-6xl sm:text-5xl text-4xl font-bold tracking-tight">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Heading",
  props: {
    text: {
      type: String,
      default: "Pricing",
    },
  },
});
</script>

<style lang="scss"></style>
