<template>
  <div class="header-search">
    <button value="destination" @click="openSearch">
      Anywhere
    </button>
    <span class="separator-line"></span>
    <button @click="openSearch">Any week</button>
    <span class="separator-line"></span>

    <div class="add-container flex">
      <button
        value="guests"
        class="search-header font flex add-btn"
        @click="openSearch"
      >
        Add guests
      </button>

      <span class="filter-search-icon">
        <img src="../styles/icons/search_white.png" alt="" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "filter-small",
  props: {},
  emits: ["openLarge"],
  data() {
    return {};
  },
  created() {},
  methods: {
    openSearch() {
      this.$emit("openLarge");
      console.log("hello");
    },
  },
  computed: {},
  unmounted() {},
  components: {},
};
</script>
