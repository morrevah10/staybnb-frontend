<template>
  <section class="user-modal-active">
    <div class="user-nav">
      <div class="small-line">
        <router-link :to="'/signup'" class="link">
          <p class="gray">Sign up</p>
        </router-link>
        <router-link :to="'/login'" class="link">
          <p>Log in</p>
        </router-link>
      </div>
      <div class="small-line">
        <router-link :to="'/host'" class="link">
          <p>Host your home</p>
        </router-link>
        <router-link :to="'/dashboard'" class="link">
          <p>Dashboard</p>
        </router-link>
        <p>Trips</p>
      </div>
      <p>About</p>
      <p>Logout</p>
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
