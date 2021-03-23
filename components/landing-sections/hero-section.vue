<template>
  <main class="bg-green-400 relative overflow-hidden">
    <div class="max-w-screen-xl mx-auto min-h-screen relative z-20">
      <div
        class="flex flex-col items-center justify-center max-w-2xl mx-auto px-7 relative z-10"
      >
        <div class="mt-20">
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl text-center"
          >
            Build direct,
          </h1>
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl text-center"
          >
            meaningful
          </h1>
          <h1
            class="text-white font-bold text-5xl sm:text-6xl md:text-8xl text-center"
          >
            connections.
          </h1>
        </div>
        <p class="text-white text-center text-xl font-medium mt-9">
          Ear1 helps you connect directly with your favourite influencers for a
          small fee. What’s more? We assure you of getting a reply.
        </p>
        <div class="mt-14">
          <div class="grid gap-4 md:grid-cols-2 items-center justify-center">
            <button class="w-max h-m">
              <playstore />
            </button>
            <button>
              <applestore />
            </button>
          </div>
        </div>
        <div class="relative z-20 mt-14">
          <div
            class="absolute z-10 bottom-0 -left-2/4 hidden md:block w-96 h-56"
          >
            <img src="/mobile-2.png" class="h-full" alt="" />
          </div>
          <div class="relative z-20 w-full hidden md:block md:w-96">
            <img src="/mobile-1.png" alt="" class="object-cover" />
          </div>
          <div class="relative z-20 w-full md:hidden">
            <img src="/mobile-6.png" alt="" class="object-cover" />
          </div>
          <div
            class="absolute z-10 bottom-0 -right-2/4 hidden md:block w-96 h-56"
          >
            <img src="/mobile-3.png" class="h-full" alt="" />
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
import Playstore from "~/components/icons/playstore";
import Applestore from "~/components/icons/applestore";
export default {
  components: {
    Playstore,
    Applestore,
  },
};
</script>

<style lang="scss" scoped></style>
