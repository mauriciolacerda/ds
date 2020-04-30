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
              avatar="https://abrilsuperinteressante.files.wordpress.com/2018/07/istock-510576580.jpg?quality=70&strip=info&resize=680,453"
              min-height="360"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">
                  Plataforma DropStation
                </h6>
                <h4 class="display-2 font-weight-light mb-3 black--text">
                  Confirme seu endereço de e-mail
                </h4>
                <p class="font-weight-light grey--text">
                  O e-mail de confirmação foi enviado para <b> {{ email }} </b>. Verifique sua caixa de correio e pressione o botão "Valide seu e-mail" para confirmar seu endereço de e-mail e poder acessar a plataforma DropStation.
                </p>
                <v-btn
                  color="secondary"
                  rounded
                  to="../login"
                  class="mr-0"
                >
                  Login
                </v-btn>
              </v-card-text>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
   <dashboard-core-footer />
  </v-app>
</template>
<script>
  export default {
    components: {
      DashboardCoreFooter: () => import('../dashboard/components/core/Footer'),
    },
    props: {
      email: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      loader: null,
      loading: false,
      links: [
        {
          href: '#',
          text: 'DropStation',
        },
        {
          href: '#',
          text: 'Sobre nós',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Preços e Planos',
        },
      ],
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>
<style lang="sass">
#dashboard-core-footer
    a
        font-size: .825rem
        font-weight: 500
        text-decoration: none
        text-transform: uppercase
</style>
