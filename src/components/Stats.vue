<template>
  <div class="primary-bg">
    <div class="stats-container urbanist-font">
      <div class="stats-card" v-for="(stat, index) in stats" :key="index">
        <div class="stats-card-icon-container">
          <div class="stats-card-icon">
            <img src="../components/icons/User3.svg" alt="user-icon" />
          </div>
        </div>
        <div class="stats-card-content">
          {{ stat }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stats: [
        "75% of consumers prefer human interactions to automated interactions.",
        "81% of consumers say a positive customer service experience increases the chances of them making another purchase.",
        "76% of surveyed customers contact customer service over the phone.",
        "68% of buyers will pay more for products and services from a company with a strong record of good customer service.",
      ],
    };
  },
};
</script>
<style></style>
