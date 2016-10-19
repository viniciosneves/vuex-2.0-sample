<template>

  <div class="">
    <p>
      E-mail: {{ email }}
    </p>
    <p>
      Endereço: {{ localidade }}
    </p>
    <br><br>
    <CcButton/>
  </div>

</template>

<script>
import CcButton from '../button/button.vue'

export default {
  data () {
    return {}
  },
  computed: {

    email () {
      return this.$store.state.user.email
    },

    localidade () {
      return this.$store.getters.localidade
    }

  },
  mounted () {},
  methods: {},
  components: {
    CcButton
  }
}
</script>

<style lang="css">
</style>
