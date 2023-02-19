<template>
  <div 
    class="base_select"
  >
    <label
      v-if="isShowLabel"
    >
      {{ label }}
    </label>

    <div class="base_select-item">
      <select
        :value="value"
        @change="select"
      >
        <option 
          v-for="item in options"
          :key="item.id"
          :value="item.id"
        >
          {{ item.title }}
        </option>
      </select>
      <span class="required">
        *
      </span>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
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
    select (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .base_select {
    width: 100%;
    
    label {
      font-size: 12px;
      margin-bottom: 0;
      font-weight: 600;
    }

    &-item {
      display: flex;

      select {
        padding-left: 10px;
        margin: 0;
        font-size: 14px;
        height: 35px;
        border-radius: 5px;
        font-weight: 40;
        border: 1px solid #CCCBCB;
        background: #F5F5F5;
        width: 100%;
      }

      .required {
        font-size: 22px;
        margin: 5px 5px;
        color: #FF5400;
      }
    }
  }
</style>