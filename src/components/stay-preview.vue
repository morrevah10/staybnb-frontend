<template>
  <section class="stay-previews" v-if="stay">
    <!-- <h4 class="stay-num">{{ stay.length }}</h4> -->
    <div @click="$router.push(`/${stay._id}`)" class="stay-preview-card">
      <div class="card-img">
        <el-carousel
          arrow="hover"
          trigger="click"
          :autoplay="false"
          :loop="false"
        >
          <el-carousel-item v-for="img in stay.imgUrls">
            <img class="carousel-img" :src="`../../img/${img}`" />
          </el-carousel-item>
        </el-carousel>
        <img class="heart-icon" src="../styles/icons/heart_icon.svg" alt="" />
      </div>
      <!-- <button class="btn like-btn" @click.stop="LikeStay()"></button> -->
      <div>
        <div class="card-details">
          <div class="stay-header">
            <span class="star-rate">
              <img class="star" src="../styles/icons/star.svg" />
              4.3 ({{ stay.reviews.length }})</span
            >
            <p class="stay-name-preview bold">
              {{ stay.address.city }}, {{ stay.address.country }}
            </p>
          </div>
          <div class="summary-preview">{{ stay.summary }}</div>
          <p class="beds-preview">{{ stay.beds }} beds</p>
          <p class="stay-price-preview">
            <span class="bold">${{ stay.price }} </span> night
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "stay preview",
  props: {
    stay: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    LikeStay() {
      console.log("liked");
    },
  },
  computed: {},
  created() {},
  unmounted() {},
};
</script>
