<template>
  <div class="small-nav">
    <buttom
      class="options"
      @click="isActiveState()"
      :class="{ 'option-active': isActive}"
      >Stays</buttom
    >
    <buttom
      class="options"
      @click="isActiveState()"
      >Experiences</buttom
    >
    <buttom
      class="options"
      @click="isActiveState()"
      >Online Experiences</buttom
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
    }
  },
  created() {},
  methods: {
    isActiveState(){
        this.isActive=!this.isActive;
        if(this.isActive===false){
            this.$emit('toggelModal')
        }
    }
  },
  computed: {},
  unmounted() {},
  components: {},
}
</script>
