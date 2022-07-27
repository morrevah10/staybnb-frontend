<template>
  <div class="stay-info">
    <section class="host-summary flex align-center space-between">
      <div>
        <h2 class="host-name">
          {{ stay.propertyType }} Hosted by {{ stay.host.fullname }}
        </h2>
        <p class="host-details">
          {{ stay.capacity }} guests · {{ stay.bedrooms }} bedroom ·
          {{ stay.beds }} beds · {{ stay.bathrooms }} baths
        </p>
      </div>
      <img class="host-img" v-bind:src="`${stay.host.pictureUrl}`" />
    </section>
    <section class="stay-feature-container">
      <div class="feature-block flex">
        <div class="feature-logo">
          <img
            class="material-icons"
            src="../styles/icons/details-icons/park-icon.svg"
            alt=""
          />
        </div>
        <section class="feature-text-area">
          <div class="feature-header">
            <h4 class="feature-header-text">Park for free</h4>
          </div>
          <div>
            <h5 class="feature-text">
              This is one of the few places in the area with free parking.
            </h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <img
            class="material-icons"
            src="../styles/icons/details-icons/check-in-icon.svg"
            alt=""
          />
        </div>
        <section class="feature-text-area">
          <div class="feature-header">
            <h4 class="feature-header-text">Self check-in</h4>
          </div>
          <div>
            <h5 class="feature-text">Check yourself in with the smartlock.</h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <img
            class="material-icons"
            src="../styles/icons/details-icons/location-icon.svg"
            alt=""
          />
        </div>
        <section class="feature-text-area">
          <div class="feature-header">
            <h4 class="feature-header-text">Great location</h4>
          </div>
          <div>
            <h5 class="feature-text">
              100% of recent guests gave the location a 5-star rating.
            </h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <img
            class="material-icons"
            src="../styles/icons/details-icons/cancel-icon.svg"
            alt=""
          />
        </div>
        <section class="feature-text-area">
          <div class="feature-header">
            <h4 class="feature-header-text">Free cancellation for 48 hours.</h4>
          </div>
          <div>
            <h5 class="feature-text">feel free to be flexible</h5>
          </div>
        </section>
      </div>
    </section>
    <h2 class="stay-summary">About this place</h2>
    <p class="summary">{{ stay.summary }}</p>
    <div class="stay-amenities">
      <h2 class="amenities-header">What this place offers</h2>
      <ul class="amenities-list flex">
        <li class="amenitie-container flex" v-for="amenitie in amenities">
          <img
            :src="`/staybnb/src/styles/icons/details-icons/${amenitie.imgUrl}`"
            class="amenitie-img"
          />
          {{ amenitie.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  components: {},
  data() {
    return {
      amenities: [
        {
          name: "Sea view",
          imgUrl: "sea-view-icon.svg",
        },
        {
          name: "Kitchen",
          imgUrl: "kitchen-icon.svg",
        },
        {
          name: "Beach access",
          imgUrl: "beach-access-icon.svg",
        },
        {
          name: "TV",
          imgUrl: "tv-icon.svg",
        },
        {
          name: "Backyard",
          imgUrl: "backyard-icon.svg",
        },
        {
          name: "Refrigerator",
          imgUrl: "refrigerator-icon.svg",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log(this.stay);
  },
  unmounted() {},
};
</script>
