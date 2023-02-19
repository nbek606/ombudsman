<template>
  <div class="header_user">
    <div class="header_user-title">
      <div class="header_user-img">
        <img src="@/static/img/user.png">
      </div>
      <div class="header_user-name">
        Айгуль Чалова
      </div>
      <div class="header_user-arrow">
        <UserArrowIcon />
      </div>
    </div>
    <div class="header_user-dropdown">
      Dropdown
    </div>
  </div>
</template>
<script>
import UserArrowIcon from '@/static/svg/arrow.svg?inline'

export default {
  name: "HeaderUser",
  components: {
    UserArrowIcon
  }
}
</script>
<style lang="scss" scoped>
  .header_user {
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 40px;

    &-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-img {

    }

    &-name {
      color: #fff;
      font-size: 14px;
      padding:0 5px;
    }

    &-arrow {

    }

    &-dropdown {
      display: none;
    }
  }
</style>