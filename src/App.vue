<script>

import CcUsers from './components/users/main.vue'

import { mapState } from 'vuex'

export default {

  name: 'app',

  mounted () {

    const payload = {

      name: 'vinicios',

      email: 'vinicios_neves@hotmail.com',

      level: 'usuário-raso'

    }

    setTimeout(() => {

      this.$store.commit('CHANGE_USER', payload)

    },3000)

  },

  components: {
    CcUsers
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
