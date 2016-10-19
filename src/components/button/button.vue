<template lang="html">
  <div>
    <button :disabled="!hasUser" type="button" name="button" @click="mudarDados">Mudar dados do usuário</button>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

  data () {

    return {}

  },

  computed: {

    ...mapState({

      hasUser: state => {

        const { name } = state.user

        return name !== ''

      }

    })

  },

  mounted () {},

  methods: {

    ...mapActions(['changeUser']),

    mudarDados () {

      const payload = {

        name: 'vinny neves',
        email:'marcos.neves@rgsistemas.com.br',
        level: 'admin',
        city:  'Teresópolis',
        state: 'RJ'


      }

      this.changeUser(payload)

    }

  },

  components: {}

}
</script>

<style lang="css">
</style>
