<template>
  <app-header class="header main-layout" />
  <section class="my-trips main-layout">
    <h1 class="trips-header">My Trips</h1>
    <div class="trips-table">
      <section v-if="trips" class="trips-list">
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

        <div class="trips-container" v-for="trip in trips" :key="trip._id">
          <ul class="trips-line flex">
            <li>{{ trip.Date }}</li>
            <li>{{ trip.Host }}</li>
            <li class="ellipsis">{{ trip.Stay }}</li>
            <li>{{ trip.Dates }}</li>
            <li>{{ trip.Nights }}</li>
            <li>{{ trip.Guests }}</li>
            <li>{{ trip.Price }}</li>
            <li>{{ trip.Total }}</li>
            <li class="trip-status">{{ trip.Status }}</li>
            <button class="cancel">{{ trip.Actions }}</button>
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
      trips: [
        {
          _id: "1",
          Date: "25/07/22",
          Host: "David",
          Stay: "Monte dos Burgos",
          Dates: "26/07/22 - 27/07/22",
          Nights: "1",
          Guests: "4",
          Price: "$150",
          Total: "$150",
          Status: "Pending",
          Actions: "Cancel",
        },
        {
          _id: "2",
          Date: "23/07/22",
          Host: "Daniel",
          Stay: "Cosy Room",
          Dates: "24/07/22 - 25/07/22",
          Nights: "1",
          Guests: "2",
          Price: "$500",
          Total: "$100",
          Status: "Pending",
          Actions: "Cancel",
        },
        {
          _id: "3",
          Date: "19/07/22",
          Host: "Jaki",
          Stay: "Viva Loca",
          Dates: "20/07/22 - 22/07/22",
          Nights: "2",
          Guests: "3",
          Price: "$100",
          Total: "$200",
          Status: "Pending",
          Actions: "Cancel",
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
