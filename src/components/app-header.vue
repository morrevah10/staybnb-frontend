<template>
  <section class="header main-layout">
    <router-link :to="'/'" class="link">
      <div class="logo flex">
        <img class="logo-img" src="../styles/icons/air-logo.png" />
        <h1 class="logo-text">Staybnb</h1>
      </div>
    </router-link>
    <stay-filter
      class="filter-header"
      @setFilter="setFilter"
      @opem-large-modal="(isOpen) => openLarge(isOpen)"
    />
    <section class="user-actions flex align-items space-between">
      <div class="host">
        <router-link :to="'/'" class="host-header link"
          >Become a Host</router-link
        >
      </div>
      <section class="user-info flex" @click="openUserModal">
        <button class="menu-btn btn">
          <img class="menu-img" src="../styles/icons/menu-icon.svg" alt="" />
        </button>
        <button class="user-btn btn">
          <img class="user-img" src="../styles/icons/user-icon.svg" alt="" />
        </button>
      </section>
    </section>
  </section>
  <section class="search-modal">
    <div class="open-modal">
      <div>
        <main-filter-large
          :class="isLargeOpen ? 'large-search-modal' : 'large-search'"
        />
      </div>
    </div>
    <div class="open-user-modal main-layout">
      <user-modal :class="isUserModal ? 'user-modal-active' : 'user-modal'" />
    </div>
  </section>
</template>
<script>
import stayFilter from "./stay-filter.vue";
import mainFilterLarge from "./main-filter-large.cmp.vue";
import userModal from "./user-modal.vue";
export default {
  props: [],
  components: {
    mainFilterLarge,
    stayFilter,
    userModal,
  },
  data() {
    return {
      isLargeOpen: false,
      isUserModal: false,
    };
  },
  methods: {
    openLarge(isOpen) {
      this.isLargeOpen = isOpen;
      // this.isLargeOpen=!this.isLargeOpen
      console.log("from header", this.isLargeOpen);
    },
    openUserModal() {
      this.isUserModal = !this.isUserModal;
      console.log("user modal open", this.isUserModal);
    },
  },
  computed: {},
  created() {},
  unmounted() {},
};
</script>
