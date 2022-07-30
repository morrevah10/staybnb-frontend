<template>
  <app-header class="header main-layout" />
  <main class="login-container">
    <section class="login-signup">
      <div class="login-form">
        <div class="login-form-header">
          <h2>Sign In</h2>
        </div>
        <div class="login-form-body">
          <h1>Welcome Back</h1>
          <input
            v-model="logedInUser.username"
            type="text"
            name="username"
            placeholder="Username"
            class="login-input"
          />
          <input
            v-model="logedInUser.password"
            type="password"
            name="password"
            placeholder="Password"
            class="login-input"
          />
          {{ this.logedInUser }}
          <fancy-btn class="login-btn" @click.prevent="checkLogIn"
            >Login In</fancy-btn
          >
          <div class="signup-move">
            <router-link :to="'/signup'">
              <button type="button" class="signup-btn-move">Sign Up</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import fancyBtn from "../components/fancy-btn.cmp.vue";
import { userService } from "../services/user-service.js";

export default {
  components: {
    appHeader,
    appFooter,
    fancyBtn,
  },
  data() {
    return {
      logedInUser: {
        username: "",
        password: "",
      },
      msg: "",
    };
  },
  methods: {
    async checkLogIn() {
      console.log("check");
      if (!this.logedInUser.username) {
        this.msg = "Please enter username/password";
        return;
      }
      try {
        console.log("try from log in cmp ", this.logedInUser);
        await this.$store.dispatch({
          type: "login",
          userCred: this.logedInUser,
        });

        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
  },
  computed: {},
  created() {
    // this.users=userService.query()
    // console.log("log in from login page created",this.users)
  },
  unmounted() {},
};
</script>
