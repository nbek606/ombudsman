<template>
  <div class="treatment_data">
    <div class="two_fields">
      <div class="two_fileds-item">
        <BaseSelect 
          :options="appealTypeOptions"
          :label="$t('Тип обращения')"
        />
      </div>
      <div class="two_fileds-item">
        <BaseSelect
          :options="subdivisionOptions"
          :label="$t('Подразделение')"
        />
      </div>
    </div>

    <div class="two_fields">
      <div class="two_fileds-item">
        <BaseSelect 
          :options="appealTypeOptions"
          :label="$t('На имя')"
        />
      </div>
      <div class="two_fileds-item">
        <BaseRadio
          :options="subdivisionOptions"
          :label="$t('Вид обращения')"
          :required="true"
        />
      </div>
    </div>

    <div class="two_fields">
      <div class="two_fileds-item">
        <div class="two_fields">
          <div class="two_fileds-item">
            <DatePicker 
              v-model="form.dateTime"
              :label="$t('Дата, время')"
            />
          </div>
          <div class="two_fileds-item">
            <BaseInput
              :label="$t('Кол-во листов')"
              v-model="form.numberOfSheets"
            />
          </div>
        </div>
      </div>
      <div class="two_fileds-item">
        <BaseSelect 
          :options="appealTypeOptions"
          :label="$t('Канал поступления')"
        />
      </div>
    </div>

    <div class="two_fields">
      <div class="two_fileds-item">
        <div class="two_fields">
          <div class="two_fileds-item">
            <BaseInput
              :label="$t('Регистр.номер')"
              v-model="form.numberOfSheets"
            />
          </div>
          <div class="two_fileds-item">
            <BaseInput
              :label="$t('Исх.номер')"
              v-model="form.numberOfSheets"
            />
          </div>
        </div>
      </div>
      <div class="two_fileds-item">
        <BaseSelect 
          :options="appealTypeOptions"
          :label="$t('Язык обращения')"
        />
      </div>
    </div>

    <div class="two_fields">
      <BaseTextArea 
        :label="$t('Краткое содержание обращение')"
        :required="true"
      />
    </div>

    <div class="two_fields">
      <div class="two_fileds-item">
        <BaseInput
          :label="$t('Регистр.номер')"
          v-model="form.numberOfSheets"
          :required="true"
        />
      </div>
      <div class="two_fileds-item">
        <BaseButton 
          :label="$t('Отрасли права')"
          :text="$t('Выбрать')"
        />
      </div>
    </div>

    <div class="line"/>

    <BaseButton 
      :text="$t('Добавить')"
      :label="$t('Заявитель')"
      :required="true"
    />

    <div class="line"/>

    <BaseButton 
      :text="$t('Добавить')"
      :label="$t('Государственные органы, в отношении к-х жалоба')"
    />

    <div class="line"/>

    <div class="two_fields">
      <div class="two_fileds-item">
        <BaseRadio
          :options="subdivisionOptions"
          :label="$t('Обращение в интересах')"
          :required="true"
        />
      </div> 
    </div>

    <div class="line"/>

    <BaseButton 
      :text="$t('Добавить')"
      :label="$t('Лица, в интересах которых поступило обращение')"
      :required="true"
    />
  </div>
</template>
<script>

import BaseSelect from '@/components/widget/BaseSelect.vue'
import BaseRadio from '@/components/widget/BaseRadio.vue'
import DatePicker from '@/components/widget/DatePicker.vue'
import BaseInput from '@/components/widget/BaseInput.vue'
import BaseTextArea from '@/components/widget/BaseTextArea.vue'
import BaseButton from '@/components/widget/BaseButton.vue'


export default {
  name: "IncomingTreatmentData",
  components: {
    BaseSelect,
    BaseRadio,
    BaseInput,
    DatePicker,
    BaseTextArea,
    BaseButton
  },

  data () {
    return {
      form: {
        appealType: '',
        subdivision: '',
        dateTime: '2019-01-01',
        numberOfSheets: ''
      },

      appealTypeOptions: [
        {
          id: 1,
          title: "Жалоба"
        },
        {
          id: 2,
          title: "Не жалоба"
        }
      ],
      subdivisionOptions: [
        {
          id: 1,
          title: "Представительство по Иссык-Куль"
        },
        {
          id: 2,
          title: "Представительство по Баткен"
        }
      ]
    }
  }
}
</script>