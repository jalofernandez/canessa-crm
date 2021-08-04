<template>
  <p class="mb-8 text-red-500 font-semibold">
    <!-- ✋ &nbsp;{{ err.code }} | {{ err.message }} -->
    ✋ &nbsp;{{ getErrorMessage(err.code) }}
  </p>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    err: {
      type: Object,
      required: true,
    }
  },
  methods: {
    getErrorMessage(errCode) {
      return (errCode === 'auth/wrong-password') ? 'La contraseña es incorrecta. ¡Por favor, inténtalo de nuevo!'
           : (errCode === 'auth/email-already-in-use') ? 'El email que intentas registrar ya está en uso. Prueba con otro.'
           : (errCode === 'auth/user-not-found') ? 'No existe ningún usuario con estos datos. ¡Por favor, inténtalo de nuevo!'
           : '¡Ups! Parece que ha ocurrido algún error...'
    }
  }
}
</script>
