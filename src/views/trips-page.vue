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

        <div class="trips-container" v-for="trip in trips" >
        <!-- <h2>{{trip.date}}</h2> -->
          <ul class="trips-line flex">
            <li>{{ trip.date }}</li>
            <li>{{ trip.host }}</li>
            <li class="ellipsis">{{ trip.stay }}</li>
            <li>{{ trip.checkIn }}-{{trip.checkOut}}</li>
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
            trips:null

      // trips: [
      //   {
      //     _id: "1",
      //     Date: "25/07/22",
      //     Host: "David",
      //     Stay: "Monte dos Burgos",
      //     Dates: "26/07/22 - 27/07/22",
      //     Nights: "1",
      //     Guests: "4",
      //     Price: "$150",
      //     Total: "$150",
      //     Status: "Pending",
      //     Actions: "Cancel",
      //   },
      //   {
      //     _id: "2",
      //     Date: "23/07/22",
      //     Host: "Daniel",
      //     Stay: "Cosy Room",
      //     Dates: "24/07/22 - 25/07/22",
      //     Nights: "1",
      //     Guests: "2",
      //     Price: "$500",
      //     Total: "$100",
      //     Status: "Pending",
      //     Actions: "Cancel",
      //   },
      //   {
      //     _id: "3",
      //     Date: "19/07/22",
      //     Host: "Jaki",
      //     Stay: "Viva Loca",
      //     Dates: "20/07/22 - 22/07/22",
      //     Nights: "2",
      //     Guests: "3",
      //     Price: "$100",
      //     Total: "$200",
      //     Status: "Pending",
      //     Actions: "Cancel",
      //   },
      // ],
    };
  },
  methods: {},
  computed: {
  },
  created() {
    let user = this.$store.getters.loggedinUser
    console.log("from trips user", user)
    this.loggedinUser = user
    console.log("from trips loggedin user", this.loggedinUser)
    let trips = this.$store.getters.getTrips
    console.log("from trips trips", trips)
    this.trips=trips
    console.log("from trips trips", this.trips)





  },
  unmounted() {},
};
</script>
