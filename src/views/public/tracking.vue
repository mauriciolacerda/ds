<template>
  <v-app id="inspire">
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
            md="6"
          >
            <h4 class="display-2 font-weight-light mb-3 black--text">
              Rastreio do pacote {{ this.$route.query.tracknumber }}
            </h4>
            <v-timeline
              dense
            >
              <v-timeline-item
                v-for="evento in eventos.data"
                :key="evento.id"
                small
              >
                <v-card class="elevation-1">
                  <v-card-text>
                    {{ evento.status | capitalize }}
                  </v-card-text>
                  <v-card-text
                    v-if="evento.observation !== null"
                    class="uppercase"
                  >
                    {{ evento.observation }}
                  </v-card-text>
                  <v-chip
                    class="ma-2"
                    color="grey lighten-4"
                    label
                    text-color="black"
                  >
                    <v-icon left>
                      mdi-alarm
                    </v-icon>
                    {{ format_date(evento.trackedAt) }}
                  </v-chip>
                  <v-chip
                    class="ma-2"
                    color="grey lighten-4"
                    label
                    text-color="black"
                  >
                    <v-icon left>
                      mdi-map-marker-outline
                    </v-icon>
                    {{ evento.locale | capitalize }}
                  </v-chip>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
    },
    props: {
      tracknumber: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        eventos: [],
      }
    },
    mounted () {
      axios.get(process.env.VUE_APP_HOST_API + '/packages/tracking?tracknumber=' + this.$route.query.tracknumber).then(response => {
        this.eventos = response
      })
    },
    methods: {
      format_date (value) {
        if (value) {
          return moment(String(value)).format('DD/MM/YYYY - HH:mm')
        }
      },
    },
  }
</script>
<style>
.uppercase {
  text-transform: uppercase;
}
</style>
