<template>
  <div class="stay-order">
    <div class="order-modal-container">
      <div class="order-modal flex">
        <div class="mini-modal-container">
          <div class="order-form-header flex">
            <div>
              <span class="stay-details-price bold">${{ stay.price }}</span>
              night
            </div>
            <div class="reviews-preview flex">
              <div class="star-preview">
                <img src="../styles/icons/star.svg" class="star" />
              </div>
              <span class="review-avg">4.7</span>·
              <span class="total-reviews">3 reviews</span>
            </div>
          </div>
        </div>
        <form class="order-form">
          <div class="dates-pick flex">
            <div class="date-picker-container-left">
              <button class="check-in" @click.stop="isCalendarShown = !isCalendarShown">
                <div class="order-button">CHECK-IN</div>
                <span class="calender-pick">{{ checkInDate }}</span>
              </button>
            </div>
            <div class="date-picker-container-right">
              <button class="check-out" @click.stop="isCalendarShown = !isCalendarShown">
                <div class="order-button">CHECKOUT</div>
                <span class="calender-pick">{{ checkOutDate }}</span>
              </button>
            </div>
          </div>
          <div class="guest-input">
            <button @click.stop="isGuestModalShown = !isGuestModalShown" class="guests">
              <label class="order-button">GUESTS</label>
              <span class="guest-num">{{ totalGuests }}</span>
              <div class="expand-btn">
                <img src="../styles/icons/expand-more.png" class="expand-more" />
              </div>
            </button>
            <div></div>
          </div>
          <fancy-btn class="reserve-btn" @click="reservation">Reserve</fancy-btn>
          <div class="pricing">
            <p>You won't be charged yet</p>
            <p>
              <span>Price</span>
              <span>${{ $filters.formatNumber(stay.price) }}</span>
            </p>
            <p>
              <span>Service fee</span>
              <span>$25</span>
            </p>
            <p>
              <span>Total</span>
              <span>${{ $filters.formatNumber(stay.price + 25) }}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <transition>
    <calender-spread @closeCalendar="isCalendarShown = false" @dateChange="dateUpdate" @click.prevent is-expanded
      v-if="isCalendarShown">
    </calender-spread>
  </transition>

  <transition>
    <guests-picker v-if="isGuestModalShown" @guestsUpdate="updateGuests"
      @closeGuestsModal="isGuestModalShown = false" />
  </transition>
</template>

<script>
import { stayService } from "../services/stay-service";
import calenderSpread from "../components/calender-spread.vue";
import guestsPicker from "../components/guests-picker.cmp.vue";
import fancyBtn from "../components/fancy-btn.cmp.vue";
import reserveModal from "./reserve-modal.vue";

export default {
  props: {
    stay: Object,
  },
  components: {
    guestsPicker,
    calenderSpread,
    fancyBtn,
    reserveModal,
  },
  data() {
    return {
      date: {
        start: null,
        end: null,
      },

      guests: {
        adults: 0,
        kids: 0,
        infants: 0,
        total: 0,
      },
      isCalendarShown: false,
      isGuestModalShown: false,

    };
  },
  methods: {
    sumGuests() {
      this.guests.total =
        this.guests.adults + this.guests.kids + this.guests.infants;
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
    dateUpdate(date) {
      this.date = date;
    },
    reservation() {
      this.$emit("makeReservation");

      // console.log("modal open",this.isReserveModal)
    },
  },
  computed: {
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
    let stayToOrder = this.$store.getters.getStayToOrder;
    this.date = stayToOrder.date;
    this.guests = stayToOrder.guests;
  },
  unmounted() { },
};
</script>
