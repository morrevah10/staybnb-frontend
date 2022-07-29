<!-- <template>
  <div class="stay-app">
    <app-header class="main-layout" />
    <label-list :labels="labels" class="main-layout" />

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
    return {};
  },
  methods: {
    removeStay(stayId) {
      this.$store.dispatch({ type: "removeStay", stayId });
    },
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.staysToDisplay;
    },
    labels() {
      return this.$store.getters.labelToDisplay;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays" }).then(() => {});
    this.$store.dispatch({ type: "loadLabels" }).then(() => {});
  },
  unmounted() {},
};
</script> -->
