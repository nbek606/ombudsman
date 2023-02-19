<template>
  <div class="appeal">
    <div class="appeal_title">
      {{ $t('Обращение')   }}
    </div>
    <div class="appeal_block">
      <div 
        class="appeal_tab"
        v-if="tabActive"
      >
        <BaseTab
          v-for="tab in tabs"
          :key="tab.key"
          :title="$t(tab.title)"
          :active="tab.key == tabActive.key"
          @click="changeTabActive(tab)"
        />

        <div class="appeal_tab-body">
          <component 
            :is="tabActive.component" 
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import BaseTab from '@/components/widget/BaseTab.vue'
import TreatmentData from '@/components/incoming/TreatmentData.vue'
import Applicants from '@/components/incoming/Applicants.vue'
import Persons from '@/components/incoming/Persons.vue'

export default {
  name: "IncomingAppeal",
  components: {
    BaseTab,
    TreatmentData,
    Applicants,
    Persons
  },
  
  data () {
    return {
      tabActive: null,
      tabs: [
        {
          key: 1,
          title: "Данные обращения",
          component: "TreatmentData",
          active: true,
        },
        {
          key: 2,
          title: "Заявители",
          component: "Applicants",
          active: false,
        },
        {
          key: 3,
          title: "Лица",
          component: "Persons",
          active: false,
        }
      ]
    }
  },

  mounted () {
    this.tabActive = this.tabs[0]
  },

  methods: {
    changeTabActive(tab) {
      this.tabActive = tab
    }
  }
}
</script>
<style lang="scss" scoped>
  .appeal {
    width: 50%;

    &_tab {
      margin-top: 7px;

      &-body {
        width: 100%;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #CCCBCB;
        padding: 9px 17px;
      }
    }

    &_title {
      margin-top: 9px;
      box-sizing: border-box;
      background: #E4F8FF;
      border: 1px solid #6795E0;
      padding: 3px 18px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      color: #000000;
    }
  }
</style>
