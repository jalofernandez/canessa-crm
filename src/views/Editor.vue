<template>
  <!-- <section :class="$router.params.name"> -->
  <section class="container px-5 pt-5 pb-24 mx-auto">

    <div class="flex flex-col text-center w-full">
      <TheTitle :title="`Editar cliente: <small class='text-pink-300'>${client.name}</small>`"/>
    </div>

    <!-- <div class="flex flex-col text-center w-full">
      <code class="lg:w-3/4 md:w-full mx-auto pt-3 text-sm">
        <em>{{ client.name }}</em> - <span v-if="client.breed" class="text-xs">{{ id }}</span> - un/a <span>{{ client.breed }}</span> de <b>{{ client.owner }}</b>
      </code>
    </div> -->

    <form @submit.prevent="editClient(client)" class="lg:w-3/4 md:w-full mx-auto pt-3">
      <div class="flex flex-wrap -m-2">

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "NAME" input -->
            <label for="clientName" class="leading-8 text-sm font-medium text-gray-400">
              Nombre del perrete: <em class="font-light">{{ client.name }}</em>
            </label>
            <input
              v-model="client.name"
              type="text"
              id="clientName"
              name="clientName"
              placeholder="E.j. Sparky"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "BREED" input -->
            <label for="clientBreed" class="leading-8 text-sm font-medium text-gray-400">
              Raza del perrete: <em class="font-light">{{ client.breed }}</em>
            </label>
            <input
              v-model="client.breed"
              type="text"
              id="clientBreed"
              name="clientBreed"
              placeholder="E.j. Mestizo pastór alemán chihuahua"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full">
          <!-- "MOOD" Radio btns -->
          <h5 class="leading-8 text-sm font-medium text-gray-400">
            Carácter del perrete: <em class="font-light">{{ client.mood }}</em>
          </h5>
          <div class="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-2 w-full">

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
            <label for="clientOwner" class="leading-8 text-sm font-medium text-gray-400">
              Nombre del dueño: <em class="font-light">{{ client.owner }}</em>
            </label>
            <input
              v-model="client.owner"
              type="text"
              id="clientOwner"
              name="clientOwner"
              placeholder="E.j. Pepi"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "BREED" input -->
            <label for="ownerPhone" class="leading-8 text-sm font-medium text-gray-400">
              Teléfono del dueño: <em class="font-light">{{ client.ownerPhone }}</em>
            </label>
            <input
              v-model="client.ownerPhone"
              type="number"
              id="ownerPhone"
              name="ownerPhone"
              placeholder="E.j. 666111666"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
            <!-- <small id="ownerPhoneError" class="">
              That´s a f***ckin´numbah, folk!
            </small> -->
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "GUARDIAN" input -->
            <label for="guardianName" class="leading-8 text-sm font-medium text-gray-400">
              Nombre del responsable: <em class="font-light">{{ client.guardian }}</em>
            </label>
            <input
              v-model="client.guardian"
              type="text"
              id="guardianName"
              name="guardianName"
              placeholder="E.j. Susana hija de Pepi"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full sm:w-1/2">
          <div class="relative">
            <!-- "GUARDIAN PHONE" input -->
            <label for="guardianPhone" class="leading-8 text-sm font-medium text-gray-400">
              Teléfono del responsable: <em class="font-light">{{ client.guardianPhone }}</em>
            </label>
            <input
              v-model="client.guardianPhone"
              type="number"
              id="guardianPhone"
              name="guardianPhone"
              placeholder="E.j. 666232323"
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
            <!-- <small id="guardianPhoneError" class="">
              That´s another cell´numbah, dude!
            </small> -->
          </div>
        </div>

        <div class="p-3 sm:p-4 w-full">
          <div class="relative">
            <label for="someComment" class="leading-8 text-sm font-medium text-gray-400">
              Comentarios adicionales:
            </label>
            <textarea
              v-model="client.comment"
              id="someComment"
              type="text"
              aria-describedby="emailHelp"
              placeholder="E.j. Corte a tijera 3mm. Llora muchísimo."
              class="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>

        <!-- Submit btn -->
        <div class="p-3 w-full">
          <button type="submit" class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg tracking-wide">
            Guardar cambios
          </button>
        </div>

      </div>
    </form>
  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Editor',
  components: {
    TheTitle
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    this.getClient(this.id)
  },
  computed: {
    ...mapState(['client'])
  },
  methods: {
    ...mapActions([
      'getClient',
      'editClient'
    ])
  }
}
</script>
