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
            <tableupgrade />
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    components: {
      Tableupgrade: () => import('./component/TablePlans'),
    },
  }
</script>
