export default {

  localidade: state => {

    return `City: ${state.user.city} - State: ${state.user.state}`

  }

}
