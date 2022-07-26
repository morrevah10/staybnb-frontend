<template>
  <section class="stay-previews" v-if="stay">
    <div @click="$router.push(`/${stay._id}`)" class="stay-preview-card">
      <div class="card-img">
        <el-carousel arrow="hover" trigger="click" interval="0">
          <el-carousel-item v-for="img in stay.imgUrls">
            <img class="carousel-img" :src="`../../img/${img}`" />
          </el-carousel-item>
        </el-carousel>
        <button class="btn like-btn" @click.stop="LikeStay()">
          <img src="../styles/icons/save-icon.svg" alt="" />
        </button>
      </div>
      <div>
        <div class="card-details">
          <div class="stay-header">
            <span class="star-rate">★4.3 ({{ stay.reviews.length }})</span>
            <p class="stay-name-preview bold">
              {{ stay.address.city }}, {{ stay.address.country }}
            </p>
          </div>
          <p class="stay-type-preview">{{ stay.roomType }}</p>
          <p class="beds-num-preview">{{ stay.beds }} beds</p>
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
