<template>
  <div class="guest-picker" v-click-outside="closeModal" >
    <num-input
     :initialValue ="guests.adults"
      @updateItemsNum="updateAdults"
      title="Adults"
      subtitle="Ages 13 or over"
    />
    <num-input
      :initialValue ="guests.kids"
      @updateItemsNum="updateKids"
      title="Children"
      subtitle="Ages 2-12"
   
    />
    <num-input
     :initialValue ="guests.infants"
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
     handleScroll (event) {
         this.$emit("closeGuestsModal");
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  
      this.guests = this.$store.getters.getGuests
    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
