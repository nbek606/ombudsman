<template>
  <div class="notification">
      <div 
        v-if="notification.type == 'success'"
        class="notification_success"
      >
        {{ notification.text }}
      </div>
      <div 
        v-if="notification.type == 'error'"
        class="notification_error"
      >
      {{ notification.text }}
      </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  computed: {
    notification () {
      return this.$store.getters['notification/list']
    }
  },

  watch: {
    
  }
}
</script>
<style lang="scss" scoped>
  .notification {
    &_success {

    }

    &_error {
      font-size: 14px;
      color: #ce252b;
      background-color:rgb(225,114,114, 0.5);
      border-radius: 5px;
      color: #ce252b;
      padding: 5px 10px;
    }
  }
</style>