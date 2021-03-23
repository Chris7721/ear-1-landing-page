<template>
  <header class="bg-green-400 relative">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between py-6 px-6 xs:px-9 sm:px-12 bm:px-24 relative z-20"
    >
      <div>
        <img src="/logo.png" alt="app logo" />
      </div>
      <div class="hidden md:block">
        <div>
          <nuxt-link class="text-white mr-9" to="#">Home</nuxt-link>
          <nuxt-link class="text-white mr-9" to="#">For fans</nuxt-link>
          <nuxt-link class="text-white mr-9" to="#">For influencers</nuxt-link>
          <nuxt-link class="text-white mr-9" to="#">Features</nuxt-link>
          <nuxt-link class="text-white" to="#">FAQ's</nuxt-link>
        </div>
      </div>
      <div class="block md:hidden text-white">
        <menu-icon class="fill-current" />
      </div>
    </div>
    <img
      src="/overlay.png"
      class="absolute w-full object-cover h-full bottom-0 left-0 z-10"
      alt=""
    />
  </header>
</template>

<script>
import MenuIcon from "~/components/icons/menu-icon";
export default {
  components: {
    MenuIcon,
  },
};
</script>

<style lang="scss" scoped></style>
