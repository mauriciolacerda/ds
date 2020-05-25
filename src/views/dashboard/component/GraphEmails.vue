<template>
  <base-material-chart-card
    :data="emailsEnviados.data"
    :options="emailsEnviados.options"
    :responsive-options="emailsEnviados.responsiveOptions"
    color="blue-grey lighten-3"
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
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  import { EventBus } from '../../../EventBus'
  export default {
    name: 'GraphEmails',
    data () {
      return {
        enviados: true,
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
      }
    },
    mounted () {
      var auth = localStorage.getItem('auth')
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/emails?token=' + auth)
        .then(result => {
          var dados = result.data
          var max = 0
          if (dados.count > 0) {
            for (var val of dados) {
              if (val.count > max) {
                max = val.count
              }
              this.emailsEnviados.data.labels.push(moment(String(val.sentat)).format('DD/MM'))
              this.emailsEnviados.data.series[0].push(val.count)
              this.emailsEnviados.options.high = max++
            }
          } else {
            this.enviados = false
            EventBus.$emit('emailsenviados', false)
          }
        })
    },
    methods: {
      format_date (value) {
        if (value) {
          return moment(String(value)).format('DD/MM/YYYY')
        }
      },
    },
  }
</script>
