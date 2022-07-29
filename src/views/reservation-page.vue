<template>
  <app-header class="header main-layout" />
  <main class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1 class="reservation-title">Reservation Successfully!</h1>
        <h3 class="reservation-subtitle">Reservation Details:</h3>
      </div>
      <div class="reservation-details">
        <p>Name</p>
        <p>Type</p>
        <p>Dates</p>
        <p>Guests</p>
        <p>Price</p>
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
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
