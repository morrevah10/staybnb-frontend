<template>
  <main-filter-small v-if="!defaultDisplay" @openLarge="openLargeFilter" />
  <small-nav-bar v-else @toggelModal="openLargeFilter" />
  <div class="open-modal">
    <div :class="{ 'large-search-modal': defaultDisplay }">
      <main-filter-large class="large-search" />
    </div>
  </div>
  <!-- </main-filter-small> -->
</template>
<script>
import mainFilterLarge from "./main-filter-large.cmp.vue";
import mainFilterSmall from "./main-filter-small.cmp.vue";
import smallNavBar from "./small-nav-bar.vue";
import SmallNavBar from "./small-nav-bar.vue";

export default {
  props:["class"],
  components: {
    mainFilterLarge,
    mainFilterSmall,
    smallNavBar,
    SmallNavBar,
  },

  props: [],
  emits: ['openLargeModal'], 
  data() {
    return {
      defaultDisplay: false,
    };
  },
  created() {},
  methods: {
    openLargeFilter() {
      this.defaultDisplay = !this.defaultDisplay;
      let isOpen = this.defaultDisplay;
      this.$emit("openLargeModal", isOpen);
    },
  },
  computed: {},
  unmounted() {},
};
</script>
