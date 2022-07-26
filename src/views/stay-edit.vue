<template>
  <section class="stay-editor" v-if="stay">
    <form @submit.prevent="saveStay">
      <label for="stay-name">Name: </label>
      <input
        v-model="stay.name"
        id="stay-name"
        type="text"
        placeholder="Enter Stay name"
      />
      <label for="stay-price">Price: </label>
      <input
        v-model="stay.price"
        id="stay-price"
        type="number"
        placeholder="Enter Stay price"
      />
      <button>{{ stay._id ? "Save" : "Add" }}</button>
      <router-link to="/">Back</router-link>
    </form>
  </section>
</template>
<script>
import { stayService } from "../services/stay-service.js";

export default {
  props: [],
  template: ``,
  components: {},
  data() {
    return {
      stay: null,
    };
  },
  methods: {
    saveStay() {
      this.$store
        .dispatch({ type: "saveStay", stay: { ...this.stay } })
        .then((stay) => {
          this.$router.push("/stay");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
  created() {
    const { stayId } = this.$route.params;
    if (stayId) {
      stayService.getById(stayId).then((currStay) => {
        this.stay = JSON.parse(JSON.stringify(currStay));
      });
    } else {
      this.stay = stayService.getEmptyStay();
    }
  },
  unmounted() {},
};
</script>
