<template>
  <div class="register">
    <div class="register_title">
      Регистрация
    </div>
    <div class="register_body">
      <BaseInput 
        v-model="form.email"
        label="Email"
      />

      <BaseInput 
        v-model="form.name"
        label="Имя"
      />

      <div class="register_password">
        <BaseInput 
          v-model="form.password"
          label="Пароль"
          :type="passwordInputType"
        />
        <PasswordVisibility 
          @change="isVisibility.password = !isVisibility.password "
        />
      </div>

      <div class="register_password">
        <BaseInput 
          v-model="form.password_confirmation"
          label="Повторите пароль"
          :type="passwordConfirmInputType"
        />
        <PasswordVisibility 
          @change="isVisibility.passwordConfirm = !isVisibility.passwordConfirm"
        />
      </div>

      <BaseButton 
        text="Зарегистрироваться"
        @click="auth"
      />
      <Notification />
    </div>
  </div>
</template>
<script>

import BaseInput from '@/components/widget/BaseInput.vue'
import BaseButton from '@/components/widget/BaseButton.vue'
import PasswordVisibility from '@/components/PasswordVisibility.vue'

export default {
  name: 'Login',
  layout: "empty",
  components: {
    BaseInput,
    BaseButton,
    PasswordVisibility
},
  data () {
    return {
      isVisibility: {
        password: false,
        passwordConfirm: false,
      },
      form: {
        login: '',
        password: ''
      }
    }
  },

  computed: {
    passwordInputType () {
      return this.isVisibility.password ? 'text' : 'password'
    },

    passwordConfirmInputType () {
      return this.isVisibility.passwordConfirm ? 'text' : 'password'
    }
  },

  methods: {
    changeVisibility () {
      this.isVisibility = !this.isVisibility
    },
    async auth () {
      this.$store.dispatch('notification/remove')
      await this.$store.dispatch('auth/register', this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
  .register {
    max-width: 400px;
    margin: auto;
    margin-top: 100px;

    &_password {
      display: flex;
      position: relative;
    }
    
    .password_visibility {
      position: absolute;
      right: 10px;
      bottom: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &_title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>