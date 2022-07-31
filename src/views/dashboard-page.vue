<template>
  <app-header class="header main-layout" />
  <section class="dash main-layout">
    <h1 class="dashboard-title">My Dashboard</h1>
    <section class="dashboard-stats">
      <div class="cards-dashboard-container">
        <div class="stats-card">
          <h1>Revenue per month</h1>
          <div class="details">
            <div class="rev-stat">
              <span>Average</span>
              <span>4.3</span>
            </div>
            <div class="rev-stat">
              <span>Reviews</span>
              <span>17</span>
            </div>
            <div class="rev-stat">
              <span>Reviews</span>
              <span>17</span>
            </div>
          </div>
        </div>
        <div class="stats-card">
          <h1>Total Revenue</h1>
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
      </div>
      <div class="cards-dashboard-container">
        <div class="stats-card">
          <h1>Orders management</h1>
          <div class="details">
            <div class="rev-stat">
              <span class="stat-head">Cancelations</span>
              <span class="canceled-stat">7.7%</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">Average order revenue</span>
              <span class="total-stat">$2,295</span>
            </div>
            <div class="rev-stat">
              <span class="stat-head">Pending now</span>
              <span class="pending-stat">1 orders</span>
            </div>
          </div>
        </div>
        <div class="stats-card">
          <h1>Orders by nights</h1>
          <div class="rev-stat">
            <span>Active</span>
            <span>1</span>
          </div>
          <div class="rev-stat">
            <span>Past</span>
            <span>3</span>
          </div>
          <div class="rev-stat">
            <span>Planned</span>
            <span>2</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="loggedinUser" class="main-layout-homepage">
      <div class="dashboard-order-container bold">
        <div class="dashboard-title date">Date</div>
        <div class="dashboard-title booker">Booker</div>
        <div class="dashboard-title stay">Stay</div>
        <div class="dashboard-title dates">Dates</div>
        <div class="dashboard-title nights">Nights</div>
        <div class="dashboard-title guests">Guests</div>
        <div class="dashboard-title price">Price / night</div>
        <div class="dashboard-title total">Total</div>
        <div class="dashboard-title status">Status</div>
        <div class="dashboard-title actions">Actions</div>
      </div>

      <section
        class="dashboard-order-container"
        v-for="order in loggedinUser.trips"
      >
        <div class="date">{{ order.date }}</div>
        <div class="booker">{{ order.host.fullname }}</div>
        <div class="stay ellipsis">{{ order.stay }}</div>
        <div class="dates">{{ order.checkIn }} - {{ order.checkOut }}</div>
        <div class="nights">{{ order.nights }}</div>
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
import { orderBy } from "lodash";
export default {
  props: {},
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      loggedinUser: null,
      status: "Pending",
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
    let user = this.$store.getters.loggedinUser;
    this.loggedinUser = user;
  },
  unmounted() {},
};
</script>
