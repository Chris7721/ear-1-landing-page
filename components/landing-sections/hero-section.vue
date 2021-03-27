<template>
  <main class="bg-green-400 relative overflow-hidden">
    <div class="max-w-screen-xl mx-auto min-h-screen relative z-20">
      <div
        class="flex flex-col items-center justify-center max-w-2xl mx-auto px-7 relative z-10"
      >
        <div class="mt-20">
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-8.5xl text-center"
          >
            Build direct,
          </h1>
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-8.5xl text-center"
          >
            meaningful
          </h1>
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-8.5xl text-center"
          >
            connections.
          </h1>
        </div>
        <p class="text-gray-100 text-center text-lg font-medium mt-9">
          Ear1 helps you connect directly with your favourite influencers for a
          small fee. What’s more? We assure you of getting a reply.
        </p>
        <div class="mt-14">
          <div class="grid gap-4 md:grid-cols-2 items-center justify-center">
            <button
              class="w-max h-m focus:outline-none transform focus:scale-105 duration-75"
            >
              <playstore />
            </button>
            <button
              class="w-max h-m focus:outline-none transform focus:scale-105 duration-75"
            >
              <applestore />
            </button>
          </div>
        </div>
        <div class="relative -mb-68 z-20 mt-14" ref="mobile-holder">
          <div
            class="absolute z-10 top-36 -left-36 hidden md:block w-64"
            ref="mobile-1"
          >
            <img src="/phone-1.png" class="h-full w-full" alt="" />
          </div>
          <div class="relative z-20 w-full hidden md:block md:w-72">
            <img src="/phone-2.png" alt="" class="object-cover" />
          </div>
          <div class="relative z-20 w-72 md:hidden">
            <img src="/phone-2.png" alt="" class="object-cover" />
          </div>
          <div
            class="absolute z-10 top-36 -right-36 hidden md:block w-64"
            ref="mobile-3"
          >
            <img src="/phone-3.png" class="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
    <img
      src="/overlay.png"
      class="absolute z-10 object-cover w-full h-full bottom-0 left-0"
      alt=""
    />
  </main>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Playstore from "~/components/icons/playstore";
import Applestore from "~/components/icons/applestore";
export default {
  components: {
    Playstore,
    Applestore,
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.4 });
  },
  mounted() {
    const tl = gsap.timeline();
    const tl3 = gsap.timeline();
    tl.from(this.$refs["mobile-1"], {
      opacity: 0.9,
      rotate: 0,
      // x: 190,
    }).to(this.$refs["mobile-1"], {
      rotate: "-21deg",
    });
    tl3
      .from(this.$refs["mobile-3"], {
        opacity: 0.9,
        rotate: 0,
        // transformOrigin: " right ",
        // x: -190,
      })
      .to(this.$refs["mobile-3"], {
        rotate: "21deg",
        opacity: 1,
      });
    ScrollTrigger.create({
      animation: tl3,
      trigger: this.$refs["mobile-holder"],
      start: "top 80%",
      end: "top 10%",
      scrub: true,
      // markers: true,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: this.$refs["mobile-holder"],
      start: "top 80%",
      end: "top 10%",
      scrub: true,
      markers: true,
    });
  },
};
</script>

<style lang="scss" scoped></style>
