<template>
  <footer class="footer">
    <div class="footer-action flex">
      <p clas="copyright">&copy; 2022 Staybnb</p>
      <pre> · </pre>
      <router-link :to="'/login'" class="link">
        <p class="login-footer">Login</p>
      </router-link>
      <pre> · </pre>
      <router-link :to="'/signup'" class="link">
        <p class="signup-footer">Sign Up</p>
      </router-link>
      <pre> · </pre>
      <router-link :to="'/host'" class="link">
        <p class="host-filter">Become a Host</p>
      </router-link>
    </div>
    <div class="footer-details flex">
      <router-link :to="'/trips'" class="link">
        <p>Trips</p>
      </router-link>
      <pre></pre>
      <button class="btn flex align-items">
        <img src="/footer-imgs/lan.png" alt="" />
        English
      </button>
      <pre></pre>
      <button class="btn flex align-items">
        <img src="/footer-imgs/dollar.png" alt="" />
        Currency
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: [],
  template: ``,
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
