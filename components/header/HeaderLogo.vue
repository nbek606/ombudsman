<template>
  <div class="header_logo">
    <div class="icon">
      <HeaderLogoIcon />
    </div>
    <div class="text">
      АИС АКЫЙКАТЧЫ
    </div>
  </div>
</template>
<script>

import HeaderLogoIcon from '@/static/svg/header-logo.svg?inline'

export default {
  name: 'HeaderLogo',
  components: {
    HeaderLogoIcon
  }
}
</script>

<style lang="scss" scoped>
  .header_logo {
    display: flex;
    color: #fff;
    align-items: center;

    .icon {
      margin-top: -10px;
    }

    .text {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.07em;
      color: #FFFFFF;
    }
  }
</style>