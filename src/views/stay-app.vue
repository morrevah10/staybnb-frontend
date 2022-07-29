<template>
  <div class="stay-app">
    <app-header class="main-layout" />
    <label-list :labels="labels" class="main-layout" @setLabelFilter="setLabelFilter"/>

    <stay-list @removeStay="removeStay" :stays="stays" class="main-layout" />
    <app-footer class="footer main-layout" />
  </div>
</template>

<script>
import stayList from "../components/stay-list.vue";
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import labelList from "../components/label-list.vue";
import horizontalLine from "../components/horizontal-line.cmp.vue";

export default {
  template: ``,
  components: {
    stayList,
    appHeader,
    appFooter,
    labelList,
    horizontalLine,
  },
  data() {
    return {
      filterBy: null
    };
  },
  methods: {
    removeStay(stayId) {
      this.$store.dispatch({ type: "removeStay", stayId });
    },
    setLabelFilter(filterBy){
      // console.log("filterBy - in the stay app", filterBy)
      const copyFilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyFilter });
    }
  },
  computed: {
    stays() {
      return this.$store.getters.staysToDisplay;
    },
 
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
    // this.$store.dispatch({type: "loadLabels"}).then(()=>{});
  },
  unmounted() {},
};
</script>
