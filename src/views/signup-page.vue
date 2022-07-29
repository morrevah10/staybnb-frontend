<template>
  <app-header class="details-header main-layout" />
  <main class="signup-container">
    <section class="signup-section">
      <from class="signup-form">
        <div class="signup-form-header">
          <h2>Sign Up</h2>
        </div>
        <div class="signup-form-body">
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            class="signup-input"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            class="signup-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="signup-input"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            class="signup-input"
          />
          <fancy-btn class="signup-btn">Sign Up</fancy-btn>
          <div class="login-move">
            <router-link :to="'/login'">
              <button type="button" class="login-btn-move">
                Already have a user
              </button>
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
    return {
          };
  },
  methods: {},
  computed: {},
  created() {

  },
  unmounted() {},
};
</script>
