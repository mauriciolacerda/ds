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
                  Alteração de Senha
                </h4>
                <p> Insira sua nova senha </p>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-container class="py-0">
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="psw"
                          label="Senha"
                          hint="No mínimo 8 caracteres"
                          counter
                          @click:append="show1 = !show1"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="repsw"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min, rules.passMatch]"
                          :type="show2 ? 'text' : 'password'"
                          name="repsw"
                          label="Confirme sua senha"
                          hint="No mínimo 8 caracteres"
                          counter
                          @click:append="show2 = !show2"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="changepass"
                  >
                    Alterar Senha
                  </v-btn>
                </v-form>
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
  import axios from 'axios'
  export default {
    components: {
      DashboardCoreFooter: () => import('../dashboard/components/core/Footer'),
    },
    props: {
      email: {
        type: String,
        default: '',
      },
      hash: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        repsw: '',
        valid: true,
        show1: false,
        show2: false,
        password: '',
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          passMatch: () => this.repsw === this.password || 'Sua senha não é igual a confirmação de senha',
        },
      }
    },
    methods: {
      changepass: function () {
        if (this.$refs.form.validate()) {
          axios.post('https://dropstationapi.herokuapp.com/users/passchange', {
            email: this.email,
            password: this.password,
            hash: this.hash,
          })
            .then(res => {
              if (res.data.success === false) {
              } else {
                this.$router.push('/login')
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
