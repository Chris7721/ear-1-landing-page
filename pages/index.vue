<template>
  <div class="">
    <HeroSection />
    <WhatCan />
    <div class="relative min-h-screen sm:overflow-hidden" ref="container1">
      <div
        class="sm:absolute w-full z-10 sm:top-0 sm:left-0 min-h-screen sm:overflow-hidden"
      >
        <Connect />
      </div>
      <div
        class="sm:absolute w-full z-20 sm:top-0 sm:left-0 min-h-screen overflow-hidden"
        ref="messaging"
      >
        <Messaging />
      </div>
      <div
        class="sm:absolute w-full z-30 sm:top-0 sm:left-0 min-h-screen overflow-hidden"
        ref="earnMore"
      >
        <EarnMore />
      </div>
      <div
        class="sm:absolute w-full z-40 sm:top-0 sm:left-0 min-h-screen overflow-hidden"
        ref="filterNoise"
      >
        <FilterNoise />
      </div>
    </div>

    <Assurance />
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "~/components/landing-sections/hero-section";
import WhatCan from "~/components/landing-sections/what-can";
import Connect from "~/components/landing-sections/connect";
import Messaging from "~/components/landing-sections/messaging";
import EarnMore from "~/components/landing-sections/earn-money";
import FilterNoise from "~/components/landing-sections/filter-noise";
import Assurance from "~/components/landing-sections/assurance";
export default {
  components: {
    HeroSection,
    WhatCan,
    Connect,
    Messaging,
    EarnMore,
    FilterNoise,
    Assurance,
  },
  data() {
    return {
      tl: gsap.timeline(),
    };
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });
    // .from(this.$refs["earnMore"], {
    //   xPercent: 100,
    // })
    // .from(this.$refs["filterNoise"], {
    //   yPercent: -100,
    // });
  },
  mounted() {
    const notMobileDevice = window.matchMedia("(min-width: 640px)");
    if (notMobileDevice.matches) {
      const sections = gsap.utils.toArray(this.$refs["container1"]);
      const tl = gsap.timeline();
      tl.from(this.$refs["messaging"], {
        yPercent: 100,
      })
        .from(this.$refs["earnMore"], {
          yPercent: 100,
        })
        .from(this.$refs["filterNoise"], {
          yPercent: 100,
        });
      // console.log(this.tl);
      ScrollTrigger.create({
        animation: tl,
        trigger: this.$refs["container1"],
        start: "top top",
        // end: "+-4000",
        scrub: 0.6,
        pin: true,
        // anticipatePin: 0,
        // pinSpacing: false,
      });
    }
  },
  methods: {},
};
</script>

<style></style>
