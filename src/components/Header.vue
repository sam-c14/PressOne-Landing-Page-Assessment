<template>
  <nav>
    <button @click="showNav" class="menu-btn"
      ><img src="../components/icons/menu.svg" alt="menu"
    /></button>
    <div class="nav urbanist-font">
      <div class="nav-logo">
        <img src="../assets/images/PressLogo.svg" alt="logo" />
        <button @click="hideNav"
          ><img src="../components/icons/x-mark.svg" alt="x-mark"
        /></button>
      </div>
      <ul class="nav-links-container font-semibold">
        <li class="nav-links" v-for="(item, index) in headerItems" :key="index"
          ><a :href="item.to">{{ item.text }}</a></li
        >
      </ul>
      <div class="nav-button font-bold">
        <button>Get PressOne</button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      headerItems: [
        {
          to: "/about-us",
          text: "About Us",
        },
        {
          to: "/pricing",
          text: "Pricing",
        },
        {
          to: "/product",
          text: "Product",
        },
        {
          to: "/support",
          text: "Support",
        },
      ],
    };
  },
  methods: {
    showNav() {
      const nav = document.querySelector(".nav");
      nav.classList.add("show-nav");
      document.documentElement.classList.add("hold");
    },
    hideNav() {
      const nav = document.querySelector(".nav");
      nav.classList.remove("show-nav");
      document.documentElement.classList.remove("hold");
    },
  },
};
</script>
<style></style>
