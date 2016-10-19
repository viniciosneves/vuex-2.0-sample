<template>

  <div class="">
    E-mail: {{ email }}
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
