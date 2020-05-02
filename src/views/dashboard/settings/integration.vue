<template>
  <v-container
    id="upgrade"
    fluid
    tag="section"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="8"
        md="8"
      >
        <base-material-card color="primary">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Integrações
            </div>
          </template>
        </base-material-card>
      </v-col>
    </v-row>
    <template>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
          <v-card>
            <v-card-text class="pt-0">
              <base-subheading>
                <h5 class="font-weight-light">
                  Integração com Shopify
                </h5>
              </base-subheading>
              <v-col>
                <div
                  align="center"
                  justify="center"
                >
                  <v-img
                    width="150"
                    src="../../../assets/shopify-logo.png"
                  />
                  <v-text-field
                    v-if="integrated==false"
                    v-model="txtShop"
                    label="seudominio.myshopify.com"
                    class="purple-input"
                  />
                  <h5
                    v-if="integrated"
                    class="font-weight-light"
                  >
                    Loja já integrada
                  </h5>
                </div>
              </v-col>
              <v-col
                class="text-center"
              >
                <v-btn
                  v-if="integrated==false"
                  color="success"
                  class="mr-0"
                  @click="getShopify(txtShop)"
                >
                  Realizar integração
                </v-btn>
                <v-btn
                  v-if="integrated"
                  color="success"
                  class="mr-0"
                  @click="removeShopify()"
                >
                  Remover integração
                </v-btn>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
<script>
  import axios from 'axios'
  import { isIntegrated } from '../../../auth'

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
        txtShop: '',
        errors: [],
        integrated: '',
      }
    },
    mounted () {
      if (isIntegrated()) {
        this.integrated = true
      } else {
        this.integrated = false
      }
    },
    methods: {
      getShopify (txtShop) {
        axios.get('http://api.dropstation.com.br/shopify?shop=' + txtShop).then(response => {
          this.$cookies.config(60 * 60 * 24 * 30, '')
          this.$cookies.set('state', response.data.state)
          this.$cookies.set('auth', localStorage.getItem('auth'))
          window.location.href = response.data.installUrl
        })
      },
      removeShopify () {
        localStorage.setItem('tokenShopify', 'null')
        this.$cookies.remove('token')
        this.$cookies.remove('state')
        this.$cookies.remove('shop')
        this.integrated = false
      },
    },
  }
</script>
