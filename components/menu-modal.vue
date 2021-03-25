<template>
  <footer
    class="fixed top-0 left-0 z-50 bg-white min-w-full min-h-screen md:hidden flex flex-col"
  >
    <div class="flex p-3">
      <div class="flex justify-end w-full">
        <div
          class="cursor-pointer flex items-center"
          @click="$emit('close-modal')"
        >
          <span class="mr-3 text-xl text-gray-200">Close </span>
          <cancel-icon />
        </div>
      </div>
    </div>

    <div class="px-3 flex-grow flex justify-center items-center">
      <div>
        <div
          class="py-5 text-center hover:bg-gray-100 text-xl text-gray-200"
          @click="$emit('close-modal')"
        >
          Home
        </div>
        <div
          class="py-5 text-center hover:bg-gray-100 text-xl text-gray-200"
          @click="$emit('close-modal')"
        >
          For fans
        </div>
        <div
          class="py-5 text-center hover:bg-gray-100 text-xl text-gray-200"
          @click="$emit('close-modal')"
        >
          For influencers
        </div>
        <div
          class="py-5 text-center hover:bg-gray-100 text-xl text-gray-200"
          @click="$emit('close-modal')"
        >
          Features
        </div>
        <div
          class="py-5 text-center hover:bg-gray-100 text-xl text-gray-200"
          @click="$emit('close-modal')"
        >
          FAQ's
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CancelIcon from "~/components/icons/cancel-icon";
export default {
  components: {
    CancelIcon,
  },
};
</script>

<style lang="scss" scoped></style>
