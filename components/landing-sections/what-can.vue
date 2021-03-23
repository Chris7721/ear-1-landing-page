<template>
  <section class="bg-gray-200 relative" ref="what-can">
    <div
      class="relative z-20 py-20 sm:py-24 bm:py-32 px-6 xs:px-9 sm:px-12 bm:px-24 max-w-screen-xl mx-auto grid gap-8 md:grid-cols-5 items-center overflow-hidden"
    >
      <div class="col-span-3 relative z-30">
        <h2 class="text-4xl sm:text-5xl bm:text-6xl text-green-500 font-medium">
          What can Ear1 help you do?
        </h2>
        <p class="mt-8 liz">
          Are you an individual looking to connect with an influencer without
          the hassle of waiting for the reply over a long time, or an influencer
          looking to filter your dm’s and connect with your audience, Ear1 has
          got you covered.
        </p>
      </div>
      <clipped-logo-full
        class="absolute -right-6 md:right-0 top-12 md:-top-14 bm:-top-24 transform rotate-12 z-20 w-36 md:w-64 bm:w-96"
      />
      <clipped-logo-full
        class="hidden sm:block absolute top-9 left-9 z-20 w-36"
      />
    </div>
    <img
      src="/overlay.png"
      class="absolute z-10 w-full h-full bottom-0 left-0 object-cover"
      alt=""
    />
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ClippedLogo from "~/components/icons/clipped-logo";
import ClippedLogoFull from "~/components/icons/clipped-logo-full";
export default {
  components: {
    ClippedLogo,
    ClippedLogoFull,
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    // gsap.from(this.$refs["what-can"], {
    //   scrollTrigger: {
    //     trigger: this.$refs["what-can"],
    //     // when the top of thr element touches the center of the viewport
    //     start: "top center",
    //     markers: true,
    //     // scrub: true,
    //     pin: '.liz',
    //   },
    //   x: 700,
    //   // duration: 3.7,
    // });
  },
};
</script>

<style lang="scss" scoped></style>
