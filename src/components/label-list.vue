<template>
  <section class="labels-filter flex">
    <!-- <button class="labels-control prev flex" @click.stop="$emit('prev')">
      &#60;
    </button> -->
    <section class="labels-list">
      <div
        class="labels-container"
        v-for="(label, idx) in labels"
        :key="idx"
        @click=""
      >
        <img class="label-img" :src="`${label.src}`" alt="" />
        <p class="label-name">{{ label.name }}</p>
      </div>
    </section>
    <!-- <div class="lable-container">here comes lables</div> -->
    <div class="filters-btn">
      <!-- <button class="labels-control next flex" @click.stop="$emit('next')">
        &#62;
      </button> -->
      <button class="labels-filter-btn btn flex" @click.stop="$emit('filters')">
        <img
          src="/lable-img/filter-icon.png"
          alt=""
          class="filter-img"
        />Filters
      </button>
    </div>
  </section>
</template>

<script>
import { labelService } from "../services/label-service.js";
export default {
  name: "label-filter",
  props: {
    // labels: Array,
  },
  components: {},
  data() {
    return {
      labels: [
        {
          name: "beach",
          src: "/lable-img/beach.jpg",
        },
        {
          name: "castles",
          src: "/lable-img/castles.jpg",
        },
        {
          name: "caves",
          src: "/lable-img/caves.jpg",
        },
        {
          name: "containers",
          src: "/lable-img/containers.jpg",
        },
        {
          name: "creative-spaces",
          src: "/lable-img/creativ-spaces.jpg",
        },
        {
          name: "desert",
          src: "/lable-img/desert.jpg",
        },
        {
          name: "golf",
          src: "/lable-img/golf.jpg",
        },
        {
          name: "skiing",
          src: "/lable-img/skiing.jpg",
        },
        {
          name: "surfing",
          src: "/lable-img/surfing.jpg",
        },
      ],
    };
  },
  methods: {},

  created() {},
  unmounted() {},
};
</script>
