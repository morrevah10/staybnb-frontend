<template>
  <div class="mini-search">
    <button
      value="destination"
      class="mini-filter"
      @click="openSearch('destination')"
    >
      Start your search
      <span class="filter-search-icon">
        <img src="../styles/icons/search_white.png" alt="" />
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: "filter-mini",
  props: {},
  emits: ["openLarge"],
  data() {
    return {};
  },
  created() {},
  methods: {
    openSearch(mode) {
      this.$emit("openLarge", mode);
    },
  },
  computed: {},
  unmounted() {},
  components: {},
};
</script>
