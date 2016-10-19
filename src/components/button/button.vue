<template lang="html">
  <div>
    <button :disabled="!hasUser" type="button" name="button" @click="mudarDados">Mudar dados do usuário</button>
  </div>
</template>

<script>
export default {

  data () {

    return {}

  },

  computed: {

    hasUser () {

      return this.$store.state.user.name !== ''

    }

  },

  mounted () {},

  methods: {

    mudarDados () {

      const payload = {

        name: 'vinny neves',
        email:'marcos.neves@rgsistemas.com.br',
        level: 'admin'


      }

      this.$store.commit('CHANGE_USER', payload)

    }

  },

  components: {}

}
</script>

<style lang="css">
</style>
