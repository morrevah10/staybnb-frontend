<template>
  <app-header class="header main-layout" />
  <h1 class="trips-header main-layout">My Trips</h1>
  <section v-if="orders" class="main-layout-homepage main-layout">
    <div class="trip-order-container bold">
      <div class="trip-title date">Date</div>
      <div class="trip-title booker">Host</div>
      <div class="trip-title stay">Stay</div>
      <div class="trip-title dates">Dates</div>
      <div class="trip-title nights">Nights</div>
      <div class="trip-title guests">Guests</div>
      <div class="trip-title price">Price / night</div>
      <div class="trip-title total">Total</div>
      <div class="trip-title status">Status</div>
      <div class="trip-title actions">Actions</div>
    </div>

    <section class="trip-order-container main-layout" v-for="order in orders">
      <div class="date">
        {{ new Date(order.date).toLocaleDateString("en-GB") }}
      </div>
      <div class="booker ellipsis">{{ order.host.fullname }}</div>
      <div class="stay ellipsis">{{ order.stay.name }}</div>
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
      // console.log(this.$store.getters.getOrders)
      return this.$store.getters.getOrders;
      // ?.sort(((a, b) => {
      //   return new Date(b.date) - new Date(a.date)
      // }))
    },
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
  unmounted() {},
};
</script>
