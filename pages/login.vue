<template>
  <div class="login">
    <div class="login_title">
      Вход
    </div>
    <div class="login_body">
      <BaseInput 
        v-model="form.email"
        label="Логин или email"
      />

      <div class="login_password">
        <BaseInput 
          v-model="form.password"
          label="Пароль"
          :type="passwordInputType"
        />
        <PasswordVisibility 
          @change="isVisibility = !isVisibility"
        />
      </div>  

      <BaseButton 
        text="Войти"
        @click="auth"
      />
      {{  login  }}
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
      isVisibility: false,
      form: {
        login: '',
        password: ''
      }
    }
  },

  computed: {
    login () {
      return this.$store.getters['auth/token']
    },

    passwordInputType () {
      return this.isVisibility ? 'text' : 'password'
    }
  },

  methods: {
    changeVisibility () {
      this.isVisibility = !this.isVisibility
    },
    async auth () {
      this.$store.dispatch('notification/remove')
      await this.$store.dispatch('auth/login', this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
  .login {
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