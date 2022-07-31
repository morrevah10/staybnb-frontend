<template>
  <app-header class="header main-layout" />
  <section class="my-trips main-layout">
    <h1 class="trips-header">My Trips</h1>
    <div class="trips-table">
      <section v-if="orders" class="trips-list">
        <ul class="trips-table-title">
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

        <div class="trips-container" v-for="order in orders">
          <!-- <h2>{{trip.date}}</h2> -->
          <ul class="trips-line flex">
            <li>{{ order.date }}</li>
            <li>{{ order.host.fullname }}</li>
            <li class="ellipsis">{{ order.stay }}</li>
            <li>{{ order.checkIn }}-{{ order.checkOut }}</li>
            <li>{{ order.nights }}</li>
            <li>{{ order.guests }}</li>
            <li>{{ order.price }}</li>
            <li>{{ order.total }}</li>
            <li class="trip-status">{{ order.status }}</li>
            <button class="cancel">{{ order.action }}</button>
          </ul>
        </div>
      </section>
    </div>

    <section class="trip-order-container" v-for="order in loggedinUser.trips">
      <div class="date">{{ order.date }}</div>
      <div class="booker">{{ order.host.fullname }}</div>
      <div class="stay ellipsis">{{ order.stay }}</div>
      <div class="dates">{{ order.checkIn }} - {{ order.checkOut }}</div>
      <div class="nights">{{ order.nights }}</div>
      <div class="guests">{{ order.guests }}</div>
      <div class="price">{{ order.price }}</div>
      <div class="total">{{ order.total }}</div>
      <div class="status bold">Pending</div>
      <div class="detail actions actions-container">
        <button class="reject-btn">Cancel</button>
      </div>
    </section>
  </section>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
export default {
  props: {},
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      // loggedinUser: null,
      // trips:null,
     
    };
  },
  methods: {},
  computed: {
    orders() {
      console.log(this.$store.getters.getOrders)
      return this.$store.getters.getOrders
      // ?.sort(((a, b) => {
      //   return new Date(b.date) - new Date(a.date)
      // }))
    }
  },
  created() {
    // let user = this.$store.getters.loggedinUser
    // console.log("from trips user", user)
    // this.loggedinUser = user
    // console.log("from trips loggedin user", this.loggedinUser)
    // let trips = this.$store.getters.getTrips
    // console.log("from trips trips", trips)
    // this.trips=trips
    // console.log("from trips trips", this.trips)
    // let orders=this.$store.getters.getOrders;

    // this.$store.dispatch({ type: "loadOrders" })





  },
  unmounted() { },
}
</script>
