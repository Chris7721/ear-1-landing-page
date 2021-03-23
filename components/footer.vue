<template>
  <div
    class="bg-white overflow-hidden py-12 sm:py-24 px-6 xs:px-9 sm:px-12 bm:px-24 max-w-screen-xl w-full"
  >
    <div class="max-w-screen-xl mx-auto">
      <div class="grid gap-8 bm:grid-cols-12 flex-shrink-0">
        <div class="col-span-3"></div>
        <div class="col-span-9">
          <p class="text-2xl mb-7">
            <span class="font-semibold">Be in the know.</span> Get access to
            amazing offers and discounts
          </p>
          <div class="flex items-center">
            <input
              type="text"
              class="border-2 border-gray-300 border-r-0 rounded-tl-md rounded-bl-md p-2 flex-grow"
            />
            <button
              class="bg-black text-white py-2 px-6 sm:px-10 border-2 border-black rounded-tr-md rounded-br-md tracking-widest"
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div class="grid gap-8 bm:grid-cols-12 flex-shrink-0">
        <div class="col-span-3">
          <img src="/footer-logo.png" />
          <div class="flex items-center mt-7">
            <div
              class="bg-gray-100 p-3 rounded-full flex items-center justify-center mr-5"
            >
              <facebook />
            </div>
            <div
              class="bg-gray-100 p-3 rounded-full flex items-center justify-center mr-5"
            >
              <twitter />
            </div>
            <div
              class="bg-gray-100 p-3 rounded-full flex items-center justify-center"
            >
              <instagram />
            </div>
          </div>
        </div>
        <div class="col-span-9">
          <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 bm:grid-cols-4">
            <div>
              <h5 class="font-medium text-xl md:text-2xl mb-4">Links</h5>
              <ul>
                <li class="mb-4">Home</li>
                <li class="mb-4">For fans</li>
                <li class="mb-4">For influencers</li>
                <li class="">FAQ's</li>
              </ul>
            </div>
            <div>
              <h5 class="font-medium text-xl md:text-2xl mb-4">Links</h5>
              <ul>
                <li class="mb-4">Home</li>
                <li class="mb-4">For fans</li>
                <li class="mb-4">For influencers</li>
                <li class="">FAQ's</li>
              </ul>
            </div>
            <div>
              <h5 class="font-medium text-xl md:text-2xl mb-4">Links</h5>
              <ul>
                <li class="mb-4">Home</li>
                <li class="mb-4">For fans</li>
                <li class="mb-4">For influencers</li>
                <li class="">FAQ's</li>
              </ul>
            </div>
            <div>
              <h5 class="font-medium text-xl md:text-2xl mb-4">Links</h5>
              <ul>
                <li class="mb-4">Home</li>
                <li class="mb-4">For fans</li>
                <li class="mb-4">For influencers</li>
                <li class="">FAQ's</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from "~/components/icons/facebook";
import Twitter from "~/components/icons/twitter";
import Instagram from "~/components/icons/instagram";
import FooterLogo from "~/components/icons/footer-logo";
export default {
  components: {
    Facebook,
    Twitter,
    Instagram,
    FooterLogo,
  },
};
</script>

<style lang="scss" scoped></style>
