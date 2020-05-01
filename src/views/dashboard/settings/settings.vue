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
              Configurações
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
                  cols="14"
                  md="12"
                >
                  <v-switch
                    v-model="showorigin"
                    label="Ocultar a origem do pedido aos clientes"
                  />
                </v-col>
                <v-col
                  cols="14"
                  md="12"
                >
                  <v-text-field
                    v-model="delay_in_days"
                    class="purple-input"
                    label="Prazo de entrega"
                    :rules="[rules.required]"
                  />
                </v-col>

                <v-col
                  cols="14"
                  md="12"
                >
                  <v-text-field
                    v-model="sendermail"
                    label="E-mail do remetente das notificações"
                    class="purple-input"
                    :rules="[rules.required]"
                  />
                </v-col>

                <v-col
                  cols="14"
                  md="12"
                >
                  <v-text-field
                    v-model="subjectmail"
                    label="Assunto dos e-mails de notificação"
                    class="purple-input"
                    :rules="[rules.required]"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="textmail"
                    class="purple-input"
                    label="Texto do e-mail"
                    value="Aqui você insere um texto para o seu email de notificação"
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
                    @click="updatesettings"
                  >
                    Salvar Configurações
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
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  var token = localStorage.getItem('auth')
  export default {
    data () {
      return {
        snackbar: false,
        message: '',
        valid: true,
        delay_in_days: '',
        sendermail: '',
        subjectmail: '',
        textmail: '',
        showorigin: false,
        rules: {
          required: value => !!value || 'Obrigatório.',
        },
      }
    },
    mounted () {
      // recupera as configurações salvas
      axios.get(process.env.HOST_API + '/settings?token=' + token).then(response => {
        this.delay_in_days = response.data.delay_in_days
        this.sendermail = response.data.sendermail
        this.subjectmail = response.data.subjectmail
        this.textmail = response.data.textmail
        this.showorigin = response.data.showorigin
      })
    },
    methods: {
      updatesettings: function () {
        if (this.$refs.form.validate()) {
          axios.post(process.env.HOST_API + '/settings', {
            token: token,
            delay_in_days: this.delay_in_days,
            sendermail: this.sendermail,
            subjectmail: this.subjectmail,
            textmail: this.textmail,
            showorigin: this.showorigin,
          })
            .then(res => {
              if (res.data.success === false) {
              } else {
                this.snackbar = true
                this.message = 'Dados atualizados com sucesso'
                this.$router.push('/settings/')
              }
            })
        }
      },
    },
  }
</script>
