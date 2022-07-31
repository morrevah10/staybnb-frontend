<template>
  <app-header class="header main-layout" />
  <h1 class="trips-header">My Trips</h1>
  <section v-if="loggedinUser" class="main-layout-homepage">
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
      loggedinUser: null,
      trips: null,
    };
  },
  methods: {},
  computed: {},
  created() {
    let user = this.$store.getters.loggedinUser;
    this.loggedinUser = user;
    let trips = this.$store.getters.getTrips;
    this.trips = trips;
  },
  unmounted() {},
};
</script>
