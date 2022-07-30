<template>
  <!-- <div :class="{ active: isCalendarShown }" class="calendar-modal">
    <calender-spread
      @dateChange="dateUpdate"
      @click.stop
      is-expanded
    ></calender-spread>
  </div>
  <div class="guests-modal" :class="{ active: isGuestModalShown }">
    <guests-picker />
  </div> -->
  <app-header className="details-layout relative" />
  <!-- <mini-filter /> -->
  <section class="stay-details details-wrapper details-layout">
    <section class="details-wrapper" v-if="stay">
      <details-header :stay="stay" />
      <section class="stay-display flex">
        <details-info :stay="stay" />
        <details-modal :stay="stay" @makeReservation="reserve" />
      </section>
      <details-reviews :stay="stay" />
    </section>
  </section>
  <app-footer class="details-layout relative" />
</template>
<script>
import { stayService } from "../services/stay-service";
import miniFilter from "../components/main-filter-mini.cmp.vue";
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";
import detailsHeader from "../components/details-header.vue";
import detailsInfo from "../components/details-info.vue";
import detailsModal from "../components/details-modal.vue";
import detailsReviews from "../components/details-reviews.vue";
import calenderSpread from "../components/calender-spread.vue";
import guestsPicker from "../components/guests-picker.cmp.vue";
import fancyBtn from "../components/fancy-btn.cmp.vue";

export default {
  props: [],
  components: {
    appHeader,
    appFooter,
    detailsHeader,
    detailsInfo,
    detailsModal,
    detailsReviews,
    calenderSpread,
    guestsPicker,
    fancyBtn,
    miniFilter,
  },
  data() {
    return {
      stay: null,
      date: {
        start: null,
        end: null,
      },

      guests: {
        adults: 0,
        children: 0,
        total: 0,
      },

      loggedinUser: null,

      isCalendarShown: false,
      isReserveModal: false,

      stayToOrder: {
        date: null,
        guests: null,
      },
    };
  },
  methods: {
    removeStay() {
      this.$store
        .dispatch({ type: "removeStay", stayId: this.stay._id })
        .then(() => {
          this.$router.push("/stay");
        });
    },
    close() {
      this.isReserveModal = false;
    },
    sumGuests() {
      this.guests.total =
        this.guests.adults + this.guests.children 
    },
    updateAdults(num) {
      this.guests.adults = num;
      this.sumGuests();
    },
    updateChildren(num) {
      this.guests.children = num;
      this.sumGuests();
    },

    dateUpdate(date) {
      this.date = date;
    },
    reserve() {
      this.$store.dispatch({
        type: "sendReservation",
        stay: this.stay,
        reservation: this.stayToOrder,
        user: this.loggedinUser,
      });
      this.isReserveModal = true;
    },
  },
  computed: {
    dateFormat() {
      moment(review.at).format("MMMM YYYY");
    },
    checkInDate() {
      return this.date.start
        ? this.date.start.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        : "Add date";
    },
    checkOutDate() {
      return this.date.end
        ? this.date.end.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        : "Add date";
    },
    totalGuests() {
      return this.guests.total > 0 ? this.guests.total : "1 guest";
    },
    totalGuests() {
      return this.guests.total > 0 ? this.guests.total : "1 guest";
    },
  },
  created() {
    const { stayId } = this.$route.params;
    stayService.getById(stayId).then((displayed) => {
      this.stay = displayed;
    });
    let info = this.$store.getters.getStayToOrder;
    this.stayToOrder.date = info.date;
    this.stayToOrder.guests = info.guests;
    console.log("from stay det created", this.stayToOrder);
    let user = this.$store.getters.loggedinUser;
    this.loggedinUser = user;
    console.log("user created", user);
  },
  unmounted() { },
};
</script>
