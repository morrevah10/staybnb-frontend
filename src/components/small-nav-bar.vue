<template>
  <div class="small-nav">
   
   <div
      class="options"
      @click="isActiveState()"
      :class="{ 'option-active': isActive }"
      >Stays</div
    >
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isActive: true,
      //   isClicked: false,
    };
  },
  created() {},
  methods: {
    isActiveState() {
      this.isActive = !this.isActive;
      if (this.isActive === false) {
        this.$emit("toggelModal");
      }
    },
  },
  computed: {},
  unmounted() {},
  components: {},
};
</script>
