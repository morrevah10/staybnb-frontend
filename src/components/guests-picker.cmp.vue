<template>
  <div class="guest-picker" v-click-outside="closeModal">
    <num-input
      class="guest-adults"
      @updateItemsNum="updateAdults"
      title="Adults"
      subtitle="Ages 13 or over"
    />
    <num-input
      class="guest-children"
      @updateItemsNum="updateKids"
      title="Children"
      subtitle="Ages 2-12"
    />
    <num-input
      class="guest-Infants"
      @updateItemsNum="updateInfants"
      title="Infants"
      subtitle="under 2"
    />
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
      guests: {
        adults: 0,
        kids: 0,
        infants: 0,
        total: 0,
      },
    };
  },
  methods: {
    sumGuests() {
      this.guests.total =
        this.guests.adults + this.guests.kids + this.guests.infants;
      this.$emit("guestsUpdate", this.guests);
    },
    updateAdults(num) {
      this.guests.adults = num;
      this.sumGuests();
    },
    updateKids(num) {
      this.guests.kids = num;
      this.sumGuests();
    },
    updateInfants(num) {
      this.guests.infants = num;
      this.sumGuests();
    },
    closeModal() {
      this.$emit("closeGuestsModal");
    },
  },
};
</script>
