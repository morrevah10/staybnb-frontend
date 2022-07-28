<template>
  <app-header class="header main-layout" />
  <main class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1>Reservation Successfully!</h1>
        <h2>Reservation Details:</h2>
      </div>
      <div class="reservation-details">
        <p>name</p>
        <p>type</p>
        <p>dates</p>
        <p>Guests</p>
        <p>Price</p>
      </div>
      <router-link :to="'/trips'">
        <fancy-btn class="trips-btn">Your Trips</fancy-btn>
      </router-link>
      <p>Thank you for choosing Staybnb</p>
    </section>
  </main>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import fancyBtn from "../components/fancy-btn.cmp.vue";
export default {
  components: {
    appHeader,
    appFooter,
    fancyBtn,
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
