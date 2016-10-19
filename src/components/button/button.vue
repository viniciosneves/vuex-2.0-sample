<template lang="html">
  <div>
    <button type="button" name="button" @click="mudarDados">Mudar dados do usuário</button>
  </div>
</template>

<script>
export default {

  data () {

    return {}

  },

  computed: {},

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
