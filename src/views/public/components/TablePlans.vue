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
        <th class="subheading font-weight-light text-center">
          Dropstation 2000
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
        <td>2000+</td>
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
        <td><b class="subheading">$149</b> USD/mês</td>
      </tr>
      <tr>
        <th />
        <td>
          <v-btn
            :disabled="btn1"
            id="idbtn1"
            @click="select(1)"
          >
            Selecione
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn2"
            id="idbtn2"
            @click="select(2)"
          >
            Selecione
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn3"
            id="idbtn3"
            @click="select(3)"
          >
            Selecione
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn4"
            id="idbtn4"
            @click="select(4)"
          >
            Selecione
          </v-btn>
        </td>
        <td>
          <v-btn
            :disabled="btn5"
            id="idbtn5"
            @click="select(5)"
          >
            Selecione
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  export default {
    name: 'TablePlans',
    data: () => ({
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
    }),
    methods: {
      select: function (plan) {
        const item = document.getElementById('idbtn' + plan)
        item.children[0].firstChild.data = 'SELECIONADO'
        localStorage.setItem('installPlan', plan)
        if (plan === 1) {
          this.btn1 = true
          this.btn2 = false
          this.btn3 = false
          this.btn4 = false
          this.btn5 = false
        }
        if (plan === 2) {
          this.btn1 = false
          this.btn2 = true
          this.btn3 = false
          this.btn4 = false
          this.btn5 = false
        }
        if (plan === 3) {
          this.btn1 = false
          this.btn2 = false
          this.btn3 = true
          this.btn4 = false
          this.btn5 = false
        }
        if (plan === 4) {
          this.btn1 = false
          this.btn2 = false
          this.btn3 = false
          this.btn4 = true
          this.btn5 = false
        }
        if (plan === 5) {
          this.btn1 = false
          this.btn2 = false
          this.btn3 = false
          this.btn4 = false
          this.btn5 = true
        }
      },
    },
  }
</script>
