<template>
  <div class="bg-white overflow-hidden min-h-screen flex items-center relative">
    <div
      class="grid gap-2 md:gap-8 md:grid-cols-2 py-20 sm:py-24 bm:py-32 px-6 xs:px-9 sm:px-12 bm:px-24 max-w-screen-xl w-full min-h-full mx-auto flex-shrink-0"
    >
      <div
        class="flex flex-col w-full md:max-w-lg order-1 mt-0 sm:mt-12 md:mt-0"
      >
        <span class="bg-yellow-400 text-sm w-max rounded-2xl px-7 py-1">
          Fans
        </span>
        <h2
          class="text-4xl sm:text-5xl bm:text-6xl font-medium text-gray-200 my-6 bm:my-8"
        >
          Connect with top influencers in your field
        </h2>
        <p class="text-gray-400 text-base sm:text-lg">
          From Tech to music to business, Ear1 has a wide range of industry
          experts in diverse fields you have always wanted to connect with. Now
          is your best chance.
        </p>
      </div>
      <div class="w-full h-96 order-first md:order-2">
        <div
          class="relative w-72 sm:w-80 h-80 sm:h-96 mx-auto md:ml-auto md:mr-0"
        >
          <template v-for="(person, index) in persons">
            <img
              :src="person.img"
              :key="index"
              :class="`absolute transform object-cover w-72 sm:w-80 h-80 sm:h-96 person-${index} z-${index} `"
              :ref="`img-${index}`"
              alt=""
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      persons: [
        { img: "/people/person-1.jpeg", index: 0 },
        { img: "/people/person-2.jpeg", index: 1 },
        { img: "/people/person-3.jpeg", index: 2 },
        { img: "/people/person-4.jpeg", index: 3 },
        { img: "/people/person-5.jpeg", index: 4 },
      ],
    };
  },
  mounted() {
    setInterval(async () => {
      await this.fakeAsync();
      const removedPerson = this.persons.splice(0, 1);
      this.persons = [...this.persons, ...removedPerson];
      await this.revert();
    }, 2200);
  },
  methods: {
    fakeAsync() {
      return new Promise((resolve) => {
        gsap.timeline().to(this.$refs["img-0"], {
          rotate: "8deg",
          x: 888,
          ease: "power2.inOut",
          duration: 0.5,
        });
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
    revert() {
      return new Promise((resolve) => {
        gsap.timeline().to(this.$refs["img-0"], {
          rotate: "0",
          x: 0,
          ease: "linear",
          duration: 0,
        });
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.person-0,
.person-4 {
  transform: rotate(0);
}
.person-1 {
  transform: rotate(-3deg);
}
.person-2 {
  transform: rotate(3deg);
}
.person-3 {
  transform: rotate(6deg);
}
.z-0 {
  z-index: 4;
}
.z-1 {
  z-index: 3;
}
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 1;
}
.z-4 {
  z-index: 0;
}
</style>
