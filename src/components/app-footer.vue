<template>
  <footer class="footer">
    <div class="footer-action flex">
      <p>&copy; 2022 Staybnb</p>
      <pre> · </pre>
      <router-link :to="'/login'" class="link">
        <p>Login</p>
      </router-link>
      <pre> · </pre>
      <router-link :to="'/signup'" class="link">
        <p>Sign Up</p>
      </router-link>
      <pre> · </pre>
      <router-link :to="'/host'" class="link">
        <p>Become a Host</p>
      </router-link>
    </div>
    <div class="footer-details flex">
      <button class="btn flex align-items">
        <img src="/footer-imgs/lan.png" alt="" />
        English
      </button>
      <pre></pre>
      <button class="btn flex align-items">
        <img src="/footer-imgs/dollar.png" alt="" />
        Currency
      </button>
      <pre></pre>
      <router-link :to="'/'" class="link">
        <p>Support</p>
      </router-link>
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
