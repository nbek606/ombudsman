<template>
  <div class="date_picker">
    <div 
      class="date_picker-input"
      @click="changeCalendar"
    >
      <BaseInput 
        :value="value"
        :label="label"
        :disabled="true"
      />
      <span class="date_picker-icon">
        <CalendarIcon />
      </span>
    </div>
    <div
      v-show="showCalendar"
      class="date_picker-calendar"
    >
      <v-date-picker
        @input="changeValue"
        no-title
        :weekday-format="getDay"
        :month-format="getMonthFormat"
        :header-date-format="getHeaderDateFormat"
        first-day-of-week="1"
        :min="nowDate"
      />
    </div>  
  </div>
</template>

<script>
  import BaseInput from '@/components/widget/BaseInput.vue'
  import CalendarIcon from '@/static/svg/calendar.svg?inline'

  export default {
    name: 'DatePicker',
    components: {
      BaseInput,
      CalendarIcon,
    },

    props: {
      placeholder: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: ''
      }
    },

    data () {
      return {
        showCalendar: false,
        date: '',
        nowDate: new Date().toISOString().slice(0, 10),
      }
    },

    methods: {
      changeCalendar () {
        this.showCalendar = !this.showCalendar
      },

      changeValue (event) {
        this.changeCalendar()
        this.$emit('input', event)
      },

      getDay (date) {
        const daysOfWeek = [
          this.$t('Вс'),
          this.$t('Пн'),
          this.$t('Вт'),
          this.$t('Ср'),
          this.$t('Чт'),
          this.$t('Пт'),
          this.$t('Сб')
        ]
        let i = new Date(date).getDay()
        return daysOfWeek[i]
      },
      getMonthFormat (month) {
        const monthOfYear = [
          this.$t('Январь'),
          this.$t('Февраль'),
          this.$t('Март'),
          this.$t('Апрель'),
          this.$t('Май'),
          this.$t('Июнь'),
          this.$t('Июль'),
          this.$t('Август'),
          this.$t('Сентябрь'),
          this.$t('Октябрь'),
          this.$t('Ноябрь'),
          this.$t('Декабрь')
        ]
        let i = new Date(month).getMonth()
        return monthOfYear[i]
      },
      getHeaderDateFormat (month) {
        const monthOfYear = [
          this.$t('Январь'),
          this.$t('Февраль'),
          this.$t('Март'),
          this.$t('Апрель'),
          this.$t('Май'),
          this.$t('Июнь'),
          this.$t('Июль'),
          this.$t('Август'),
          this.$t('Сентябрь'),
          this.$t('Октябрь'),
          this.$t('Ноябрь'),
          this.$t('Декабрь')
        ]
        let i = new Date(month).getMonth()
        let year = new Date(month).getFullYear()
        return `${monthOfYear[i]} ${year}`
      }
    }
  }
</script>
<style lang="scss" scoped>
  .date_picker {
    &-input {
      position: relative;
      cursor: pointer;
    }

    &-icon {
      position: absolute;
      top: 32px;
      right: 10px;
    }

    &-calendar {
      position: absolute;

      .v-picker {
        border: 1px solid silver;
        border-radius: 10px;
      }
    }
  }
</style>