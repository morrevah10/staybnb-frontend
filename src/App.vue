<template>
  <div id="app" class="layout">
    <router-view/>
  </div>
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {};
  },
  methods: {},

  created() {},
  unmounted() {},
};
</script>
