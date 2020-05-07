<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="4"
      md="4"
    >
      <div
        align="center"
        justify="center"
      >
        <v-img
          width="750"
          src="../../../assets/logo_name.png"
        />
        <h5>
          Insira o domínio de sua loja para instalar o app Dropstation
        </h5>
        <v-text-field
          v-model="txtShop"
          label="seudominio.myshopify.com"
          class="purple-input"
          @input="triggerEvent"
        />
        <h5 v-if="autorizada">
          Loja autenticada com sucesso no Shopify
        </h5>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import { EventBus } from '../../../EventBus'
  export default {
    name: 'FormShopify',
    data () {
      return {
        txtShop: '',
        autorizada: false,
      }
    },
    mounted () {
      if (this.$route.query.shop && this.$route.query.hmac && this.$route.query.code && this.$route.query.state) {
        this.txtShop = this.$route.query.shop
        this.autorizada = true
      }
    },
    methods: {
      triggerEvent (event) {
        EventBus.$emit('inputshopify', this.txtShop)
      },
    },
  }
</script>
