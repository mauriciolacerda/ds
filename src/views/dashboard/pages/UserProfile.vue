<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Editar Perfil
            </div>

            <div class="subtitle-1 font-weight-light">
              Mantenha seus dados atualizados
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
                      @click="updateUser"
                    >
                      Alterar
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
                Atualmente você é assinante do plano
              </h6>

              <h4 class="display-2 font-weight-light mb-3 black--text">
                {{ name }}
              </h4>

              <p class="font-weight-light grey--text">
                Este plano permite que você monitore até {{ limit }} vendas por mês
              </p>
              <p class="font-weight-light grey--text">
                O custo atual do plano é  <b>USD {{ price }}</b>
              </p>
              <v-btn
                color="secondary"
                rounded
                to="/plans"
                class="mr-0"
              >
                Cancelar assinatura
              </v-btn>
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
            </v-card-text>
          </base-material-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import decode from 'jwt-decode'
  import axios from 'axios'
  export default {
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
      var token = localStorage.getItem('auth')
      const { idplans: idPlan } = decode(token)
      axios.get(process.env.HOST_API + '/plans/id?id=' + idPlan).then(response => {
        this.name = response.data[0].name
        this.price = response.data[0].price
        this.limit = response.data[0].limit
      })
      axios.get(process.env.HOST_API + '/users/userById?token=' + token).then(response => {
        this.username = response.data.name
        this.email = response.data.email
        this.phone = response.data.phone
      })
    },
    methods: {
      updateUser: function () {
        var token = localStorage.getItem('auth')
        if (this.$refs.form.validate()) {
          axios.post(process.env.HOST_API + '/users/updateUser', {
            token: token,
            name: this.username,
            email: this.email,
            phone: this.phone,
          })
            .then(res => {
              if (res.data.success === false) {
              } else {
                this.snackbar = true
                this.message = 'Dados atualizados com sucesso'
                // this.$router.push('/userprofile')
              }
            })
        }
      },
    },
  }
</script>
