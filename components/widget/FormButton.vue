<template>
  <div class="form_button">
    <BaseButton 
      :text="text"
      @click="click"
    />
  </div>
</template>
<script>
import BaseButton from '@/components/widget/BaseButton.vue'
import ValidationService from '@/services/ValidationService.js'

export default {
  name: 'FormButton',
  components: {
    BaseButton
  },

  props: {
    text: {
      type: String,
      required: true
    },
    formId: {
      type: String,
      required: true
    }
  },

  methods: {
    click () {
      const valid = ValidationService.formValidation(this.formId)
      console.log(valid)
      if (valid) {
        this.$emit('click')
      }
    }
  }
}
</script>