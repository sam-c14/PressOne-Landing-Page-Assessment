<template>
  <div class="plans">
    <h1 class="recoleta-font font-bolder">Choose a plan that works for you</h1>
    <div class="plans-top urbanist-font">
      <div class="plan-img"
        ><img src="../assets/images/PlanIcon.svg" alt="icon"
      /></div>
      <div class="plan-cards-container">
        <div class="plan-card" v-for="(item, index) in plans" :key="index">
          <h4 class="primary-text font-bold">{{ item.name }}</h4>
          <h3 class="recoleta-font font-bold"
            >N{{ item.amount.toLocaleString("en-US") }}
            <span class="month">/month</span></h3
          >
          <p>{{ item.description }}</p>

          <div class="plan-btn">
            <button class="primary-bg font-bold text-white">{{
              item.cta
            }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="plans-bottom urbanist-font">
      <div class="plans-bottom-table">
        <div class="call-reception secondary-bg">
          <div class="header"><p>Call Reception</p></div>
          <div class="api-items">
            <div v-for="item in plans" :key="item"
              ><p>{{ item.call_reception }}</p></div
            >
          </div>
        </div>
        <div class="calls-per-week"
          ><div class="header"><p>Call Per Week</p></div>
          <div class="api-items">
            <div v-for="item in plans" :key="item"
              ><p>{{ item.calls_per_week }}</p></div
            ></div
          ></div
        >
        <div class="agents secondary-bg"
          ><div class="header"><p>Agents</p></div>
          <div class="api-items">
            <div v-for="item in plans" :key="item"
              ><p>{{ item.agent }}</p></div
            >
          </div></div
        >
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "../api/client";
export default {
  data() {
    return {
      plans: [],
    };
  },
  methods: {
    async getPlans() {
      const plan = await get("9f9dbd97-6294-43a4-ac9f-516639fb5585");
      //   console.log(plan);
      this.plans = plan.data;
    },
  },
  mounted() {
    this.getPlans();
  },
};
</script>
<style></style>
