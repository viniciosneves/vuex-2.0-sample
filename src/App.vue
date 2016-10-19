<script>

import CcUsers from './components/users/main.vue'

import { mapState, mapActions } from 'vuex'

export default {

  name: 'app',

  mounted () {

    const payload = {

      name: 'vinicios',

      email: 'vinicios_neves@hotmail.com',

      level: 'usuário-raso',

      city:  'Nova Friburgo',

      state: 'RJ'

    }

    setTimeout(() => {

      this.changeUser(payload)

    },3000)

  },

  components: {
    CcUsers
  },

  methods: {

    ...mapActions(['changeUser'])

  },

  computed: {

    ...mapState({

      user: state => {

        const { name, email } = state.user

        return `Usuário logado: ${name} | E-mail: ${email}`

      }

    })

  }

}
</script>

<template>
  <div id="app">

    <h1>Some vuex stuff</h1>

    <h4>{{ user }}</h4>

    <hr>

    <cc-users><cc-users/>

  </div>
</template>
