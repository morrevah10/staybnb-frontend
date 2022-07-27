<template>
  <div class="stay-info">
    <h2 class="stay-name">{{ stay.name }}</h2>
    <section class="short-info flex">
      <section class="flex">
        <img class="star" src="../styles/icons/star.svg" />
        <h5 class="reviews-rating">4.7 ·</h5>
        <h5 class="reviews-number">{{ stay.numOfReviews }} reviews</h5>
        <pre> .</pre>
        <h5 class="location">
          {{ stay.address.city }},
          {{ stay.address.country }}
        </h5>
      </section>
      <section class="flex">
        <div class="share-container">
          <button class="info-btn">
            <img
              class="share-icon"
              src="../styles/icons/details-icons/share-icon.svg"
              alt=""
            />
            <h5 class="share-btn">Share</h5>
          </button>
        </div>
        <div class="save-container">
          <button class="info-btn">
            <span class="save-icon">♡</span>
            <h5 class="save-btn">Save</h5>
          </button>
        </div>
      </section>
    </section>
    <section class="details-gallery grid">
      <img
        :src="`../../img/${imgUrl}`"
        v-for="(imgUrl, idx) in stay.imgUrls"
        :key="idx"
        class="img-gallery"
      />
    </section>
  </div>
</template>
<script>
export default {
  props: {
    stay: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
