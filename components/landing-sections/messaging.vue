<template>
  <div class="relative ear1-messages" ref="message-box">
    <div
      class="absolute z-10 top-0 left-0 w-full min-h-full bg-transparent grid md:grid-cols-2"
    >
      <div class="left bg-green-500"></div>
      <div class="right bg-gray-100 relative">
        <img
          src="/overlay.png"
          class="absolute z-10 w-full h-full bottom-0 left-0 object-cover"
          alt=""
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 max-w-screen-xl mx-auto relative z-20">
      <div
        class="bg-green-500 py-20 sm:py-24 bm:py-32 px-6 xs:px-9 sm:px-12 bm:px-24 min-h-screen flex items-center"
      >
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <span class="bg-yellow-400 text-sm w-max rounded-2xl px-7 py-1">
              Fans
            </span>
            <div
              class="border-2 border-yellow-400 border-solid p-3 rounded-full flex items-center justify-center"
            >
              <chat-icon />
            </div>
          </div>

          <h2
            class="text-4xl sm:text-5xl bm:text-6xl font-medium text-white my-6 bm:my-8"
          >
            Be assured of replies
          </h2>
          <p class="text-gray-100 text-base sm:text-lg">
            With ear1, we assure you of getting a response to your messages.
            Don’t be part of the noise in the dms. Get ahead of the game by
            paying a small fee.
          </p>
        </div>
      </div>
      <div
        class="px-6 xs:px-9 sm:px-12 bm:px-24 bg-gray-100 relative hidden md:block"
      >
        <div class="relative z-20 flex flex-col justify-between h-full">
          <div class="flex bg-gray-300 items-center p-4">
            <back-icon class="mr-6" />
            <div class="mr-4">
              <img src="/contact.png" alt="contact" />
            </div>
            <p class="font-medium">Chris Ekpenyong</p>
          </div>

          <div>
            <div>
              <div
                class="bg-white p-3 rounded-xl rounded-br-none max-w-xs ml-auto overflow-hidden"
                ref="message-1"
              >
                <p class="text-left">
                  Hey Boss, I am Charles an upcoming producer and I make beats
                  which I’d like you to hear
                </p>
                <span class="text-xs block text-right mt-1"> 9:05pm </span>
              </div>
              <div
                class="bg-white p-3 rounded-xl rounded-bl-none max-w-xs mr-auto mt-6 overflow-hidden"
                ref="message-2"
              >
                <p>Hey, Nice to meet you</p>
                <span class="text-xs block mt-1"> 9:05pm </span>
              </div>
              <div
                class="bg-white p-3 rounded-xl rounded-bl-none max-w-xs mr-auto mt-6 overflow-hidden"
                ref="message-3"
              >
                <p>I’m not looking to hire a producer now</p>
                <span class="text-xs block mt-1"> 9:05pm </span>
              </div>
            </div>

            <div class="p-4 pb-6 bg-white flex items-center mt-12">
              <div class="flex-grow">
                <div
                  class="relative h-14 w-full bg-gray-400 flex items-center justify-between rounded-lg"
                >
                  <div class="ml-4">
                    <span class=""> Sorry, Another time </span>
                  </div>
                  <div class="flex items-center">
                    <attachment class="mr-4" />
                    <microphone class="mr-4" />
                  </div>
                </div>
              </div>
              <div class="ml-3">
                <send-icon />
              </div>
            </div>
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackIcon from "~/components/icons/back-icon";
import ChatIcon from "~/components/icons/chat-icon";
import SendIcon from "~/components/icons/send-message";
import Microphone from "~/components/icons/microphone";
import Attachment from "~/components/icons/attachment";

export default {
  components: {
    BackIcon,
    SendIcon,
    Microphone,
    Attachment,
    ChatIcon,
  },
  data() {
    return {};
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.4 });
  },
  mounted() {
    const tl = gsap.timeline();
    tl.from(this.$refs["message-1"], {
      height: 0,
      display: "hidden",
      delay: 0.2,
      opacity: 0,
    })
      .from(this.$refs["message-2"], {
        height: 0,
        display: "hidden",
        delay: 0.3,
        opacity: 0,
      })
      .from(this.$refs["message-3"], {
        height: 0,
        display: "hidden",
        delay: 0.3,
        opacity: 0,
      });
    ScrollTrigger.create({
      animation: tl,
      trigger: this.$refs["message-box"],
      start: "top 80%",
      // markers: true,
    });
  },
};
</script>

<style scoped></style>
