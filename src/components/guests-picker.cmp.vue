<template>
  <div v-if="guests" class="guest-picker" v-click-outside="closeModal">
    <num-input :initialValue="guests.adults" class="guest-adults" @updateItemsNum="updateAdults" title="Adults"
      subtitle="Ages 13 or over" />
    <num-input :initialValue="guests.children" class="guest-children" @updateItemsNum="updateChildren" title="Children"
      subtitle="Ages 2-12" />

    <div>
      <button class="x-btn" @click.prevent="$emit('closeGuestsModal')">
        Close
      </button>
    </div>
  </div>
</template>
<script>
import numInput from "./num-input.vue";
export default {
  name: "guests-picker",
  components: {
    numInput,
  },
  data() {
    return {
      guests: null,
    };
  },
  methods: {
    sumGuests() {
      this.guests.total = this.guests.adults + this.guests.children
      this.$store.dispatch({type:'updateGuests', guests:this.guests})
    },
    updateAdults(num) {
      this.guests.adults = num;
      this.sumGuests();
    },
    updateChildren(num) {
      this.guests.children = num;
      this.sumGuests();
    },
    closeModal() {
      this.$emit("closeGuestsModal");
    },
    handleScroll(event) {
      this.$emit("closeGuestsModal");
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    const copyGuests = JSON.parse(JSON.stringify(this.$store.getters.getGuests))
    this.guests = copyGuests
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
