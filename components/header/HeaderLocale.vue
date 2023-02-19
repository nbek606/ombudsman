<template>
    <transition>
      <div class="header_locale">
        <div 
          v-for="item in locales"
          :key="item.locale"
          class="header_locale-item"
          :class="{ 'header_locale-active' : $i18n.locale == item.locale  }"
          @click="changeLocale(item.locale)"
        >
          {{ item.title }}
        </div>
      </div>
    </transition>
</template>
<script>
export default {
  name: 'HeaderLocale',

  data () {
    return {
      locales: [
        {
          locale: 'kg',
          title: 'Кырг'
        },
        {
          locale: 'ru',
          title: 'Рус'
        }
      ]
    }
  },

  methods: {
    changeLocale (locale) {
      this.$i18n.locale = locale
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="scss" scoped>
  .header_locale {
    display: flex;
    align-items: center;
    
    &-item {
      text-transform: uppercase;
      color: #fff;
      margin: 0 5px;
      font-weight: 600;
      cursor: pointer;
    }
    
    &-active {
      border-bottom: 2px solid #FFB703
    }
  }
</style>