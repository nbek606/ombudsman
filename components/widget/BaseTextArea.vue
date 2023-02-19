<template>
  <div 
    class="base_input"
    id="base_input"
  >
    <label
      v-if="showLabel"
      :for="id"
    >
      {{ label }}
    </label>

    <div class="base_input-item">
      <textarea
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :id="id"
        @input="updateValue"
        :class="requiredClass"
        :disabled="disabled"
      />
      <span 
        class="required_char"
        v-if="required"
      >
        *
      </span>
    </div>  
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: "text",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    requiredClass () {
      const requiredClass = this.$store.getters['globalVariables/get']['requiredClass']
      return this.required ? requiredClass : ''
    }
  },  

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
};
</script>
<style lang="scss">
  .base_input {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;

    label {
      font-size: 12px;
      margin-bottom: 0;
      font-weight: 600;
    }

    &-item {
      display: flex;
      align-items: center;
      width: 100%;
      
      .required_char {
        font-size: 22px;
        margin: 5px 5px;
        color: #FF5400;
      }

      textarea {
        margin: 0;
        font-size: 14px;
        height: 46px;
        border-radius: 5px;
        font-weight: 40;
        border: 1px solid #CCCBCB;
        background: #F5F5F5;
        width: 100%;
        padding: 0px 5px;
      }
    }
  }
</style>