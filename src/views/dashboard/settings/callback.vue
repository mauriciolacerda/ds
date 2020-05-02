<template>
  <v-app id="inspire">
    <v-content>
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
            md="8"
          >
            <base-material-card
              class="v-card-profile"
              avatar=""
              min-height="360"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">
                  Plataforma DropStation
                </h6>
                <h4 class="display-2 font-weight-light mb-3 black--text">
                  {{ andamento }}
                </h4>
                <p class="font-weight-light grey--text">
                  {{ texto }}
                </p>
              </v-card-text>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  import axios from 'axios'
  export default {
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
        texto: '',
        andamento: '',
      }
    },
    mounted () {
      if (this.$route.query.charge_id) {
        this.andamento = 'Loja integrada com sucesso'
        this.texto = 'A sua loja foi integrada com sucesso. A partir de agora você poderá começar a importar suas entregas para a plataforma DropStation.'
        this.importCustomer()
      }
      if (!this.$route.query.charge_id) {
        this.andamento = 'Processo de instalação inicializado'
        this.texto = 'Aguarde um minuto, você será redirecionado à Shopify para concluir a instalação'
        this.getCallbackShopify()
      }
    },
    methods: {
      getCallbackShopify () {
        const shop = this.$route.query.shop
        const hmac = this.$route.query.hmac
        const code = this.$route.query.code
        const state = this.$route.query.state
        const auth = localStorage.getItem('auth')
        localStorage.setItem('shop', shop)
        axios.get('http://api.dropstation.com.br/shopify/callback?shop=' + shop + '&hmac=' + hmac + '&code=' + code + '&state=' + state + '&token=' + auth).then(response => {
          localStorage.setItem('tokenShopify', response.data.tokenShopify)
          window.location.href = response.data.url
        })
      },
      importCustomer () {
        const auth = localStorage.getItem('auth')
        const tokenShopify = localStorage.getItem('tokenShopify')
        const shop = localStorage.getItem('shop')
        axios.get('http://api.dropstation.com.br/shopify/importCustomer?shop=' + shop + '&tokenShopify=' + tokenShopify + '&token=' + auth)
      },
    },
  }
</script>
