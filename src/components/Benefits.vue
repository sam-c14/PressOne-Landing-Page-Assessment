<template lang="">
  <div class="">
    <div class="benefits-container">
      <div class="benefits-card" v-for="(item, index) in support" :key="index">
        <div class="card-top-bg">
          <div class="benefits-card-icon">
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="benefits-card-bg">
            <img :src="item.bg" alt="icon" />
          </div>
        </div>
        <div class="benefits-card-content">
          <div class="card-body">
            <h1 class="recoleta-font font-bold">{{ item.header }}</h1>

            <ul>
              <li
                class="urbanist-font"
                v-for="(listItem, index) in item.listItems"
                :key="index"
              >
                <span><img :src="item.listIcon" alt="icon" /></span>
                <span>{{ listItem }}</span></li
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="support">
    <div class="head-text">
      <h1>What you get</h1>
    </div>
    <div class="support-container">
      <div class="support-card" v-for="(item, index) in support" :key="index">
        <div class="bg">
          <div class="icon-container">
            <img src="../components/icons/SalesSupportIcon.svg" alt="icon" />
          </div>
          <img src="../assets/images/SalesSupportBg.svg" alt="support-bg" />

          <div class="content secondary-bg urbanist-font">
            <h3 class="recoleta-font">{{ item.header }}</h3>
            <ul>
              <li v-for="(listItem, index) in item.listItems" :key="index"
                ><span
                  ><img src="../components/icons/SalesIcon.svg" alt="icon"
                /></span>
                {{ listItem }}</li
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      support: [
        {
          bg: new URL("../assets/images/SalesSupport2.jpg", import.meta.url),
          icon: new URL(
            "../components/icons/SalesSupportIcon.svg",
            import.meta.url
          ),
          listIcon: new URL(
            "../components/icons/SalesIcon.svg",
            import.meta.url
          ),
          header: "Sales Support",
          listItems: [
            "We handle your enquiries, orders, reservations and help improve your customers experience.",
            "We send a weekly report of custom sales through a personalized dashboard for your business.",
            "You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.",
          ],
        },
        {
          bg: new URL("../assets/images/CustomerSupport2.jpg", import.meta.url),
          icon: new URL(
            "../components/icons/CustomerSupportIcon.svg",
            import.meta.url
          ),
          listIcon: new URL(
            "../components/icons/CustomerIcon.svg",
            import.meta.url
          ),
          header: "Customer Support",
          listItems: [
            "We handle all your customer calls and help them transition through each phase of their customer journey.",
            "We send a weekly report of customer engagement through a personalized dashboard for your business.",
            "You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.",
          ],
        },
      ],
      stats: [
        "75% of consumers prefer human interactions to automated interactions.",
        "81% of consumers say a positive customer service experience increases the chances of them making another purchase.",
      ],
    };
  },
};
</script>
<style lang=""></style>
