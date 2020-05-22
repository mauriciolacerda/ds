<template>
  <v-simple-table>
    <thead>
      <tr>
        <th />
        <th class="subheading font-weight-light text-center">
          Free
        </th>
        <th class="subheading font-weight-light text-center">
          Dropstation 100
        </th>
        <th class="subheading font-weight-light text-center">
          Dropstation 500
        </th>
        <th class="subheading font-weight-light text-center">
          Dropstation 1000
        </th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr>
        <th class="text-left font-weight-light subtitle-1">
          Número de Pedidos pagos
        </th>
        <td>50</td>
        <td>100</td>
        <td>500</td>
        <td>1000</td>
      </tr>
      <tr>
        <th class="text-left font-weight-light subtitle-1">
          Integração com Shopify
        </th>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
      </tr>
      <tr>
        <th class="text-left font-weight-light subtitle-1">
          Suporte Premium
        </th>
        <td>
          <v-icon color="error">
            mdi-close
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
        <td>
          <v-icon color="success">
            mdi-check
          </v-icon>
        </td>
      </tr>
      <tr>
        <th />
        <td><b class="subheading">$ 0,00</b> USD/mês</td>
        <td><b class="subheading">$5 </b> USD/mês</td>
        <td><b class="subheading">$19</b> USD/mês</td>
        <td><b class="subheading">$89</b> USD/mês</td>
      </tr>
      <tr>
        <th />
        <td>
          <v-btn
            :disabled="btn1"
            color="success"
            @click="changePlan(1)"
          >
            {{ txt1 }}
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn2"
            color="success"
            @click="changePlan(2)"
          >
            {{ txt2 }}
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn3"
            color="success"
            @click="changePlan(3)"
          >
            {{ txt3 }}
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn4"
            color="success"
            @click="changePlan(4)"
          >
            {{ txt4 }}
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>
<script>
  import decode from 'jwt-decode'
  import axios from 'axios'
  export default {
    data: () => ({
      name: 'TableUpgrade',
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
      txt1: 'Alterar plano',
      txt2: 'Alterar plano',
      txt3: 'Alterar plano',
      txt4: 'Alterar plano',
      txt5: 'Alterar plano',
    }),
    mounted () {
      var token = localStorage.getItem('auth')
      const { idplans: idPlan } = decode(token)
      if (idPlan === 1) {
        this.btn1 = true
        this.txt1 = 'Plano Contratado'
      }
      if (idPlan === 2) {
        this.btn2 = true
        this.txt2 = 'Plano Contratado'
      }
      if (idPlan === 3) {
        this.btn3 = true
        this.txt3 = 'Plano Contratado'
      }
      if (idPlan === 4) {
        this.btn4 = true
        this.txt4 = 'Plano Contratado'
      }
      if (idPlan === 5) {
        this.btn5 = true
        this.txt5 = 'Plano Contratado'
      }
    },
    methods: {
      changePlan (id) {
        if (this.idPlan !== id) {
          const tokenShopify = localStorage.getItem('tokenShopify')
          const shop = localStorage.getItem('shop')
          localStorage.setItem('newPlan', id)
          axios.post('https://dropstationapi.herokuapp.com/shopify/changePlan', {
            tokenShopify: tokenShopify,
            shop: shop,
            idplans: id,
          })
            .then(res => {
              if (res.data.success === false) {
                this.snackbar = true
                this.message = res.data.message
              } else {
                this.snackbar = true
                this.message = res.data.message
                window.location.href = res.data.url
              }
            })
        }
      },
    },
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
