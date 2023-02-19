<template>
  <div class="incoming">
    <div class="incoming_title">
      {{ $t('Новое письменное обращение') }}
    </div>
    <div class="incoming_block">
      <Appeal />
      <Document />
    </div>
  </div>
</template>
<script>

import Appeal from '@/components/incoming/Appeal.vue'
import Document from '@/components/incoming/Document.vue'

export default {
  name: 'Cases',
  components: {
    Appeal,
    Document
  }
}
</script>
<style lang="scss" scoped>
  .incoming {
    width: 100%;
    background: #F5F5F5;
    padding: 14px;

    &_block {
      display: flex;
      flex-wrap: wrap;
    }

    &_title {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
</style>