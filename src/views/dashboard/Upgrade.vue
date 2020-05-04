<template>
  <v-app>
    <v-container
      id="upgrade"
      fluid
      tag="section"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="12"
        >
          <base-material-card color="dark">
            <v-card-text class="text-center">
              <h6 class="display-1 mb-1 grey--text">
                Plataforma DropStation
              </h6>
              <h4 class="display-2 font-weight-light mb-3 black--text">
                Seja Bem Vindo
              </h4>
              <h6 class="display-1 mb-1 grey--text">
                Escolha o plano mais apropriado para seu negócio. E lembre-se, nos planos pagos, você somente será cobrado após realizar a integração com a sua loja Shopify
              </h6>
            </v-card-text>
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
                      color="success"
                      to="register/1"
                    >
                      {{ txt1 }}
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      :disabled="btn2"
                      color="success"
                      to="register/2"
                    >
                      {{ txt2 }}
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      :disabled="btn3"
                      color="success"
                      to="register/3"
                    >
                      {{ txt3 }}
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      :disabled="btn4"
                      color="success"
                      to="register/4"
                    >
                      {{ txt4 }}
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      :disabled="btn5"
                      color="success"
                      to="register/5"
                    >
                      {{ txt5 }}
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  import decode from 'jwt-decode'
  export default {
    data: () => ({
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
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
