<template>
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
        <base-material-card color="primary">
          <template vs-slot:heading>
            <div class="display-2 font-weight-light">
              TekTracker - Preços e Planos
            </div>
            <div class="subtitle-1 font-weight-light">
              Queremos que você escolha o plano apropriado para o seu negócio.
            </div>
          </template>

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
                    color="grey"
                    disabled
                  >
                    Plano atual
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Compre já
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Compre já
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Compre já
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Compre já
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
