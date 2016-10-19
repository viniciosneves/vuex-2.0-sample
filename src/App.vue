<script>

import CcUsers from './components/users/main.vue'

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

    },1500)

  },

  components: {
    CcUsers
  },

  computed: {

    user () {

      const { name, email } = this.$store.state.user

      return `Usuário logado: ${name} | E-mail: ${email}`

    }

  }

}
</script>

<template>
  <div id="app">

    <h1>Some awesome text</h1>

    <h4>{{ user }}</h4>

    <hr>

    <cc-users><cc-users/>

  </div>
</template>
