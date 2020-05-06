<template>
  <v-app id="inspire">
      <v-container
        class="fill-height"
        fluid
      >
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
              avatar="https://miro.medium.com/max/2800/0*ZD46espMv6HDM-fH.jpg"
              min-height="360"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">
                  Plataforma DropStation
                </h6>
                <h4 class="display-2 font-weight-light mb-3 black--text">
                  Seja Bem Vindo
                </h4>
                <p class="font-weight-light grey--text">
                  Somos o vetor de transformação da sua empresa de DropShipping. Caso ainda não seja um usuário, clique no botão abaixo e conheça nossos planos.
                </p>
                <v-btn
                  color="secondary"
                  rounded
                  to="/plans"
                  class="mr-0"
                >
                  Preços e Planos
                </v-btn>
              </v-card-text>
            </base-material-card>
          </v-col>
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
                  color="gray"
                  class="mr-4"
                  to="/passforgot"
                >
                  Esqueci minha senha
                </v-btn>
                <v-btn
                  color="success"
                  class="mr-0"
                  @click="login"
                >
                  Entrar
                </v-btn>
              </v-card-text>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    <dashboard-core-footer />
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
  </v-app>
</template>
<script>
  import axios from 'axios'
  export default {
    components: {
      DashboardCoreFooter: () => import('../dashboard/components/core/Footer'),
    },
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
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
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
<style lang="sass">
#dashboard-core-footer
    a
        font-size: .825rem
        font-weight: 500
        text-decoration: none
        text-transform: uppercase
</style>
