<template>
  <section class="container px-5 pt-5 pb-24 mx-auto relative flex sm:flex-nowrap flex-wrap text-gray-600 body-font">

    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

      <iframe width="600" height="450" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3047.676732741844!2d-3.6889444!3d40.1940071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd421eebe17c1be3%3A0xf6a92ff47d2eaeec!2sCalle%20Vicente%20Aleixandre%2C%205%2C%2028342%20Valdemoro%2C%20Madrid!5e0!3m2!1ses!2ses!4v1626961277948!5m2!1ses!2ses" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>

      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Dirección
          </h2>
          <p class="mt-1">
            Calle Vicente Aleixandre, 5, 28342 Valdemoro, Madrid
          </p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Email
          </h2>
          <a class="text-indigo-500 leading-relaxed">
            van.vizcaya@gmail.com
          </a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            Teléfono
          </h2>
          <p class="leading-relaxed">
            91 248 04 30
          </p>
        </div>
      </div>
    </div>
    
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <TheBrand />
      <p class="leading-relaxed mb-5 text-gray-600">
        Página de entrada al manager de usuarios de Canessa.
      </p>
      <div class="relative mb-4">
        <label for="userName" class="leading-8 text-sm font-medium text-gray-500">
          Email de usuario *
        </label>
        <input
          v-model="user.name"
          type="text"
          id="userName"
          name="userName"
          placeholder="E.j. Rick un palmo"
          class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
      </div>
      <div class="relative mb-4">
        <label for="userPass" class="leading-8 text-sm font-medium text-gray-500">
          Contraseña | Password *
        </label>
        <input
          v-model="user.pass"
          type="text"
          id="userPass"
          name="userPass"
          placeholder="E.j. huyK3Chung@!"
          class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
      </div>
      <div class="relative mt-4">
        <button
          class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg tracking-wide"
        >
          Login | Entrar 
        </button>
        <p class="text-xs font-light text-gray-500 mt-3">
          * <em>Hay que rellenar estos campos obligatoriamente o de entrar a la plataforma "nanai de la chaina".</em>
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import TheBrand from '@/components/TheBrand.vue'

export default {
  name: 'Login',
  components: {
    TheBrand
  },
  data() {
    return {
      user: {
        name: '',
        pass: ''
      }
    }
  }
}
</script>

<style>

</style>
