<template>
  <div class="flex items-start">
    <div class="flex flex-col items-center">
      <div
        style="border-width: 1px"
        class="border-black w-6 h-6 flex items-center justify-center rounded-full"
      >
        <div class="w-3 h-3 bg-gray-700 rounded-full"></div>
      </div>
      <div
        v-if="index !== total"
        style="width: 1px"
        class="h-32 bg-gray-700"
      ></div>
    </div>
    <div class="ml-7 -mt-1">
      <h3 class="text-3xl text-gray-200">{{ datum.title }}</h3>
      <p class="text-gray-400 mt-3 text-base sm:text-lg">
        {{ datum.detail }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datum: {
      type: Object,
      default: {},
    },
    total: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
