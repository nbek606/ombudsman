<template>
  <div 
    class="base_tab"
    :class="{ 'active':  active }"
    @click="$emit('click')"
  >
    {{  title  }} 
  </div>
</template>
<script>
export default {
  name: 'BaseTab',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .base_tab {
    margin-right: 5px;
    background: #D9D9D9;
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #CCCBCB;
    border-radius: 7px 7px 0px 0px;
    display: inline-block;
    height: 33px;
    line-height: 33px;
    padding: 0px 20px;
    align-items: center;
    cursor: pointer;
  }

  .active {
    background: #FFFFFF;
  }
</style>