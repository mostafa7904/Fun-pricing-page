<template>
  <div
    class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-52 lg:mx-40 md:mx-32 sm:mx-24 mx-16 mt-12 sm:gap-8 gap-5"
  >
    <template v-for="(pricing, idx) in cards">
      <pricing-card :key="idx" :pricing="pricing" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PricingCard from "./PricingCard.vue";

export default Vue.extend({
  name: "Pricing",
  components: { PricingCard },
  data: () => ({
    cards: [
      {
        type: "Personal",
        title: "Starter",
        price: 5,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: false,
      },
      {
        type: "Teams",
        title: "Team",
        price: 10,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: true,
      },
      {
        type: "Company",
        title: "Pro",
        price: 50,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: false,
      },
    ],
  }),
});
</script>
