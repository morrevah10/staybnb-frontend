<template>
  <section class="user-modal-active">
    <div class="user-option">
        <div class="small-line">
            <p>Sign up</p>
            <p>Log in</p>
        </div>
        <div class="small-line">
        <p>Host your home</p>
        <p>Dashboard</p>
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
