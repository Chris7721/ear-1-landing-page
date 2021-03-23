<template>
  <div class="relative min-h-screen">
    <div
      class="absolute z-10 top-0 left-0 w-full min-h-full bg-transparent grid md:grid-cols-2"
    >
      <div class="left bg-gray-800"></div>
      <div class="right bg-gray-800 bm:bg-gray-900 relative">
        <img
          src="/overlay.png"
          class="absolute z-10 w-full h-full bottom-0 left-0 object-cover"
          alt=""
        />
      </div>
    </div>

    <div
      class="grid bm:grid-cols-2 max-w-screen-xl mx-auto relative gap-8 z-20 min-h-screen"
    >
      <div
        class="bg-gray-800 pl-6 xs:pl-9 sm:pl-12 bm:pl-24 justify-center hidden bm:flex"
      >
        <div
          class="w-9/12 sm:w-8/12 md:w-9/12 bm:w-11/12 h-5/6 relative border-b-12 border-l-12 border-r-12 border-gray-400 rounded-bl-3xl rounded-br-3xl"
          ref="contact-cont"
        >
          <div
            class="absolute bottom-0 left-0 min-w-full h-4/6"
            ref="contact-box"
          >
            <div
              class="absolute bg-gray-600 z-20 bottom-0 left-0 min-w-full h-5"
            ></div>
            <div
              class="absolute bottom-0 left-0 min-w-full h-full bg-gray-500 z-40 flex items-center rounded-3xl"
            >
              <div class="px-8">
                <div class="flex items-center">
                  <img src="/contact-2.png" alt="" />
                  <p class="text-white ml-3 text-left">
                    <span class="font-medium">Femi Adekunle </span
                    ><span class="text-gray-300"
                      >has paid and requested to you</span
                    >
                  </p>
                </div>
                <div
                  class="grid gap-4 items-center bm:grid-cols-2 justify-between mt-8"
                >
                  <button
                    class="block w-full bg-red-600 focus:bg-red-700 focus:outline-none p-4 text-white rounded-lg"
                  >
                    Decline
                  </button>

                  <button
                    class="block w-full bg-green-600 focus:bg-green-700 focus:outline-none p-4 text-white rounded-lg"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative bm:block flex bm:items-start items-center">
        <div
          class="bg-transparent py-20 sm:py-24 bm:py-32 px-6 xs:px-9 sm:px-12 bm:px-24 relative z-20"
        >
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between items-center">
              <span class="bg-yellow-500 text-sm w-max rounded-2xl px-7 py-1">
                Influencer
              </span>
              <div
                class="border-2 border-yellow-500 border-solid p-3 rounded-full flex items-center justify-center"
              >
                <filter-icon />
              </div>
            </div>

            <h2
              class="text-4xl sm:text-6xl font-medium text-white my-6 bm:my-8"
            >
              Filter the noise in the dm’s
            </h2>
            <p class="text-gray-300">
              Ear1 helps you get rid of all the noise in your dm’s across other
              social media apps. This way, you are sure to connect with serious
              people and make genuine business and personal connections.
            </p>
          </div>
        </div>
        <img
          src="/overlay.png"
          class="absolute z-10 w-full h-full bottom-0 left-0 object-cover"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap, { Bounce } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FilterIcon from "~/components/icons/filter";
export default {
  components: {
    FilterIcon,
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.3 });
  },
  mounted() {
    const tl = gsap.timeline();
    tl.to(this.$refs["contact-box"], {
      scale: 0.98,
      y: -100,
      ease: Bounce.easeInOut,
    }).to(this.$refs["contact-box"], {
      scale: 1,
      y: 0,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: this.$refs["contact-cont"],
      start: "top 35%",
      // markers: true,
    });
  },
};
</script>

<style lang="scss" scoped></style>
