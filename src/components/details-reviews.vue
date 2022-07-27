<template>
  <div class="stay-reviews">
    <h2>★ 4.7 · {{ stay.numOfReviews }} Reviews</h2>
    <div class="review-stats grid">
      <div class="review-ctg flex space-between">
        <label>Cleanliness</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale"></div>
          </div>
          <span class="score">4.7</span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label>Communication</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale"></div>
          </div>
          <span class="score">4.4</span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label>Check-in</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale"></div>
          </div>
          <span class="score">4.5</span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label>Accuracy</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale"></div>
            <div class="scale"></div>
          </div>
          <span class="score">4.2</span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label>Location</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
          </div>
          <span class="score">5.0</span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label>Value</label>
        <div class="flex">
          <div class="gray-scale flex">
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale black"></div>
            <div class="scale"></div>
          </div>
          <span class="score">4.8</span>
        </div>
      </div>
    </div>
    <div class="review-list">
      <ul class="reviews-list-container clean-list">
        <li
          v-for="(review, idx) in stay.reviews"
          :key="idx"
          class="review-preview clean-list"
        >
          <section class="review-details">
            <div class="review-details-header flex">
              <img :src="`${review.by.imgUrl}`" class="review-img" />
              <div class="review-preview-details">
                <h4 class="review-name">{{ review.by.fullname }}</h4>
                <h5 class="review-time">{{ review.at }}</h5>
              </div>
            </div>
            <span class="review-txt">{{ review.txt }}</span>
          </section>
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
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
