<template>
  <app-header class="header main-layout" />
  <section class="dash main-layout">
    <h1 class="dash-title">My Dashboard</h1>

    <div class="dash-data">
      <div class="container">
        <p class="dash-data-title">Total Rate</p>
        <div class="dash-data-table">
          <div class="dash-rate">
            <p>Average</p>
          </div>
          <p>4.2</p>
        </div>
        <div class="dash-data-table">
          <p>Reviews</p>
          <p>17</p>
        </div>
      </div>
      <div class="container">
        <p class="dash-data-title">Total Revenue</p>
        <div class="dash-data-table">
          <p>Month</p>
          <p>$960</p>
        </div>
        <div class="dash-data-table">
          <p>Year</p>
          <p>$9,580</p>
        </div>
        <div class="dash-data-table">
          <p>Total</p>
          <p>$15,254</p>
        </div>
      </div>
      <div class="container">
        <p class="dash-data-title">Orders Management</p>
        <div class="dash-data-table">
          <p>Total</p>
          <p>37</p>
        </div>
        <div class="dash-data-table">
          <p>Pending</p>
          <p>8</p>
        </div>
        <div class="dash-data-table">
          <p>Approved</p>
          <p>22</p>
        </div>
        <div class="dash-data-table">
          <p>Declined</p>
          <p>7</p>
        </div>
      </div>
      <div class="container">
        <p class="dash-data-title">Guests</p>
        <div class="dash-data-table">
          <p>Active</p>
          <p>3</p>
        </div>
        <div class="dash-data-table">
          <p>Past</p>
          <p>34</p>
        </div>
        <div class="dash-data-table">
          <p>Planned</p>
          <p>5</p>
        </div>
      </div>
    </div>

    <div class="dash-table">
      <section v-if="orders" class="order-list">
        <ul class="dash-table-title">
          <li>Date</li>
          <li>Host</li>
          <li>Stay</li>
          <li>Dates</li>
          <li>Nights</li>
          <li>Guests</li>
          <li>Price/night</li>
          <li>Total</li>
          <li>Status</li>
          <li>Actions</li>
        </ul>

        <div class="orders-container" v-for="order in orders" :key="order._id">
          <ul class="order-line">
            <li>{{ order.date }}</li>
            <li>{{ order.guestName }}</li>
            <li class="ellipsis">{{ order.stay }}</li>
            <li>{{ order.checkIn }} - {{ order.checkOut }}</li>
            <li>{{ order.nights }}</li>
            <li>{{ order.guests }}</li>
            <li>{{ order.price }}</li>
            <li>{{ order.total }}</li>
            <li class="order-status">{{ order.status }}</li>
            <li class="approve-btn">Approve</li>
          </ul>
        </div>
      </section>
    </div>
  </section>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue"
import appFooter from "../components/app-footer.vue"
export default {
  props: {},
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
    }
  },
  methods: {},
  computed: {},
  created() {
    this.orders = this.$store.getters.getOrder;
    console.log("orders from dashhh", this.orders);
  },
  unmounted(){},
}
