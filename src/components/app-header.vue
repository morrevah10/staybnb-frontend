<template>
  <section class="header">
    <router-link :to="'/'" class="link">
      <div class="logo flex">
        <img class="logo-img" src="../styles/icons/air-logo.png" />
        <h1 class="logo-text">Staybnb</h1>
      </div>
    </router-link>
    <stay-filter class="filter-header" @setFilter="setFilter" />
    <section class="user-actions flex align-items space-between">
      <div class="host">
        <router-link :to="'/'" class="host-header link">Become a Host</router-link>
      </div>
      <!-- <button class="btn ">
        <img src="/footer-imgs/lan.png" alt="" />
      </button> -->
      <section class="user-info flex">
        <button class="menu-btn btn">
          <img class="menu-img" src="../../public/footer-imgs/menu.png" alt="" />
        </button>
        <button class="user-btn btn">
          <img class="user-img" src="../../public/footer-imgs/user.png" alt="" />
        </button>
      </section>
    </section>

  </section>
   
  
</template>
<script>
import stayFilter from "./stay-filter.vue"
export default {
  name:'app-header',
  props: [],
  template: ``,
  components: {
    stayFilter,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() { },
  unmounted() { },
}
</script>
