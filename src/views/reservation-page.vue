<template>
  <app-header class="header main-layout" />
  <main class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1 class="reservation-title">Reservation Successfully!</h1>
        <img class="success-img" src="../styles/icons/v-icon.jpg" />
      </div>
      <h3 class="reservation-subtitle">Order Details:</h3>
      <div class="reservation-details">
        <p>Name: {{ loggedinUser.fullName }}</p>
        <p>Location: {{ currOrder.stayPlace }}</p>
        <p>{{ currOrder.stay }} • {{ currOrder.type }}</p>
        <p>Check-in: {{ currOrder.checkIn }}</p>
        <p>Check-out: {{ currOrder.checkOut }}</p>
        <p>Guests: {{ currOrder.guests }}</p>
        <p>Total Price: {{ currOrder.total }}</p>
      </div>
      <router-link :to="'/trips'">
        <button class="trips-btn">Your Trips</button>
      </router-link>
      <p class="final-line bold">Thank you for choosing Staybnb</p>
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
