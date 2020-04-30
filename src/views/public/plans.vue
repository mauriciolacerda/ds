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
                  TekTracker 100
                </th>
                <th class="subheading font-weight-light text-center">
                  TekTracker 500
                </th>
                <th class="subheading font-weight-light text-center">
                  TekTracker 1000
                </th>
                <th class="subheading font-weight-light text-center">
                  TekTracker 2000
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
                    color="success"
                    to="register/1"
                  >
                    Assine agora
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    to="register/2"
                  >
                    Assine agora
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    to="register/3"
                  >
                    Assine agora
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    to="register/4"
                  >
                    Assine agora
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    to="register/5"
                  >
                    Assine agora
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
  <dashboard-core-footer />
</v-app>
</template>

<script>
  export default {
    components: {
      DashboardCoreFooter: () => import('../dashboard/components/core/Footer'),
    },
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
