<template>
  <app-header class="header main-layout" />
  <main v-if="currOrder" class="reservation-container">
    <section class="reservation-page">
      <div class="reservation-header">
        <h1 class="reservation-title">Reservation successfully</h1>
        <img class="success-img" src="../styles/icons/v-icon.jpg" />
      </div>
      <div class="reservation-details flex">
        <div class="details-container">
          <div class="user-message">
            <p class="bold-text">Dear {{ loggedinUser.fullName }},</p>
            <p>You can follow the order status in your trips</p>
          </div>
          <h3 class="sub-title">Reservation details</h3>
          <div class="dates-info">
            <p class="bold-text">Trip dates:</p>
            <p>{{ currOrder.checkIn }} - {{ currOrder.checkOut }}</p>
          </div>
          <div class="guest-info">
            <p class="bold-text">Guests:</p>
            <p>{{ currOrder.guests }}</p>
          </div>
          <div class="price-info">
            <p class="bold-text">Total price:</p>
            <p>{{ currOrder.total }}</p>
          </div>
        </div>
        <div class="img-info">
          <img
            class="reseravaion-img"
            :src="`../../img/${currOrder.stay.imgUrls[0]}`"
          />
          <div class="location-info">
            <p class="bold-text"></p>
            <p>{{ currOrder.stay.address.street }}</p>
          </div>
        </div>
      </div>
      <div class="buttons flex">
        <router-link class="home-router" :to="'/'">
          <button class="home-btn">Back</button>
        </router-link>
        <router-link :to="'/trips'">
          <button class="trips-btn">Trips</button>
        </router-link>
      </div>
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
    return {
      loggedinUser: null,
      // currOrder: null,
    };
  },
  methods: {},
  computed: {
    currOrder() {
      return this.$store.getters.getCurrOrder;
    },
  },
  created() {
    let user = this.$store.getters.loggedinUser;
    console.log("from reservation", user);
    this.loggedinUser = user;
    console.log("from reservation", this.loggedinUser);
    // console.log("mor revah");
    // let order = this.$store.getters.getCurrOrder;
    // console.log("from reservation", order);
    // this.currOrder = order;
    // console.log("from reservation", this.currOrder);
  },
  unmounted() {},
};
</script>
