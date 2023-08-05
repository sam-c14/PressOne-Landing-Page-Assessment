<template lang="">
  <HeaderVue />
  <div>
    <Hero />
    <Stats />
    <Benefits />
    <Plan />
    <BusinessCard />
    <Footer />
  </div>
</template>
<script>
import HeaderVue from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Stats from "../components/Stats.vue";
import Benefits from "../components/Benefits.vue";
import Plan from "../components/Plan.vue";
import BusinessCard from "../components/BusinessCard.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { HeaderVue, Hero, Stats, Benefits, Plan, BusinessCard, Footer },
  mounted() {
    const navbar = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  },
};
</script>
<style lang=""></style>
