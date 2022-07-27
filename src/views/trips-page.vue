<template>
  <app-header class="details-header header-layout main-layout" />
  <section class="my-trips main-layout">
    <h1 class="trips-header">My Trips</h1>
    <div class="trips-table">
      <section v-if="trips" class="trips-list">
        <ul class="dash-table-title">
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

        <div class="trips-container" v-for="trip in trips" :key="trip._id">
          <ul class="order-line">
            <li>{{ trip.Date }}</li>
            <li>{{ trip.Host }}</li>
            <li>{{ trip.Stay }}</li>
            <li>{{ trip.Dates }}</li>
            <li>{{ trip.Nights }}</li>
            <li>{{ trip.Guests }}</li>
            <li>{{ trip.Price }}</li>
            <li>{{ trip.Total }}</li>
            <li>{{ trip.Status }}</li>
            <li>{{ trip.Actions }}</li>
          </ul>
        </div>
      </section>
    </div>
  </section>
  <app-footer class="footer footer-layout main-layout" />
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
      orders: [
        {
          _id: "1",
          Date: "19/07/22",
          Host: "David",
          Stay: "Apartment",
          Dates: "20/07/22 - 22/07/22",
          Nights: "panding",
          Guests: "$100",
          Price: "aprove/decline",
          Total: "",
          Status: "",
          Actions: "",
        },
        {
          _id: "2",
          Date: "22/07/22",
          Host: "Daniel",
          Stay: "Apartment",
          Dates: "25/07/22 - 26/07/22",
          Nights: "panding",
          Guests: "$100",
          Price: "aprove/decline",
          Total: "",
          Status: "",
          Actions: "",
        },
        {
          _id: "3",
          Date: "img",
          Host: "yossi chen",
          Stay: "2016-05-01",
          Dates: "2016-05-03",
          Nights: "panding",
          Guests: "$100",
          Price: "aprove/decline",
          Total: "",
          Status: "",
          Actions: "",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
