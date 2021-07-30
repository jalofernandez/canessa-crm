<template>
  <!-- <section class="container px-5 pt-5 pb-24 mx-auto relative flex sm:flex-nowrap flex-wrap text-gray-600 body-font"> -->
  <section class="flex flex-col md:flex-row h-screen items-center text-gray-600 body-font">

    <div
      class="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://source.unsplash.com/1600x900/?Dogs,Cats,Puppy,Puppies"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="w-5/6 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen mx-6 lg:mx-16 xl:mx-12 pt-6 lg:pt-20 flex items-start justify-center relative bg-white dark:bg-navy-900"
    >
      <!-- REGISTER -->
      <transition name="page-transition" appear>
        <form v-if="!isLogin" @submit.prevent="createUser({email: user.email, password: user.pass})" class="w-full h-100 absolute z-0">
          <div class="flex justify-between items-center">
            <TheBrand />
            <ThemeSwitch />
          </div>
          <TheTitle title="<b class='font-bold'>Registro</b> de nuevo usuario" />
          <div class="relative mb-4">
            <label for="userName" class="leading-8 text-sm font-medium text-gray-500">
              Nombre usuario
            </label>
            <input
              v-model="user.name"
              type="text"
              id="userName"
              name="userName"
              placeholder="E.j. Rick un palmo"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <div class="relative mb-4">
            <label for="userEmail" class="leading-8 text-sm font-medium text-gray-500">
              Email de usuario *
            </label>
            <input
              v-model="user.email"
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="E.j. rickunpalmo@gmail.com"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
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
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <div class="relative mt-8">
            <!-- Error messages here -->
            <p v-if="error" class="mb-8 text-red-500 font-semibold">
              {{ error.message }}
            </p>
            <p class="text-xs font-light text-gray-500 mb-8">
              * <em>Tienes que rellenar estos campos obligatoriamente o sino de entrar a la plataforma "nanai de la chaina" (vamos, que el botón permanecerá bloqueado).</em>
            </p>
            <button
              :class="[{'opacity-50 cursor-text pointer-events-none': disabled}]"
              class="flex mx-auto border-0 rounded py-2 px-8 bg-brand-500 focus:outline-none hover:bg-brand-600 text-white text-lg tracking-wide"
            >
              Registrar nuevo usuario
            </button>
            <!-- link to SignIn form -->
            <p class="mt-8 text-center text-gray-500 dark:text-sky-300 leading-10">
              ¿Ya tienes cuenta y sólo quieres entrar?
              <br class="md:hidden" />
              <a
                @click="toggleLogin()"
                href="#"
                class="underline text-green-500 hover:text-green-600 dark:hover:text-blue-500 font-semibold"
              >
                Ir a login aquí.
              </a>
            </p>
          </div>
        </form>
      </transition>
      
      <!-- LOGIN -->
      <transition name="page-transition" appear>
        <form v-if="isLogin" @submit.prevent="loginUser({email: user.email, password: user.pass})" class="w-full h-100 absolute z-10">
          <div class="flex justify-between items-center">
            <TheBrand />
            <ThemeSwitch />
          </div>
          <TheTitle title="<b class='font-bold'>Entrada</b> al manager de clientes" />
          <div class="relative my-4">
            <label for="userEmail" class="leading-8 text-sm font-medium text-gray-500">
              Email de usuario *
            </label>
            <input
              v-model="user.email"
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="E.j. rickunpalmo@gmail.com"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <div class="relative my-4">
            <label for="userPass" class="leading-8 text-sm font-medium text-gray-500">
              Contraseña | Password *
            </label>
            <input
              v-model="user.pass"
              type="text"
              id="userPass"
              name="userPass"
              placeholder="E.j. huyK3Chung@!"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
          <div class="relative mt-8">
            <!-- Error messages here -->
            <p v-if="error" class="mb-8 text-red-500 font-semibold">
              {{ error.message }}
            </p>
            <p class="text-xs font-light text-gray-500 mb-8">
              * <em>Hay que rellenar estos campos obligatoriamente con un usuario existente o sino de entrar a la plataforma "nanai de la chaina" (vamos, que el botón permanecerá bloqueado).</em>
            </p>
            <button
              :class="[{'opacity-50 cursor-text pointer-events-none': disabled}]"
              class="flex mx-auto border-0 rounded py-2 px-8 bg-brand-500 focus:outline-none hover:bg-brand-600 text-white text-lg tracking-wide"
            >
              Login | Entrar 
            </button>
            <!-- link to SignUp form -->
            <p class="mt-8 text-center text-gray-500 dark:text-sky-300 leading-10">
              ¿Necesitas una cuenta?
              <br class="md:hidden" />
              ✨&nbsp;
              <a
                @click="toggleLogin()"
                href="#"
                class="underline text-green-500 hover:text-green-600 dark:hover:text-blue-500 font-semibold"
              >
                Crea una aquí.
              </a>
              &nbsp;✨
            </p>
          </div>
        </form>
      </transition>
    </div>

  </section>
</template>

<script>
import TheBrand from '@/components/TheBrand.vue'
import TheTitle from '@/components/TheTitle.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

import { mapState, mapActions } from 'vuex'
 
export default {
  name: 'Login',
  components: {
    TheBrand,
    TheTitle,
    ThemeSwitch
  },
  data() {
    return {
      isLogin: true,
      user: {
        name: '',
        email: '',
        pass: ''
      },
      passLength: 6 // min required by Google if U want to store it in Firebase Auth DB
    }
  },
  computed: {
    ...mapState(['error']),
    disabled() {
      if (!this.user.email.includes('@')) return true
      if (this.user.pass.length >= this.passLength) return false
      else return true
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'loginUser']
    ),
    toggleLogin() {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style>

</style>
