<template>
  <div id="interviews">
    <heading text="Interviews" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="interviews" link="interview" :fields="['band', 'date', 'author']" type="img"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'interviews',
    data () {
      return {
        ajax: false,
        page: 1,
        interviews: [],
        errors: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/interviews.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.interviews.push(response.data[i])
            }
            this.$refs.list.loaded()
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }
  }
</script>

<style lang="styl" scoped>
  #interviews
    background-color: whitesmoke
</style>
