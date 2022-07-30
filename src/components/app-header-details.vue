<template>
  <header>
    <section class="details-layout">
      <section class="header-details details-wrapper">
        <router-link :to="'/'" class="link">
          <div class="logo flex">
            <img class="logo-img" src="../styles/icons/air-logo.png" />
            <h1 class="logo-text">Staybnb</h1>
          </div>
        </router-link>
        <main-filter-mini
          class="filter-header"
          @open-large-modal="(isOpen) => openLarge(isOpen)"
        />
        <section class="user-actions flex align-items space-between">
          <div class="host">
            <router-link :to="'/host'" class="host-header link"
              >Become a Host</router-link
            >
          </div>
          <section class="user-info flex" @click="openUserModal">
            <button class="menu-btn btn">
              <img
                class="menu-img"
                src="../styles/icons/menu-icon.svg"
                alt=""
              />
            </button>
            <button class="user-btn btn">
              <img
                v-if="loggedinUser"
                class="user-img"
                :src="loggedinUser.imgUrl"
                alt=""
              />
              <img
                v-else
                class="user-img"
                src="../styles/icons/user-icon.png"
                alt=""
              />
            </button>
          </section>
        </section>
      </section>
    </section>
  </header>
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
import mainFilterMini from "./main-filter-mini.cmp.vue";
import mainFilterLarge from "./main-filter-large.cmp.vue";
import userModal from "./user-modal.vue";
export default {
  props: ["className"],
  components: {
    userModal,
    mainFilterMini,
    mainFilterLarge,
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
    },
    openUserModal() {
      this.isUserModal = !this.isUserModal;
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {},
  unmounted() {},
};
</script>
