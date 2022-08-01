<template>
  <div v-click-outside="closeCalendar">
  <DatePicker
  :value="null"
  color="gray"
  :columns="2" v-model="date"
  is-range
  update-on-input
  />
    <!-- <DatePicker :columns="2" v-model="date" is-range update-on-input
     /> -->
  </div>
</template>

    <script>
    import { Calendar, DatePicker } from 'v-calendar';

    
    
    export default {
      name: 'calendar-spread',
      components: {
        Calendar,
        DatePicker,
      },
      props: {
        startDate: Object
      },
      data() {
        return {
          date: null,
        }
      },
      created() {
        window.addEventListener('scroll', this.handleScroll);
        this.date = this.$store.getters.getDate


      },
      unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
      },
      watch: {
        date() {
          this.$emit('dateChange', this.date)
        }
      },
    
      methods: {
        closeCalendar() {
          this.$emit('closeCalendar')
        },
        handleScroll(event) {
          this.$emit("closeCalendar");
        }
    
      },
    }
    </script>
