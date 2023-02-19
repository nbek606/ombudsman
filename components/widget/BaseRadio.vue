<template>
  <div 
    class="base_radio"
  >
    <label
      class="base_radio-label"
      v-if="isShowLabel"
    >
      {{ label }}
    </label>
    <div class="base_radio-item">
      <label 
        v-for="item in options"
        class="base_radio-wrap"
        :key="item.id"
        @click="select(item)"
      >
        <span>
          {{ item.title }}
        </span>
        <input 
          type="radio" 
          name="radio"
        />
        <span 
          class="checkmark" 
        />
      </label>
    </div>  

    <span 
      v-if="required"
      class="required"
    >
      *
    </span>
  </div>
</template>
<script>
export default {
  name: 'BaseRadio',
  props: {
    options: {
      type: [Array],
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number],
      default: ''
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    isShowLabel () {
      return this.showLabel && this.label != ''
    }
  },

  methods: {
    select (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .base_radio {
    margin: 10px 0px;

    &-label {
      font-size: 12px;
      margin-bottom: 0;
      font-weight: 600;
      width: 100%;
    }

    &-item { 
      background: #F5F5F5;
      border: 1px solid #CCCBCB;
      display: inline-block;
      padding: 0px 10px;
      border-radius: 5px; 
      width: calc(100% - 24px);
    }  

    &-wrap {
      display: block;
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      margin: 10px 0;
      font-size: 14px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
      
    &-wrap input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
      
    .checkmark {
      position: absolute;
      top: 4px;
      left: 0;
      height: 15px;
      width: 15px;
      border-radius: 15px;
      background-color: #fff;
      border: 1px solid #AFAEAE;    
    }
      
    &-wrap:hover input ~ .checkmark {
      background-color: #fff;
    }
      
    &-wrap input:checked ~ .checkmark {
      background-color: #fff;
    }
      
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
      
    &-wrap input:checked ~ .checkmark:after {
      display: block;
    }
      
    &-wrap .checkmark:after {
      left: 1.5px;
      top: 1.5px;
      border-radius: 10px;
      width: 10px;
      height: 10px;
      background-color: #AFAEAE;
    }

    .required {
      font-size: 22px;
      margin: 5px 5px;
      color: #FF5400;
    }
  }
</style>