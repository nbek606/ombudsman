<template>
  <div class="header">
    <div class="header_block main">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderUser />
        <HeaderLocale />
    </div>
  </div>
</template>
<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header {
    box-sizing: border-box;
    width: 100%;
    background: #023E8A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &_block {
      display: flex;
      height: 44px;
      width: 100%;
      justify-content: space-between;
    }
  }
</style>