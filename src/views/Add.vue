<template>
  <section class="container px-5 pt-5 pb-24 mx-auto">

    <div class="flex flex-col text-center w-full">
      <TheTitle title="Añadir nuevo cliente"/>
    </div>

    <form @submit.prevent="addClient(client)" class="lg:w-3/4 md:w-full mx-auto pt-3">
      <div class="flex flex-wrap -m-2">

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "NAME" input -->
            <label for="clientName" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Nombre del perrete: <em class="font-light">{{ client.name }}</em>
            </label>
            <input
              v-model="client.name"
              type="text"
              id="clientName"
              name="clientName"
              placeholder="E.j. Sparky"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "BREED" input -->
            <label for="clientBreed" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Raza del perrete: <em class="font-light">{{ client.breed }}</em>
            </label>
            <input
              v-model="client.breed"
              type="text"
              id="clientBreed"
              name="clientBreed"
              placeholder="E.j. Mestizo pastór alemán chihuahua"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full">
          <!-- "MOOD" Radio btns -->
          <h5 class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
            Carácter del perrete: <em class="font-light">{{ client.mood }}</em>
          </h5>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2 w-full">

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio1" value="muerde" hidden="hidden">
              <label
                for="radio1"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>😡</span><span class="ml-2">Muerde</span>
              </label>
            </div>

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio2" value="miedoso" hidden="hidden">
              <label
                for="radio2"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>😭</span><span class="ml-2">Miedoso</span>
              </label>
            </div>

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio3" value="simpatico" hidden="hidden">
              <label
                for="radio3"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>😄</span><span class="ml-2">Simpático</span>
              </label>
            </div>

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio4" value="histerico" hidden="hidden">
              <label
                for="radio4"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>🤪</span><span class="ml-2">Histérico</span>
              </label>
            </div>

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio5" value="ladrador" hidden="hidden">
              <label
                for="radio5"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>🤬</span><span class="ml-2">Ladrador</span>
              </label>
            </div>

            <div class="inline-block radio">
              <input v-model="client.mood" type="radio" name="radioOptions" id="radio6" value="tranquilo" hidden="hidden">
              <label
                for="radio6"
                class="px-2 py-1 rounded-lg flex justify-center items-center text-base font-medium w-full"
              >
                <span>😴</span><span class="ml-2">Tranquilo</span>
              </label>
            </div>
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "OWNER" input -->
            <label for="clientOwner" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Nombre del dueño: <em class="font-light">{{ client.owner }}</em>
            </label>
            <input
              v-model="client.owner"
              type="text"
              id="clientOwner"
              name="clientOwner"
              placeholder="E.j. Pepi"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "BREED" input -->
            <label for="ownerPhone" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Teléfono del dueño: <em class="font-light">{{ client.ownerPhone }}</em>
            </label>
            <input
              v-model="client.ownerPhone"
              type="number"
              id="ownerPhone"
              name="ownerPhone"
              placeholder="E.j. 666111666"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
            <!-- <small id="ownerPhoneError" class="">
              That´s a f***ckin´numbah, folk!
            </small> -->
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "GUARDIAN" input -->
            <label for="guardianName" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Nombre del responsable: <em class="font-light">{{ client.guardian }}</em>
            </label>
            <input
              v-model="client.guardian"
              type="text"
              id="guardianName"
              name="guardianName"
              placeholder="E.j. Susana hija de Pepi"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "GUARDIAN PHONE" input -->
            <label for="guardianPhone" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Teléfono del responsable: <em class="font-light">{{ client.guardianPhone }}</em>
            </label>
            <input
              v-model="client.guardianPhone"
              type="number"
              id="guardianPhone"
              name="guardianPhone"
              placeholder="E.j. 666232323"
              class="w-full rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
            >
            <!-- <small id="guardianPhoneError" class="">
              That´s another cell´numbah, dude!
            </small> -->
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full">
          <div class="relative">
            <label for="someComment" class="leading-8 text-sm font-medium text-gray-400 dark:text-sky-300 tracking-wide">
              Comentarios adicionales:
            </label>
            <textarea
              v-model="client.comment"
              id="someComment"
              type="text"
              aria-describedby="emailHelp"
              placeholder="E.j. Corte a tijera 3mm. Llora muchísimo."
              class="w-full h-32 rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-6 tracking-wide transition-colors duration-200 ease-in-out resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Submit btn -->
        <div class="p-3 w-full">
          <button
            type="submit"
            class="flex mx-auto border-0 rounded py-2 px-8 bg-brand-500 focus:outline-none hover:bg-brand-600 text-white text-lg tracking-wide"
          >
            Añadir cliente
          </button>
        </div>

      </div>
    </form>
  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Add',
  components: {
    TheTitle
  },
  data() {
    return {
      client: {
        name: '',
        breed: '',
        mood: '',
        owner: '',
        ownerPhone: '',
        guardian: '',
        guardianPhone: '',
        comment: ''
      }
    }
  },
  methods: {
    ...mapActions(['addClient'])
  }
}
</script>
