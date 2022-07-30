<template>
  <div>
    <section class="review-details">
      <div class="review-details-header flex">
        <img :src="`${review.by.imgUrl}`" class="review-img" />
        <div class="review-preview-details">
          <h4 class="review-name">{{ review.by.fullname }}</h4>
          <h5 class="review-time">{{ reviewDate }}</h5>
        </div>
      </div>
      <span class="review-txt">{{ review.txt }}</span>
    </section>
  </div>
</template>
<script>
export default {
  name: "stayReview",
  props: {
    review: Object,
  },

  computed: {
    reviewDate() {
      let date = new Date(this.$props.review.at);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    },
  },
};
</script>
