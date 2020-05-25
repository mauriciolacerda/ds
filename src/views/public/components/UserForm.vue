<template>
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
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
    >
      {{ message }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </v-form>
</template>
<script>
  import axios from 'axios'
  import { EventBus } from '../../../EventBus'
  export default {
    name: 'UserForm',
    data () {
      return {
        snackbar: false,
        message: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        show1: false,
        show2: false,
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
      EventBus.$on('validation', validar => {
        if (this.$refs.form.validate()) {
          axios.get(process.env.VUE_APP_HOST_API + '/users/userByEmail?email=' + this.email).then(response => {
            if (!response.data) {
              const userdata = {
                username: this.username,
                email: this.email,
                password: this.password,
                phone: this.phone,
              }
              localStorage.setItem('userdata', JSON.stringify(userdata))
              EventBus.$emit('retvalidation', true)
            } else {
              this.snackbar = true
              this.message = 'Erro: E-mail já cadastrado em nossas bases'
            }
          })
        } else {
          EventBus.$emit('retvalidation', false)
        }
      })
    },
  }
</script>
