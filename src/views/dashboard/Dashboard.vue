<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <base-material-chart-card
          :data="emailsEnviados.data"
          :options="emailsEnviados.options"
          :responsive-options="emailsEnviados.responsiveOptions"
          color="primary"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            E-mails enviados
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Histórico de e-mails enviados
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">atualizado há 10 minutos</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <base-material-chart-card
          :data="importedOrders.data"
          :options="importedOrders.options"
          color="black"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>
              <span>Refresh</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Pedidos importados
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Histórico da importação de pedidos da sua loja
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">atualizado há 10 minutos</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-av-timer"
          title="Prazo médio de entrega"
          :value="media"
          sub-icon="mdi-clock"
          sub-text="Informação dos últimos 30 dias"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="gray"
          icon="mdi-airplane"
          title="Pacotes em trânsito"
          :value="emtransito"
          sub-icon="mdi-tag"
          sub-text="Monitorado pelos Correios"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Pacotes entregues"
          :value="entregues"
          sub-icon="mdi-calendar"
          sub-text="Informação dos últimos 30 dias "
        />
      </v-col>
      <v-col
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
        cols="12"
        md="12"
      >
        <base-material-card
          color="warning"
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
  export default {
    name: 'DashboardDashboard',
    data () {
      return {
        emtransito: '',
        entregues: '',
        atrasados: '',
        media: '',
        importedOrders: {
          data: {
            labels: [],
            series: [[]],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 0, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsEnviados: {
          data: {
            labels: [],
            series: [[]],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
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
      var auth = localStorage.getItem('auth')
      axios.get('https://dropstationapi.heroku.com/dashboard/packages?token=' + auth)
        .then(result => {
          var dados = result.data
          var max = 0
          for (var val of dados) {
            if (val.count > max) {
              max = val.count
            }
            this.importedOrders.data.labels.push(moment(String(val.orderCreatedAt)).format('DD/MM'))
            this.importedOrders.data.series[0].push(val.count)
            this.importedOrders.options.high = max++
          }
        })
      axios.get('https://dropstationapi.heroku.com/dashboard/emails?token=' + auth)
        .then(result => {
          var dados = result.data
          var max = 0
          for (var val of dados) {
            if (val.count > max) {
              max = val.count
            }
            this.emailsEnviados.data.labels.push(moment(String(val.sentat)).format('DD/MM'))
            this.emailsEnviados.data.series[0].push(val.count)
            this.emailsEnviados.options.high = max++
          }
        })
      axios.get('https://dropstationapi.heroku.com/dashboard/packages/bystatus?token=' + auth)
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
      axios.get('https://dropstationapi.heroku.com/dashboard/delayedpackages?token=' + auth)
        .then(result => {
          this.atrasados = result.data.contador.toString()
        })
      axios.get('https://dropstationapi.heroku.com/dashboard/deliveryTime?token=' + auth)
        .then(result => {
          this.media = result.data.media.toString() + ' dias'
        })
      axios.get('https://dropstationapi.heroku.com/dashboard/lastemails?token=' + auth)
        .then(result => {
          this.items = result.data
        })
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      format_date (value) {
        if (value) {
          return moment(String(value)).format('DD/MM/YYYY')
        }
      },
      getUrl (value) {
        return process.env.HOST + '/viewemail?id=' + value
      },
    },
  }
</script>
