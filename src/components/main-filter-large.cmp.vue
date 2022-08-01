<template>
  <div class="filter-large-modal main-layout" v-click-outside="clickedOutSIde">
    <form class="header-filter" :class="{ filterOn: isFilterOn }">
      <div class="destination-input btn-container">
        <button where-btn @click.prevent="clickedButton" :class="{ activated: activatedBtn === 'destination' }">
          <label>
            <div class="button-title">Where</div>
            <input class="search-input" v-model="filterBy.destination" name="destination-input" type="text"
              placeholder="Search detonations" />
          </label>
        </button>
      </div>
      <span class="separator-line"></span>
      <div class="btn-container flex">
        <button class="date-btn" @click.prevent="onCheckIn" :class="{ activated: activatedBtn === 'checkIn' }">
          <div class="button-title">Check in</div>
          <p class="button-sub">{{ checkInDate }}</p>
        </button>
      </div>
      <span class="separator-line"></span>
      <div class="btn-container flex">
        <button class="date-btn" @click.prevent="onCheckOut" :class="{ activated: activatedBtn === 'checkOut' }"> 
          <div class="button-title">Check out</div>
          <p class="button-sub">{{ checkOutDate }}</p>
        </button>
      </div>
      <span class="separator-line"></span>

      <div class="guest-container btn-container flex"  :class = "{ activated: activatedBtn === 'guestBtn' }">
        <button @click.prevent="onGuestClicked" >
          <div class="button-title margin">Who</div>
          <span class="guests-sum">{{ totalGuests }}</span>
        </button>
        <div @click.prevent="runSearch" class="filter-search">
          <img src="../styles/icons/search_white.png" alt="" />
        </div>
      </div>
    </form>
    <transition>
      <calender-spread class="vc-container" @closeCalendar="isCalendarShown = false" @dateChange="dateUpdate"
        @click.prevent is-expanded v-if="isCalendarShown">
      </calender-spread>
    </transition>

    <transition>
      <guests-picker v-if="isGuestModalShown" @guestsUpdate="updateGuests"
        @closeGuestsModal="isGuestModalShown = false" />
    </transition>
  </div>
</template>

<script>
import guestsPicker from "./guests-picker.cmp.vue";
import calenderSpread from "./calender-spread.vue";

export default {
  // props: {
  //   mode: String,
  // },
  components: {
    guestsPicker,
    calenderSpread,
  },
  data() {
    return {
      filterBy: {
        destination: "",
        numOfGuests: 0,
      },
      date: {
        start: null,
        end: null,
      },
      guests: {
        adults: 1,
        children: 0,
        total: 0,
      },

      isCalendarShown: false,
      isGuestModalShown: false,
      activatedBtn: "",
      isFilterOn: false
      // mode: "destination",
    };
  },
  methods: {
    clickedButton() {
      console.log("clicked")
      this.isFilterOn = true
      this.activatedBtn = "destination"
      this.$emit('openBackdrop')
      // if (this.activatedBtn === "destinationBtn") { 
      //   // this.isFilterOn =false
      //   this.activatedBtn = ""
      // } else {
      //    this.isFilterOn = true
      //    this.activatedBtn = "destinationBtn"
      // }
    },
    runSearch() {
      this.$emit('closeBackdrop')
      this.isFilterOn = false
      this.activatedBtn=""
      if (!this.filterBy.destination.length) return;
      if (this.guests.total === 0) this.filterBy.numOfGuests = 1;
      const copyFilter = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyFilter });
      this.$store.dispatch({
        type: "setStayToOrder",
        date: this.date,
        guests: this.guests,
      })
    },
    onGuestClicked() {
      this.isGuestModalShown =  !this.isGuestModalShown
      console.log('this.isGuestModalShown', this.isGuestModalShown)
      this.$emit('openBackdrop')
      this.activatedBtn = "guestBtn"
      this.isFilterOn = true
    }
    ,
    dateUpdate(newDate) {
      this.date = newDate;
      console.log("in the main filter", this.date);
      this.$store.dispatch({ type: "updateDate", date: this.date });
    },
    updateGuests(newGuests) {
      console.log("NewGuests", newGuests);
      this.guests = newGuests;
      this.$store.dispatch({ type: "updateGuests", guests: this.guests });
      this.filterBy.numOfGuests = this.guests.total;
    },
    deactivateSearchBar() {
      this.activatedBtn = "",
        this.activeNeighbor = []

    },
    onCheckIn() {
      console.log('check in')
      this.isCalendarShown = !this.CalendarShown
      this.isFilterOn = true
      this.activatedBtn = "checkIn"
      this.$emit('openBackdrop')
    },
    onCheckOut() {
      this.isCalendarShown = !this.isCalendarShown
      this.isFilterOn = true
      this.activatedBtn = "checkOut"
      this.$emit('openBackdrop')
    },
    clickedOutSIde(){
      // this.isFilterOn = false
      // this.activatedBtn=""
      // this.$emit('closeBackdrop')

    },
    handleScroll(){
      this.isFilterOn = false
      this.activatedBtn=""
      this.$emit('closeBackdrop')

    }

  },
  actions: {},
  computed: {
    checkInDate() {
      return this.date.start
        ? this.date.start.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        : "Add dates";
    },

    checkOutDate() {
      return this.date.end
        ? this.date.end.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        : "Add dates";
    },
    totalGuests() {
      const { total } = this.$store.getters.getGuests;
      switch (total) {
        case 0:
          return "Add guests";
          break;
        case 1:
          return "1 guest";
          break;
        default:
          return `${total} guests`;
      }
    },
  },
  watch: {},
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
