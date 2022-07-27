<template>
<div v-click-outside="onClickOutside">
  <button class="x-btn" @click.prevent="$emit('closeCalendar')">x</button>
  <DatePicker :columns="2" v-model="date" is-range update-on-input />
</div>
</template>

    <script>
    import { Calendar, DatePicker } from 'v-calendar';
    import vClickOutside from 'click-outside-vue3'
    
    export default {
      name: 'calendar-spread',
      directives: {
        clickOutside: vClickOutside.directive
      },
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
        onClickOutside(event) {
          console.log('Clicked outside. Event: ', event)
        }
      },
    }
    </script>
