<template>
  <div class="stay-app">
    <app-header
      class="main-layout"
      @openBackdrop="openBackdrop"
      @closeBackdrop="isBackdrop = false"
      @result="isResult"
    />

    <label-list v-if="!isResultShow"
      :labels="labels"
      class="main-layout"
      @setLabelFilter="setLabelFilter"
    />
    <div class="result main-layout" v-else>
    {{result}} stays 
    </div>
    <stay-list @removeStay="removeStay" :stays="stays" class="main-layout" />
    <app-footer class="footer main-layout" />
    <div
      v-if="isBackdrop"
      class="backdrop"
      @click.prevent="isBackdrop = false"
    ></div>
  </div>
</template>

<script>
import stayList from "../components/stay-list.vue"
import appHeader from "../components/app-header.vue"
import appFooter from "../components/app-footer.vue"
import labelList from "../components/label-list.vue"
import horizontalLine from "../components/horizontal-line.cmp.vue"

export default {
  template: ``,
  components: {
    appHeader,
    stayList,
    appFooter,
    labelList,
    horizontalLine,
  },
  data() {
    return {
      filterBy: null,
      isBackdrop: false,
      isResultShow: false,
      // loggedinUser:null,
    }
  },
  methods: {
    isResult() {
      this.isResultShow = !this.isResultShow
    },

    removeStay(stayId) {
      this.$store.dispatch({ type: "removeStay", stayId })
    },
    setLabelFilter(filterBy) {
      // console.log("filterBy - in the stay app", filterBy)
      const copyFilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({ type: "setFilter", filterBy: copyFilter })
    },
    openBackdrop() {
      if (!this.isBackdrop) {
        this.isBackdrop = true
      }
    },
  },
  computed: {
    stays() {
      return this.$store.getters.staysToDisplay
    },
    result(){
      return this.$store.getters.getResult
    }
    // loggedinUser(){
    //   return this.$store.getters.loggedinUser
    // }
  },
  created() {
    this.$store.dispatch({ type: "loadStays" })
    this.$store.dispatch({ type: "loadOrders" })

    // this.$store.dispatch({type: "loadLabels"}).then(()=>{});
    // this.loggedinUser =this.$store.getters.loggedinUser
    // console.log("loggedin user from stay app",this.loggedinUser);
  },
  unmounted() {},
}
</script>
