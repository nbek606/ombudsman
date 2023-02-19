<template>
  <div 
    class="password_visibility"
    @click="changeVisibility"
  >
    <span 
      v-if="!isVisibility"
      class="material-icons password_visibility-icon"
    >
      visibility
    </span>
    <span 
      v-else
      class="material-icons password_visibility-icon"
    >
      visibility_off
    </span>
  </div>
</template>
<script>
export default {
  name: 'PasswordVisibility',
  props: {

  },

  data () {
    return {
      isVisibility: false
    }
  },

  computed: {

  },

  methods: {
    changeVisibility () {
      this.isVisibility = !this.isVisibility
      this.$emit('change', this.isVisibility)
    }
  }
}
</script>