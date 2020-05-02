<template>
  <v-app>
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
            md="4"
          >
            <base-material-card
              class="v-card-profile"
              avatar="https://s2.glbimg.com/r5Hmg-CQXECXlxAnXrZA7eDUF5g=/0x0:1600x1061/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2018/12/18/1812-senhas-home.jpeg"
              min-height="360"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">
                  Plataforma DropStation
                </h6>
                <h4 class="display-2 font-weight-light mb-3 black--text">
                  Esqueceu sua senha?
                </h4>
                <p> Insira seu e-mail no campo abaixo que receberá, por e-mail, um link para redefinição da sua senha. </p>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-container class="py-0">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          class="purple-input"
                          :rules="[rules.required]"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="passforgot"
                  >
                    Redefinir Senha
                  </v-btn>
                </v-form>
              </v-card-text>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-snackbar
      v-model="snackbar"
    >
      {{ message }}
      <v-btn
        color="green"
        text
        @click="snackbar = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
    <dashboard-core-footer />
  </v-app>
</template>
<script>
  import axios from 'axios'
  export default {
    components: {
      DashboardCoreFooter: () => import('../dashboard/components/core/Footer'),
    },
    data () {
      return {
        snackbar: false,
        message: '',
        repsw: '',
        valid: true,
        email: '',
        rules: {
          required: value => !!value || 'Obrigatório.',
        },
      }
    },
    methods: {
      passforgot: function () {
        if (this.$refs.form.validate()) {
          axios.post('https://api.dropstation.com.br/users/passforgot', {
            email: this.email,
          })
            .then(res => {
              if (res.data.success === false) {
                this.snackbar = true
                this.message = res.data.message
              } else {
                this.snackbar = true
                this.message = res.data.message
                this.$router.push('/login/')
              }
            })
        }
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
