<template>
  <div class="button_block">
    <label>
      {{  label  }}
    </label>
    <div
      class="base_button"
      @click="clickButton"
    >
      {{ text }}
    </div>
    <span 
      class="required_char"
      v-if="required"
    >
      *
    </span>
  </div>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''  
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    clickButton () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
  .button_block {
    display: inline;
    flex-direction: column;
    flex-wrap: wrap;

    label {
      width: 100%;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .base_button {
      background-color: #00B4D8;
      font-size: 14px;
      display: inline-block;
      height: 33px;
      padding: 0px 15px;
      line-height: 33px;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>