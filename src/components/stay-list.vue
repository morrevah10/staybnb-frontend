<template>

  <section v-if="stays" class="stay-list">
    <div class="cards-container" v-for="stay in stays" :key="stay._id">
      <stay-preview :stay="stay" />
    </div>
  </section>
</template>
<script>
import stayPreview from "./stay-preview.vue";
export default {
  name:'stay-list',
  props: {
    stays: Array,
  },
  components: {
    stayPreview,
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
