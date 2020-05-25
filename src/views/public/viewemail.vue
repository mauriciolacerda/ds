<template>
  <div v-html="body" />
</template>
<script>
  import axios from 'axios'
  export default {
    props: {
      id: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        body: '',
      }
    },
    mounted () {
      const idemail = this.$route.query.id
      axios.get(process.env.VUE_APP_HOST_API + '/dashboard/emailById?id=' + idemail).then(response => {
        this.body = response.data.body
      })
    },
  }
</script>
