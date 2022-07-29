<template>
  <section class="labels-filter flex">
    <section class="labels-list">
      <div
        class="labels-container"
        v-for="(label, idx) in labels"
        :key="idx"
        @click="onLabelClick(label)">
        <img class="label-img" :src="`${label.src}`"  />
        <p class="label-name">{{ $filters.capitalizeFirstLetter(label.name)}}</p>
      </div>
    </section>
    <div class="filters-btn">
      <button class="labels-filter-btn btn flex" @click.stop="$emit('filters')">
        <img
          src="/lable-img/filter-icon.png"
          
          class="filter-img"
        />Filters
      </button>
    </div>
  </section>
</template>

<script>
// import { labelService } from "../services/label-service.js";
export default {
  name: "label-filter",
  components: {},
  data() {
    return {
      labels: [
        {
          name: "beach",
          src: "/lable-img/beach.jpg",
        },
        {
          name: "tropical",
          src: "/lable-img/tropical.jpg",
        },
        {
          name: "amazing pools",
          src: "/lable-img/pools.jpg",
        },
        {
          name: "creative spaces",
          src: "/lable-img/creative-spaces.jpg",
        },
        {
          name: "shared homes",
          src: "/lable-img/shared_homes.jpg",
        },
        {
          name: "islands",
          src: "/lable-img/island.jpg",
        },
        {
          name: "iconic cities",
          src: "/lable-img/iconic_city.jpg",
        },
        {
          name: "surfing",
          src: "/lable-img/surfing.jpg",
        },
      ],
      activeLabel: ""
    };
  },
  methods: {
    onLabelClick(label){
    this.activeLabel = label.name
    this.$emit('setLabelFilter', label.name)
  },
  },
  created() {},
  unmounted() {},
};
</script>
