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
    <footer class="footer">
      <a class="flex" href="https://github.com/mostafa7904/Fun-pricing-page">
        Github
        <i class="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
            />
          </svg>
        </i>
      </a>
    </footer>
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
.footer {
  position: absolute;
  bottom: 10px;
  left: 50%;
}
</style>
