<template>
  <v-app>
    <v-container
      id="user-profile"
      fluid
      tag="section"
    >
      <v-row justify="center">
        <v-col
          cols="8"
          md="5"
        >
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light">
                Faça seu cadastro
              </div>

              <div class="subtitle-1 font-weight-light">
                Informe seus dados
              </div>
            </template>
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
                      v-model="username"
                      label="Nome completo"
                      class="purple-input"
                      :rules="[rules.required]"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      class="purple-input"
                      :rules="[rules.required]"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
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
                    md="4"
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
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="phone"
                      v-mask="'(##) #####.####'"
                      class="purple-input"
                      label="Celular"
                      :rules="[rules.required]"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    class="text-right"
                  >
                    <v-btn
                      color="success"
                      class="mr-0"
                      @click="createUser"
                    >
                      Cadastrar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <base-material-card
            class="v-card-profile"
            avatar="https://ser-tel.com.br/wp-content/uploads/2016/10/2016-10-25-miniatura-a-evolucao-da-seguranca-eletronica.jpg"
          >
            <v-card-text class="text-center">
              <h6 class="display-1 mb-1 grey--text">
                Você selecionou o plano
              </h6>

              <h4 class="display-2 font-weight-light mb-3 black--text">
                {{ name }}
              </h4>

              <p class="font-weight-light grey--text">
                <b>Parabéns!</b> Você está muito proximo de levar sua empresa a outro nível.
              </p>
              <p class="font-weight-light grey--text">
                Este plano permitirá que você monitore até {{ limit }} vendas por mês por apenas <b>USD {{ price }}</b>
              </p>
              <p class="font-weight-light grey--text">
                Caso este plano não seja a melhor opção para sua empresa, clique abaixo e selecione um plano mais apropriado.
              </p>
              <v-btn
                color="secondary"
                rounded
                to="/plans"
                class="mr-0"
              >
                Preços e Planos
              </v-btn>
            </v-card-text>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
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
    props: {
      plan: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        snackbar: false,
        message: '',
        janela: false,
        username: '',
        email: '',
        password: '',
        phone: '',
        show1: false,
        show2: false,
        name: '',
        price: '',
        limit: '',
        repsw: '',
        valid: true,
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          passMatch: () => this.repsw === this.password || 'Sua senha não é igual a confirmação de senha',
        },
      }
    },
    mounted () {
      axios.get('https://api.dropstation.com.br/plans/id?id=' + this.plan).then(response => {
        this.name = response.data[0].name
        this.price = response.data[0].price
        this.limit = response.data[0].limit
      })
    },
    methods: {
      createUser: function () {
        if (this.$refs.form.validate()) {
          axios.post('https://api.dropstation.com.br/users/signup', {
            username: this.username,
            email: this.email,
            password: this.password,
            phone: this.phone,
            idplans: this.plan,
          })
            .then(res => {
              if (res.data.success === false) {
                this.snackbar = true
                this.message = res.data.message
              } else {
                this.$router.push('/mailvalidate/' + this.email)
              }
            })
        }
      },
    },
  }
</script>
