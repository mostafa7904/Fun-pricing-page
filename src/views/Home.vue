<template>
  <div class="home" ref="gifBg" id="gifBg">
    <div
      class="container mx-auto pt-40 pb-6 text-center"
      :class="isPlaying ? 'text-white' : 'text-black'"
    >
      <Heading />
      <SubscriptionTypeBtns @changeTime="playOrStopGif" />
      <Pricing />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

import Pricing from "@/components/Pricing.vue";
import Heading from "@/components/Heading.vue";
import SubscriptionTypeBtns from "@/components/SubscriptionTypeBtns.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Pricing,
    Heading,
    SubscriptionTypeBtns,
  },
  computed: {
    ...mapGetters(["isPlaying"]),
  },
  data: () => ({
    gifs: [
      {
        url: "https://media0.giphy.com/media/3o6ZtakXco6ZX2T66I/giphy.gif?cid=ecf05e47i22lhtk2nkvvew1zhpceot00goamyrfv37q87rdz&rid=giphy.gif&ct=g",
        time: 4000,
        implication: "YEAR",
      },
      {
        url: "https://media4.giphy.com/media/5VKbvrjxpVJCM/giphy.gif?cid=ecf05e4771auoppozpi4s3dra1v8puybmhzgk46pts017m45&rid=giphy.gif&ct=g",
        time: 3000,
        implication: "YEAR",
      },
      {
        url: "https://media3.giphy.com/media/WPozw7z6nUMrQ12Kc7/giphy.gif?cid=790b7611dc55c493e53270c0f544c8cf640d388652a050e4&rid=giphy.gif&ct=g",
        time: 4000,
        implication: "YEAR",
      },
      {
        url: "https://media1.giphy.com/media/vQqeT3AYg8S5O/giphy.gif?cid=ecf05e4710kdi2ncz9wyzrpi8ub6lm928y1mw388ba3g7z9b&rid=giphy.gif&ct=g",
        time: 2500,
        implication: "YEAR",
      },
      {
        url: "https://media1.giphy.com/media/8UGoOaR1lA1uaAN892/giphy.gif?cid=790b7611e8962ea66c946f8b5ac9266ec1664242dace7ca7&rid=giphy.gif&ct=g",
        time: 3000,
        implication: "MONTH",
      },
      {
        url: "https://media1.giphy.com/media/pK6k4BNalmx44CQj3v/giphy.gif?cid=790b7611a9d69351c9d73aa423dc237ca64410e3c74fe6b1&rid=giphy.gif&ct=g",
        time: 2500,
        implication: "MONTH",
      },
      {
        url: "https://media0.giphy.com/media/U4VXRfcY3zxTi/giphy.gif?cid=790b7611216681cfd4058f1c1ec28b78fd099903e5e381d9&rid=giphy.gif&ct=g",
        time: 3000,
        implication: "MONTH",
      },
    ],
  }),
  mounted() {
    this.preloadImages();
    this.$store.subscribe((mutation) => {
      if (mutation.type == "stop") {
        this.changeBg("");
      }
    });
  },
  methods: {
    ...mapActions(["playOrStop"]),
    async playOrStopGif(time: string) {
      const filteredGifs = this.gifs.filter((item) => item.implication == time);
      const randomIndex = Math.ceil(Math.random() * filteredGifs.length) - 1;
      const gif = filteredGifs[randomIndex];

      this.changeBg(gif.url);
      await this.$nextTick();
      this.playOrStop(gif);
    },
    changeBg(url: string) {
      const element = document.getElementById("gifBg") as HTMLElement;
      element.style.backgroundImage = `url(${url})`;
    },
    preloadImages() {
      const images = [];
      for (var i = 0; i < this.gifs.length; i++) {
        images[i] = new Image();
        images[i].src = this.gifs[i].url;
        if (images[i].complete) continue;
      }
    },
  },
});
</script>

<style>
.home {
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
