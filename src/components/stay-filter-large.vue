<template>
  <!-- <main-filter-small @openLarge="openLargeFilter" v-show="defaultDisplay"></main-filter-small> -->
  <main-filter-large v-show="!defaultDisplay"></main-filter-large>
</template>
<script>
import mainFilterSmall from "./main-filter-small.cmp.vue";
import mainFilterLarge from "./main-filter-large.cmp.vue";

export default {
  name: "stay-filter-large",
  components: {
    mainFilterSmall,
    mainFilterLarge,
  },

  props: [],
  data() {
    return {
      defaultDisplay: true,
    };
  },
  created() {},
  methods: {
    openLargeFilter() {
      this.defaultDisplay = !this.defaultDisplay;
    },
  },
  computed: {},
  unmounted() {},
};
</script>
