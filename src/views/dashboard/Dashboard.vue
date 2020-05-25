<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        v-if="!importados"
        cols="12"
        lg="12"
      >
        <v-alert
          color="primary"
          dark
          icon="mdi-alert"
          border="left"
          prominent
        >
          <v-row align="center">
            <v-col class="grow">
              Você ainda não realizou a primeira importação dos pedidos da Shopify. Clique no botão ao lado para realizar a importação
            </v-col>
            <v-col class="shrink">
              <v-btn
                @click="importar"
              >
                Importar
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
      <v-col
        v-if="!importados"
        cols="12"
        lg="12"
      >
        <v-alert
          color="primary"
          dark
          icon="mdi-alert"
          border="left"
          prominent
        >
          <v-row align="center">
            <v-col class="grow">
              Verifique a configuração da sua plataforma. Clique no botão ao lado para realizar a configuração
            </v-col>
            <v-col class="shrink">
              <v-btn
                to="/settings"
              >
                Configurar
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
      <v-col
        v-if="importados"
        cols="12"
        lg="6"
      >
        <graphorders />
      </v-col>

      <v-col
        v-if="importados"
        cols="12"
        lg="6"
      >
        <graphemails />
      </v-col>
      <v-col
        v-if="importados"
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="blue-grey darken-3"
          icon="mdi-av-timer"
          title="Prazo médio de entrega"
          :value="media"
          sub-icon="mdi-clock"
          sub-text="Informação dos últimos 30 dias"
        />
      </v-col>

      <v-col
        v-if="importados"
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="blue-grey darken-1"
          icon="mdi-airplane"
          title="Pacotes em trânsito"
          :value="emtransito"
          sub-icon="mdi-tag"
          sub-text="Monitorado pelos Correios"
        />
      </v-col>

      <v-col
        v-if="importados"
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="blue-grey lighten-2"
          icon="mdi-store"
          title="Pacotes entregues"
          :value="entregues"
          sub-icon="mdi-calendar"
          sub-text="Informação dos últimos 30 dias "
        />
      </v-col>
      <v-col
        v-if="importados"
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="red"
          icon="mdi-alert-decagram"
          title="Pacotes atrasados"
          :value="atrasados"
          sub-icon="mdi-alert"
          sub-icon-color="red"
          sub-text="Não deixe de acompanhar..."
        />
      </v-col>

      <v-col
        v-if="emailsenviados"
        cols="12"
        md="12"
      >
        <base-material-card
          color="default"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Ultimos e-mails enviados
            </div>
            <div class="subtitle-1 font-weight-light">
              Clique sobre o número do pacote para visualizar o e-mail enviado
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            >
              <template v-slot:item.sentAt="{ item }">
                {{ format_date(item.sentAt) }}
              </template>
              <template v-slot:item.idOrder="{ item }">
                <a
                  target="_blank"
                  :href="getUrl(item.id)"
                >
                  {{ item.idOrder }}
                </a>
              </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import { EventBus } from '../../EventBus'
  export default {
    name: 'DashboardDashboard',
    components: {
      Graphemails: () => import('./component/GraphEmails'),
      Graphorders: () => import('./component/GraphOrders'),
    },
    data () {
      return {
        importados: true,
        emailsenviados: true,
        emtransito: '',
        entregues: '',
        atrasados: '',
        media: '',
        headers: [
          {
            sortable: false,
            text: 'Pedido',
            value: 'idOrder',
          },
          {
            sortable: false,
            text: 'Rastreio',
            value: 'trackingNumber',
          },
          {
            sortable: false,
            text: 'Cliente',
            value: 'displayName',
          },
          {
            sortable: false,
            text: 'Destinatário',
            value: 'recipient',
          },
          {
            sortable: false,
            text: 'Enviado em',
            value: 'sentAt',
          },
        ],
        items: [],
      }
    },
    mounted () {
      EventBus.$on('importados', importados => {
        this.importados = importados
      })
      EventBus.$on('emailsenviados', emailsenviados => {
        this.emailsenviados = emailsenviados
      })
      var auth = localStorage.getItem('auth')
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/packages/bystatus?token=' + auth)
        .then(result => {
          var dados = result.data
          for (var val of dados) {
            if (val.idStatus === 4) {
              this.emtransito = val.count
            }
            if (val.idStatus === 2) {
              this.entregues = val.count
            }
          }
        })
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/delayedpackages?token=' + auth)
        .then(result => {
          this.atrasados = result.data.contador.toString()
        })
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/deliveryTime?token=' + auth)
        .then(result => {
          if (result.data.media === 'NaN') {
            this.media = '0'
          } else {
            this.media = result.data.media.toString() + ' dias'
          }
        })
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/lastemails?token=' + auth)
        .then(result => {
          this.items = result.data
        })
    },
    methods: {
      importar () {
        EventBus.$emit('importar')
      },
      complete (index) {
        this.list[index] = !this.list[index]
      },
      format_date (value) {
        if (value) {
          return moment(String(value)).format('DD/MM/YYYY')
        }
      },
      getUrl (value) {
        return 'http://app.dropstation.com.br/viewemail?id=' + value
      },
    },
  }
</script>
