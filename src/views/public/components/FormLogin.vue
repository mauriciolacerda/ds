<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      md="4"
    >
      <base-material-card
        class="v-card-profile"
        avatar="https://webdevolutions.blob.core.windows.net/blog/2019/08/Gartner-Top-10-Security-Projects-2019.png"
      >
        <v-card-text class="text-center">
          <h6 class="display-1 mb-1">
            Faça seu login
          </h6>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              name="email"
              prepend-icon="mdi-account-circle"
              type="text"
              :rules="[rules.required]"
            />
            <v-text-field
              id="password"
              v-model="password"
              label="Senha"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="[rules.required]"
            />
          </v-form>
          <v-btn
            color="primary"
            class="mr-0"
            @click="login"
          >
            Entrar
          </v-btn>
        </v-card-text>
      </base-material-card>
    </v-col>
    <v-snackbar
      v-model="snackbar"
    >
      {{ message }}
      <v-btn
        color="green"
        text
        @click="snackbar = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </v-row>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'FormLogin',
    data: () => ({
      snackbar: false,
      message: '',
      email: '',
      password: '',
      valid: true,
      loader: null,
      loading: false,
      rules: {
        required: value => !!value || 'Obrigatório.',
      },
    }),
    methods: {
      login: function () {
        if (this.$refs.form.validate()) {
          axios.post('https://dropstationapi.herokuapp.com/users/login', {
            email: this.email,
            password: this.password,
          })
            .then(res => {
              if (res.data.success === false) {
                this.snackbar = true
                this.message = res.data.message
              } else {
                this.snackbar = true
                this.message = res.data.message
                localStorage.setItem('auth', res.data.token)
                localStorage.setItem('tokenShopify', res.data.tokenShopify)
                localStorage.setItem('shop', res.data.shop)
                this.$router.push('/')
              }
            })
        }
      },
    },
  }
</script>
