<template>
  <app-header class="header main-layout" />
  <main class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1 class="reservation-title">Reservation successfull</h1>
        <img class="success-img" src="../styles/icons/v-icon.jpg" />
      </div>
      <h3 class="reservation-subtitle">Order Details:</h3>
      <div class="reservation-details flex">
        <div class="details-container">
          <div class="user-name flex">
            <p class="bold-text">Name:</p>
            <p>{{ loggedinUser.fullName }}</p>
          </div>
          <div class="location-info flex">
            <p class="bold-text">Location:</p>
            <p>{{ currOrder.adress }}</p>
          </div>
          <div class="checkin-info flex">
            <p class="bold-text">Check-in:</p>
            <p>{{ currOrder.checkIn }}</p>
          </div>
          <div class="checkout-info flex">
            <p class="bold-text">Checkout:</p>
            <p>{{ currOrder.checkOut }}</p>
          </div>
          <div class="guest-info flex">
            <p class="bold-text">Guests:</p>
            <p>{{ currOrder.guests }}</p>
          </div>
          <div class="price-info flex">
            <p class="bold-text">Total price:</p>
            <p>{{ currOrder.total }}</p>
          </div>
        </div>
        <div class="img-info">
          <img
            class="reseravaion-img"
            :src="`../../img/${currOrder.stay.imgUrls[0]}`"
          />
        </div>
      </div>
      <div class="buttons flex">
        <router-link class="home-router" :to="'/'">
          <button class="home-btn">Back</button>
        </router-link>
        <router-link :to="'/trips'">
          <button class="trips-btn">Your trips</button>
        </router-link>
      </div>
      <h5>*Waiting for host approval</h5>
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
