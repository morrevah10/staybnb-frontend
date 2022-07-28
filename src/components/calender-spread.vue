<template>
  <div v-click-outside="closeCalendar">
    <!-- <button class="x-btn" @click.prevent="$emit('closeCalendar')">x</button> -->
    <DatePicker :columns="2" v-model="date" is-range update-on-input />
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
        // startDate: Object
      },
      data() {
        return {
          date: null,
        }
      },
      created() {
        // this.date = this.startDate || new Date()
      },
      watch: {
        date() {
          this.$emit('dateChange', this.date)
        }
      },
      methods: {
        closeCalendar() {
          this.$emit('closeCalendar')
        }
      },
    }
    </script>
