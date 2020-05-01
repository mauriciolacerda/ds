<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-archive"
      title="Pacotes"
      class="px-5 py-3"
    >
      <v-card>
        <v-card-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="tblPackages"
          :search="search"
        >
          <template v-slot:item.orderCreatedAt="{ item }">
            {{ format_date(item.orderCreatedAt) }}
          </template>
          <template v-slot:item.inTransitAt="{ item }">
            {{ format_date(item.inTransitAt) }}
          </template>
          <template v-slot:item.deliveredAt="{ item }">
            {{ format_date(item.deliveredAt) }}
          </template>
          <template v-slot:item.trackingNumber="{ item }">
            <a
              target="_blank"
              :href="getUrl(item.trackingNumber)"
            >
              {{ item.trackingNumber }}
            </a>
          </template>
          <template v-slot:item.name="{ item }">
            <v-chip
              :color="getColor(item.name)"
              dark
            >
              {{ item.name }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </base-material-card>
  </v-container>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {
        tblPackages: [],
        errors: [],
        search: '',
        headers: [
          {
            text: 'Rastreio',
            align: 'center',
            sortable: false,
            value: 'trackingNumber',
          },
          { text: 'Pedido', value: 'idOrder', align: 'center' },
          { text: 'Cliente', value: 'displayName', align: 'center' },
          { text: 'Vendido', value: 'orderCreatedAt', align: 'center' },
          { text: 'Despachado', value: 'inTransitAt', align: 'center' },
          { text: 'Entregue', value: 'deliveredAt', align: 'center' },
          { text: 'Status', value: 'name', align: 'center' },
        ],
      }
    },
    mounted () {
      axios.get('https://dropstationapi.herokuapp.com/packages?token=' + localStorage.getItem('auth')).then(response => {
        this.tblPackages = response.data
      })
    },
    methods: {
      format_date (value) {
        if (value) {
          return moment(String(value)).format('DD/MM/YYYY')
        }
      },
      getUrl (value) {
        return 'http://dropstation.herokuapp.com/tracking?tracknumber=' + value
      },
      getColor (status) {
        if (status === 'Entregue') return 'green'
        else if (status === 'Em Trânsito') return 'blue'
        else if (status === 'Retornado ao Remetente') return 'deep-purple'
        else if (status === 'Tributado') return 'orange'
        else if (status === 'Não Entregue') return 'red'
        else if (status === 'Saiu para entrega') return 'light-green'
        else if (status === 'Rastreio inválido') return 'red'
        else if (status === 'Despachado') return 'lime'
        else if (status === 'Sem atualização') return 'grey'
      },
    },
  }
</script>
