<template>
  <div class="min-w-full">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
html,
body {
  font-family: "DM Sans";
  /* background-color: red; */
}
</style>
