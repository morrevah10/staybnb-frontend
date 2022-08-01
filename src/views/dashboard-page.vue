<template>
  <app-header class="header main-layout" />
  <section class="dash main-layout">
    <h1 class="dashboard-title">My Dashboard</h1>
    <section class="dashboard-stats">
      <div class="cards-dashboard-container">
        <div class="bar-container">
          <h1 class="bar-header">Revenue per month</h1>
          <bar-chart :chartData="chartData"></bar-chart>
        </div>
        <div class="stats-card">
          <h1>Total revenue</h1>
          <div class="details">
            <div class="rev-stat">
              <span class="stat-head">This Month</span>
              <span>$302</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">This Year</span>
              <span>$1,553</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">Total Income</span>
              <span>$1,553</span>
            </div>
          </div>
        </div>
        <div class="stats-card">
          <h1>Orders management</h1>
          <div class="details">
            <div class="rev-stat">
              <span class="stat-head">Cancelations</span>
              <span class="canceled-stat">7.7%</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">Average revenue</span>
              <span class="total-stat">$2,295</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">Pending now</span>
              <span class="pending-stat">1 orders</span>
            </div>
          </div>
        </div>
        <div class="pie-container">
          <h1 class="pie-header">Orders by nights</h1>
          <awesome-chart :testData="testData"></awesome-chart>
        </div>
      </div>
    </section>
    <section v-if="orders" class="main-layout-homepage">
      <div class="dashboard-order-container bold">
        <div class="dashboard-title date">Date</div>
        <div class="dashboard-title booker">Booker</div>
        <div class="dashboard-title stay">Stay</div>
        <div class="dashboard-title dates">Dates</div>
        <div class="dashboard-title guests">Guests</div>
        <div class="dashboard-title price">Price / night</div>
        <div class="dashboard-title total">Total</div>
        <div class="dashboard-title status">Status</div>
        <div class="dashboard-title actions">Actions</div>
      </div>

      <section class="dashboard-order-container" v-for="order in orders">
        <div class="date">
          {{ new Date(order.date).toLocaleDateString("en-GB") }}
        </div>
        <div class="booker ellipsis">{{ order.guestName }}</div>
        <div class="stay ellipsis">{{ order.stay.name }}</div>
        <div class="dates">{{ order.checkIn }} - {{ order.checkOut }}</div>
        <div class="guests">{{ order.guests }}</div>
        <div class="price">{{ order.price }}</div>
        <div class="total">{{ order.total }}</div>
        <div class="status">{{ this.status }}</div>
        <div class="detail actions actions-container">
          <button class="approve-btn" @click="changeStatus()">Approve</button>
          <button class="reject-btn">Reject</button>
        </div>
      </section>
    </section>
  </section>
  <app-footer class="footer main-layout" />
</template>
<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import awesomeChart from "../components/awesome-chart.vue";
import { BarChart } from "vue-chart-3";

export default {
  props: {},
  components: {
    awesomeChart,
    appHeader,
    appFooter,
    BarChart,
  },
  data() {
    return {
      loggedinUser: null,
      status: "Pending",
      order: null,
      testData: {
        labels: ["Active", "Past", "Planned"],
        datasets: [
          {
            data: [1, 3, 2],
            backgroundColor: ["#00811e", "#9d0001", "navy"],
          },
        ],
        options: {
          legend: {
            display: false,
          },
        },
      },
      chartData: {
        labels: ["May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            data: [302, 550, 420, 220],
            backgroundColor: ["gray", "gray", "gray", "gray"],
          },
        ],
        options: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
  mutations: {
    changeStatus() {
      this.status = this.$store.getters.getStatus;
    },
  },
  methods: {},
  computed: {},
  created() {
    // let orders = this.$store.getters.getOrders;
    // this.orders = orders;
    // console.log("from dashhh",this.orders)
    // let user = this.$store.getters.loggedinUser
    // console.log("from dash user", user)
    // this.loggedinUser = user
    // console.log("from dash loggedin user", this.loggedinUser)
  },
  unmounted() {},
};
</script>
