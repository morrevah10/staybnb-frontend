<template>
  <div class="stay-app">
    <!-- <app-header class="header-layout main-layout"/> -->
    <app-header-larg class="header-layout main-layout" />
    <!-- <label-list :labels="labels" class="main-layout"/> -->
    <div class="main-layout flex justify-content">
      <main-filter-large class="filter-large " />
    </div>

    <stay-list @removeStay="removeStay" :stays="stays" class="main-layout" />
    <app-footer class="footer-layout main-layout" />
  </div>
</template>

<script>
import stayList from "../components/stay-list.vue"
import appHeader from "../components/app-header.vue"
import appHeaderLarg from "../components/app-header-larg.vue"
import appFooter from "../components/app-footer.vue"
import labelList from "../components/label-list.vue"
import horizontalLine from "../components/horizontal-line.cmp.vue"
import mainFilterLarge from "../components/main-filter-large.cmp.vue"
export default {
  mane: "stay-explore",
  components: {
    stayList,
    appHeader,
    appFooter,
    labelList,
    horizontalLine,
    appHeaderLarg,
    mainFilterLarge,
  },
  data() {
    return {}
  },
  methods: {
    removeStay(stayId) {
      this.$store.dispatch({ type: "removeStay", stayId })
    },
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter))
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter })
    },
  },
  computed: {
    stays() {
      return this.$store.getters.staysToDisplay
    },
    labels() {
      return this.$store.getters.labelToDisplay
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays" }).then(() => {})
    this.$store.dispatch({ type: "loadLabels" }).then(() => {})
  },
  unmounted() {},
}
</script>
