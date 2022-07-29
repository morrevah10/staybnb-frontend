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
          v-model="logedInUser.fullName"
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
          <fancy-btn class="login-btn" @click="checkLogIn">Login In</fancy-btn>
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
import { userService } from "../services/user-service.js";


export default {
  components: {
    appHeader,
    appFooter,
    fancyBtn,
  },
  data() {
    return {
      logedInUser:{
        fullName:"",
        password:"",
      }
    };
  },
  methods: {
    checkLogIn(){
      console.log("new user after click ",this.logedInUser)
    }
  },
  computed: {
  },
  created() {
    // this.users=userService.query()
    // console.log("log in from login page created",this.users)
  },
  unmounted() {},
};
</script>
