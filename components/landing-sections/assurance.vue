<template>
  <div>
    <div
      class="max-w-screen-xl mx-auto min-h-screen py-20 sm:py-24 bm:py-32 border-b-2 border-gray-300"
    >
      <h2
        class="text-4xl sm:text-5xl bm:text-6xl max-w-full bm:max-w-screen-xs font-medium text-green-500 mb-16 bm:mb-24 px-6 xs:px-9 sm:px-12 bm:pr-0 bm:px-24"
      >
        The ear1 assurance
      </h2>
      <div class="grid bm:grid-cols-2 gap-8">
        <div class="px-6 xs:px-9 sm:px-12 bm:pr-0 bm:px-24">
          <div class="bm:max-w-sm">
            <template v-for="(datum, index) in data">
              <Timeline
                :total="data.length"
                :index="index + 1"
                :key="datum.title"
                :datum="datum"
              />
            </template>
          </div>
        </div>
        <div
          class="pt-0 pb-20 sm:pb-24 sm:pt-0 bm:pb-32 px-6 xs:px-9 sm:px-12 bm:px-24"
        >
          <img src="/phone-4.png" class="mx-auto w-72 bm:w-96" alt="" />
        </div>
      </div>

      <div
        class="px-6 xs:px-9 sm:px-12 bm:px-24 -mt-60 bm:-mt-40 lg:-mt-52 blg:-mt-64"
      >
        <div
          class="bg-green-400 relative overflow-hidden py-12 md:py-20 bm:pb-0 bm:pt-32 px-6 xs:px-9 sm:px-12 bm:px-24 relative z-20 rounded-p-lg bm:rounded-lg"
        >
          <div class="flex relative z-20">
            <div class="hidden lg:flex flex-col items-end justify-end">
              <img src="/mobile-9.png" alt="" class="" />
            </div>
            <div class="bm:ml-14 w-full bm:pb-32">
              <h2
                class="text-4xl sm:text-5xl bm:text-6xl text-white font-medium xs:text-center bm:text-left"
              >
                Get ahead of your game
              </h2>
              <p class="text-white my-7 xs:text-center bm:text-left text-base">
                Save time and effort. Ear1 is your best choice.
              </p>
              <div class="flex justify-center bm:justify-start">
                <div
                  class="inline-grid gap-4 sm:grid-cols-2 justify-center bm:justify-start flex-wrap items-start"
                >
                  <button
                    class="focus:outline-none transform focus:scale-105 duration-75"
                  >
                    <playstore />
                  </button>
                  <button
                    class="focus:outline-none transform focus:scale-105 duration-75"
                  >
                    <applestore />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <img
            src="/overlay.png"
            class="absolute z-10 object-cover w-full h-full bottom-0 left-0"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "~/components/timeline";
import Playstore from "~/components/icons/playstore";
import Applestore from "~/components/icons/applestore";

export default {
  components: {
    Timeline,
    Playstore,
    Applestore,
  },
  data() {
    return {
      data: [
        {
          title: "Ease of use",
          detail: "With as simple of 3 steps, you can get started using ear1.",
        },
        {
          title: "Multi currency support",
          detail: "Ear1 allows you to pay with a wide range of currencies.",
        },
        {
          title: "Secure communication",
          detail:
            "State of the art end to end encryption of messages. No weird sort of tracking. Your privacy is our concern.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
