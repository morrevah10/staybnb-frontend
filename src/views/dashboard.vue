<template>
  <app-header class="header main-layout" />
  <section class="dash main-layout">
    <h1 class="dash-title">My Dashboard</h1>

    <div class="dash-data">
      <div class="container">
        <p class="dash-data-title">Total Rate</p>
        <div class="dash-data-table">
          <div class="dash-rate">
            <img src="../styles/icons/star.svg" />
            <p>avg</p>
          </div>
          <p>4.2</p>
        </div>
        <div class="dash-data-table">
          <p>reviews</p>
          <p>17</p>
        </div>
      </div>
      <div class="container">
        <p class="dash-data-title">Total Revenue</p>
        <div class="dash-data-table">
          <p>Mounth</p>
          <p>$0</p>
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
        <p class="dash-data-title">Orders management</p>
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
          <li>gest img</li>
          <li>gest name</li>
          <li>check in</li>
          <li>checkOut</li>
          <li>status</li>
          <li>revenue</li>
          <li>action</li>
        </ul>

        <div class="orders-container" v-for="order in orders" :key="order._id">
          <ul class="order-line">
            <li>{{ order.imgUrl }}</li>
            <li>{{ order.guestName }}</li>
            <li>{{ order.checkIn }}</li>
            <li>{{ order.checkOut }}</li>
            <li>{{ order.status }}</li>
            <li>{{ order.revenue }}</li>
            <li>{{ order.action }}</li>
          </ul>
        </div>
        <!-- </div> -->
      </section>
    </div>
  </section>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
export default {
  props: {
    // orders: [
    //   {
    //     _id: "1",
    //     imgUrl: "img",
    //     guestName: "yossi chen",
    //     checkIn: "2016-05-01",
    //     checkOut: "2016-05-03",
    //     status: "panding",
    //     revenue: "$100",
    //     action: "aprove/decline",
    //   },
    //   {
    //     _id: "2",
    //     imgUrl: "img",
    //     guestName: "mor revah",
    //     checkIn: "2016-05-01",
    //     checkOut: "2016-05-03",
    //     status: "panding",
    //     revenue: "$150",
    //     action: "approve/decline",
    //   },
    //   {
    //     _id: "3",
    //     imgUrl: "img",
    //     guestName: "mor revah",
    //     checkIn: "2016-05-01",
    //     checkOut: "2016-05-03",
    //     status: "panding",
    //     revenue: "$150",
    //     action: "approve/decline",
    //   },
    // ],
  },
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      orders: null,
    };
  },
  methods: {},
  computed: {
    orders() {
      let hostOrders = this.$store.getters.getOrder;
      console.log("dash from service ", hostOrders);
      this.orders = hostOrders;
      console.log(this.orders);
    },
  },
  created() {
    this.$store.dispatch({ type: "loadOrders" });
  },
  unmounted() {},
};
</script>
