<template>
  <section class="user-modal-active">
    <div class="user-nav">
      <div class="small-line">
        <router-link :to="'/signup'" class="link">
          <p class="signup-menu gray">Sign up</p>
        </router-link>
        <router-link :to="'/login'" class="link">
          <p class="login-menu">Log in</p>
        </router-link>
      </div>
      <div class="small-line">
        <router-link :to="'/host'" class="link">
          <p class="host-menu">Host your home</p>
        </router-link>
        <router-link :to="'/dashboard'" class="link">
          <p class="dashboard-menu">Dashboard</p>
        </router-link>
        <router-link :to="'/trips'" class="link">
          <p class="trips-menu">Trips</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import horizontalLine from "./horizontal-line.cmp.vue";

export default {
  props: {},
  components: {
    horizontalLine,
  },
  data() {
    return {};
  },
  methods: {},
  actions: {},
  computed: {},
  watch: {},
  created() {},
  unmounted() {},
};
</script>
