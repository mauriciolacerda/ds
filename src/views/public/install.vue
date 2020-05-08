<template>
  <v-app id="inspire">
    <v-container
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step
                :complete="e1 > 1"
                step="1"
              >
                Loja Shopify
              </v-stepper-step>
              <v-divider />
              <v-stepper-step
                :complete="e1 > 2"
                step="2"
              >
                Selecione o Plano
              </v-stepper-step>
              <v-divider />
              <v-stepper-step
                :complete="e1 > 3"
                step="3"
              >
                Criação de Usuário
              </v-stepper-step>
              <v-divider />
              <v-stepper-step step="4">
                Login
              </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                >
                  <formshopify />
                </v-card>
                <v-btn
                  color="primary"
                  @click="getShopify(txtShop)"
                >
                  Avançar
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                >
                  <plans />
                </v-card>
                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  Avançar
                </v-btn>
                <v-btn
                  text
                  @click="e1 = 1"
                >
                  Retornar
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                >
                  <userform ref="users" />
                </v-card>
                <v-btn
                  color="primary"
                  @click="validateUser()"
                >
                  Avançar
                </v-btn>
                <v-btn
                  text
                  @click="e1 = 2"
                >
                  Retornar
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="4">
                <v-card
                  class="mb-12"
                >
                  <formlogin />
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      />
      {{ overlaytext }}
    </v-overlay>
  </v-app>
</template>
<script>
  import axios from 'axios'
  import { EventBus } from '../../EventBus'

  export default {
    components: {
      Plans: () => import('../public/components/TablePlans'),
      Userform: () => import('../public/components/UserForm'),
      Formshopify: () => import('../public/components/FormShopify'),
      Formlogin: () => import('../public/components/FormLogin'),
    },
    props: {
      plan: {
        type: String,
        default: '',
      },
      shop: {
        type: String,
        default: '',
      },
      hmac: {
        type: String,
        default: '',
      },
      code: {
        type: String,
        default: '',
      },
      state: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        overlay: false,
        overlaytext: '',
        e1: 1,
        validar: '',
        txtShop: '',
        errors: [],
        integrated: '',
      }
    },
    mounted () {
      if (this.$route.query.charge_id) {
        this.importCustomer()
        this.e1 = 4
      }
      if (this.$route.query.shop && this.$route.query.hmac && this.$route.query.timestamp && !this.$route.query.state && !this.$route.query.code) {
        this.getShopify(this.$route.query.shop)
      }
      if (this.$route.query.shop && this.$route.query.hmac && this.$route.query.code && this.$route.query.state) {
        this.e1 = 2
      }
      EventBus.$on('inputshopify', retinput => {
        this.txtShop = retinput
      })
      EventBus.$on('retvalidation', retvalidation => {
        if (retvalidation) {
          this.overlay = !this.overlay
          this.overlaytext = 'Aguarde um instante, estamos redirecionando para a Shopify para conclusão da instalação.'
          // signup
          const dadosuser = JSON.parse(localStorage.getItem('userdata'))
          axios.post('https://dropstationapi.herokuapp.com/users/signup', {
            username: dadosuser.username,
            email: dadosuser.email,
            password: dadosuser.password,
            phone: dadosuser.phone,
            active: 'true',
            idplans: localStorage.getItem('installPlan'),
          })
            .then(res => {
              if (res.data.success === false) {
                this.snackbar = true
                this.message = res.data.message
              } else {
                localStorage.setItem('iduser', res.data.id)
                this.getCallbackShopify()
              }
            })
        }
      })
    },
    methods: {
      validateUser () {
        EventBus.$emit('validation', this.validar)
      },
      getShopify (txtShop) {
        this.overlay = !this.overlay
        this.overlaytext = 'Aguarde um instante, você esta sendo autenticado no Shopify.'
        axios.get('https://dropstationapi.herokuapp.com/shopify?shop=' + txtShop).then(response => {
          this.$cookies.config(60 * 60 * 24 * 30, '')
          this.$cookies.set('state', response.data.state)
          window.location.href = response.data.installUrl
        })
      },
      getCallbackShopify () {
        const shop = this.$route.query.shop
        const hmac = this.$route.query.hmac
        const code = this.$route.query.code
        const state = this.$route.query.state
        localStorage.setItem('shop', shop)
        axios.get('https://dropstationapi.herokuapp.com/shopify/callback?shop=' + shop + '&hmac=' + hmac + '&code=' + code + '&state=' + state + '&idplans=' + localStorage.getItem('installPlan')).then(response => {
          localStorage.setItem('tokenShopify', response.data.tokenShopify)
          if (response.data.url === null) {
            this.e1 = 4
            this.importCustomer()
            this.overlay = false
          } else {
            localStorage.setItem('urlinstall', response.data.url)
            window.location.href = response.data.url
          }
        })
      },
      importCustomer () {
        const tokenShopify = localStorage.getItem('tokenShopify')
        const shop = localStorage.getItem('shop')
        axios.get('https://dropstationapi.herokuapp.com/shopify/importCustomer?shop=' + shop + '&tokenShopify=' + tokenShopify + '&idplans=' + localStorage.getItem('installPlan') + '&idcustomer=' + localStorage.getItem('iduser'))
      },
    },
  }
</script>
