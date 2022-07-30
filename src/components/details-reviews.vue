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
          <StayReviewCmp :review="review"></StayReviewCmp>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import stayReview from "./stay-review.cmp.vue";
import StayReviewCmp from "./stay-review.cmp.vue";

export default {
  components: {
    stayReview,
  },
  props: {
    stay: Object,
  },
  components: { StayReviewCmp },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
