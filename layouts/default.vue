<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>

import Header from '@/components/header/Header.vue'

export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>