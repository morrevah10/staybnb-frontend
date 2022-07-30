<template>
  <app-header class="header main-layout" />
  <main class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1 class="reservation-title">Reservation Successfully!</h1>
        <h3 class="reservation-subtitle">Reservation Details:</h3>
      </div>
      <div class="reservation-details">
        <p>Name: {{ loggedinUser.fullName }}</p>
        <p>Where to: {{ currOrder.stayPlace }}</p>
        <p>Type: {{ currOrder.stay }} , {{ currOrder.type }}</p>
        <p>Dates: {{ currOrder.checkIn }} - {{ currOrder.checkOut }}</p>
        <p>Guests: {{ currOrder.guests }}</p>
        <p>Price: {{ currOrder.total }}</p>
      </div>
      <router-link :to="'/trips'">
        <button class="trips-btn">Your Trips</button>
      </router-link>
      <p class="final-line">Thank you for choosing Staybnb</p>
    </section>
  </main>
  <app-footer class="footer main-layout" />
</template>
<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      loggedinUser: null,
      currOrder: null,
    };
  },
  methods: {},
  computed: {},
  created() {
    let user = this.$store.getters.loggedinUser;
    console.log("from reservation", user);
    this.loggedinUser = user;
    console.log("from reservation", this.loggedinUser);
    console.log("mor revah");
    let order = this.$store.getters.getCurrOrder;
    console.log("from reservation", order);
    this.currOrder = order;
    console.log("from reservation", this.currOrder);
  },
  unmounted() {},
};
</script>
