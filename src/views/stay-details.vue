<template>
  <app-header-details />
  <div class="line-layout"></div>
  <section class="stay-details details-layout">
    <section class="details-wrapper" v-if="stay">
      <details-header :stay="stay" />
      <section class="stay-display flex">
        <details-info :stay="stay" />

        <details-modal :stay="stay" @makeReservation="reserve" />
        
      </section>
      <details-reviews :stay="stay" />
    </section>
  </section>
  <div class="line-layout"></div>
  <app-footer-details />
</template>
<script>
import { stayService } from "../services/stay-service";
import appHeaderDetails from "../components/app-header-details.vue";
import miniFilter from "../components/main-filter-mini.cmp.vue";
import appFooterDetails from "../components/app-footer-details.vue";
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
    appHeaderDetails,
    miniFilter,
    detailsHeader,
    detailsInfo,
    detailsModal,
    detailsReviews,
    appFooterDetails,
    calenderSpread,
    guestsPicker,
    fancyBtn,
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

      // stayToOrder: {
      //   date: null,
      //   guests: null,
      // },
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
      let user = JSON.parse(JSON.stringify(this.$store.getters.loggedinUser))
      this.$store.dispatch({
        type: "sendReservation",
        stay: this.stay,
        reservation: {
          date: this.$store.getters.getDate,
          guests: this.$store.getters.getGuests,
        },
        user: user
       
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
    // totalGuests() {
    //   return this.guests.total > 0 ? this.guests.total : "1 guest";
    // },
  },
  created() {
    const { stayId } = this.$route.params;
    stayService.getById(stayId).then((displayed) => {  //how to write async?
      this.stay = displayed;
    });
    let info = this.$store.getters.getStayToOrder;
    // this.stayToOrder.date = this.$store.getters.getDates;
    // this.stayToOrder.guests = this.$store.getters.getGuests;
    // console.log("from stay det created", this.stayToOrder);
    this.loggedinUser = this.$store.getters.loggedinUser;
  
    console.log("user created", this.loggedinUser);
  },
  unmounted() { },
};
</script>
