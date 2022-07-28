<template>
  <app-header class="header main-layout" />
  <main class="login-container">
    <section class="login-signup">
      <from class="login-form">
        <div class="login-form-header">
          <h2>Sign In</h2>
        </div>
        <div class="login-form-body">
          <input
            type="text"
            name="username"
            placeholder="Username"
            class="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="login-input"
          />
          <fancy-btn class="login-btn">Login In</fancy-btn>
          <div class="signup-move">
            <router-link :to="'/signup'">
              <button type="button" class="signup-btn-move">Sign Up</button>
            </router-link>
          </div>
        </div>
      </from>
    </section>
  </main>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import fancyBtn from "../components/fancy-btn.cmp.vue";
export default {
  components: {
    appHeader,
    appFooter,
    fancyBtn,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
