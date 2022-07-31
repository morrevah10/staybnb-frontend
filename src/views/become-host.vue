<template>
  <app-header class="header main-layout" />
  <section class="become-host">
    <img src="@/img/become-host.jpg" class="become-host-img" />
    <div class="become-host-info">
      <h1>Open your door to hosting</h1>
      <button>
        <h3>Try hosting</h3>
      </button>
    </div>
  </section>
  <app-footer class="footer main-layout" />
</template>

<script>
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
export default {
  components: {
    appHeader,
    appFooter,
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
