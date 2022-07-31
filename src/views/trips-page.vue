<template>
  <app-header class="header main-layout" />
  <section class="my-trips main-layout">
    <h1 class="trips-header">My Trips</h1>
    <div class="trips-table">
      <section v-if="loggedinUser" class="trips-list">
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

        <div class="trips-container" v-for="trip in trips">
          <ul class="trips-line flex">
            <li>{{ trip.date }}</li>
            <li>{{ trip.host.fullname }}</li>
            <li class="ellipsis">{{ trip.stay }}</li>
            <li>{{ trip.checkIn }}-{{ trip.checkOut }}</li>
            <li>{{ trip.nights }}</li>
            <li>{{ trip.guests }}</li>
            <li>{{ trip.price }}</li>
            <li>{{ trip.total }}</li>
            <li class="trip-status">{{ trip.status }}</li>
            <button class="cancel">{{ trip.action }}</button>
          </ul>
        </div>
      </section>
    </div>
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
