<template>
  <div class="header_menu">
    <div
      v-for="item in headerMenu"
      :key="item.link"
      @click="changeActiveMenu(item.link)"
    >
      <router-link 
        :to="item.link"
        class="header_menu-item"
        :class="{ 'active': item.link == headerMenuActive}"
      >
        {{ $t(item.title) }}
      </router-link>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'HeaderMenu',
  computed: {
    ...mapGetters({
      headerMenu: 'menu/headerMenu',
      headerMenuActive: 'menu/headerMenuActive'
    })
  },

  methods: {
    changeActiveMenu(link) {
      this.$store.dispatch('menu/headerMenuActive', link)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header_menu {
    display: flex;
    align-items: center;

    &-item {
      display: flex;
      align-items: center;
      height: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
      cursor: pointer;
      padding: 0 25px;
      height: 44px;

      &:hover {
        background: #0077B6;
      }
    }

    .active {
        background: #0077B6;
    }
  }
</style>