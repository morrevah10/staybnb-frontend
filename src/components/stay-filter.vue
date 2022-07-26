<template>
  <main-filter-small 
  v-if="!defaultDisplay"
  @openLarge="openLargeFilter"/>

  <Small-nav-bar v-else @toggelModal="openLargeFilter"/>
  <!-- <div class="open-modal" > 
  <div :class="{ 'large-search-modal': defaultDisplay }">
    <main-filter-large class="large-search"/>
  </div>
  </div> -->
  <!-- </main-filter-small>  -->
</template>
<script>
import mainFilterSmall from "./main-filter-small.cmp.vue";
import smallNavBar from "./small-nav-bar.vue";
import SmallNavBar from "./small-nav-bar.vue";

export default {
  components: {
    mainFilterSmall,
    smallNavBar,
    SmallNavBar
},

props: [],
data() {
return {
  defaultDisplay:false
};
},
created() {},
methods: {
  openLargeFilter(){
    this.defaultDisplay = !this.defaultDisplay
    let isOpen = this.defaultDisplay
    console.log("from stay filter",isOpen)
    this.$emit('opemLargeModal',isOpen)

  }
},
computed: {},
unmounted() {},
};
</script>
















<!-- 
<template>
  <router-link v-if="defaultDisplay" :to="'/explore'" class="link">
  <main-filter-small @openLarge="openLargeFilter" ></main-filter-small>
  <main-filter-large v-else="!defaultDisplay" ></main-filter-large> toooo delet
    </router-link>


</template>
<script>
import mainFilterSmall from "./main-filter-small.cmp.vue";
import mainFilterLarge from "./main-filter-large.cmp.vue";

export default {
  components: {
    mainFilterSmall,
    mainFilterLarge
  },

props: [],
data() {
return {
  defaultDisplay:true,
  filterMode: null
};
},
created() {},
methods: {
  openLargeFilter(mode){
    this.defaultDisplay = false
    this.filterMode = mode
  },
  filterUpdate(filterBy){
    console.log('filterBy- in the stay filer cmp', filterBy)
  }
},
computed: {},
unmounted() {},
};
</script> -->

