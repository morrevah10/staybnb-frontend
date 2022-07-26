<template>
  <section class="labels-filter flex">
    <button class="labels-control prev" @click.stop="$emit('prev')">
      &#60;
    </button>
    <section  class="labels-list">
      <div class="labels-container" v-for="(label, idx) in labels" :key="idx" @click="">
      <img class="label-img" :src="`${label.src}`" alt="">
        <p class="label-name">{{ label.name }}</p>
      </div>
    </section>
    <!-- <div class="lable-container">here comes lables</div> -->

    <button class="labels-control next" @click.stop="$emit('next')">
      &#62;
    </button>
    <button class="labels-filter-btn btn flex" @click.stop="$emit('filters')">
      <img
        src="../../public/lable-img/filter-icon.png"
        alt=""
        class="filter-img"
      />Filters
    </button>
  </section>
</template>

<script>
import { labelService } from "../services/label-service.js"
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
          src : "../../public/lable-img/beach.jpg",
        },
        {
          name: "castles",
          src : "../../public/lable-img/castles.jpg",
        },
        {
          name: "caves",
          src : "../../public/lable-img/caves.jpg",
        },
        {
          name: "containers",
          src : "../../public/lable-img/containers.jpg",
        },
        {
          name: "creativ-spaces",
          src : "../../public/lable-img/creativ-spaces.jpg",
        },
        {
          name: "desert",
          src : "../../public/lable-img/desert.jpg",
        },
        {
          name: "golf",
          src : "../../public/lable-img/golf.jpg",
        },
        {
          name: "skiing",
          src : "../../public/lable-img/skiing.jpg",
        },
        {
          name: "surfing",
          src : "../../public/lable-img/surfing.jpg",
        },
      ],
    }
  },
  methods: {},

  created() {
  },
  unmounted() {},
}
</script>
