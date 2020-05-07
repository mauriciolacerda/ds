<template>
  <base-material-chart-card
    :data="importedOrders.data"
    :options="importedOrders.options"
    color="blue-grey darken-3"
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
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  import { EventBus } from '../../../EventBus'
  export default {
    name: 'GraphOrders',
    data () {
      return {
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
      }
    },
    mounted () {
      var auth = localStorage.getItem('auth')
      axios.get('https://dropstationapi.herokuapp.com/dashboard/packages?token=' + auth)
        .then(result => {
          var dados = result.data
          var max = 0
          if (dados.length > 0) {
            for (var val of dados) {
              if (val.count > max) {
                max = val.count
              }
              this.importedOrders.data.labels.push(moment(String(val.importedAt)).format('DD/MM'))
              this.importedOrders.data.series[0].push(val.count)
              this.importedOrders.options.high = max++
            }
          } else {
            EventBus.$emit('importados', false)
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
