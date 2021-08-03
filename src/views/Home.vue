<template>
  <section class="container px-5 pt-5 pb-24 mx-auto relative">

    <div class="sticky top-20 z-50 pb-2 flex justify-between items-center bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
      <input
        v-model.trim="searchQuery"
        type="text"
        placeholder="Para buscar o filtrar..."
        class="rounded border-2 border-gray-200 focus:border-brand-500 dark:border-navy-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white dark:bg-navy-700 dark:focus:bg-navy-500 dark:active:bg-navy-500 bg-opacity-50 dark:placeholder-navy-300 dark:focus:placeholder-navy-500 text-base text-gray-800 dark:text-white leading-8 tracking-wide transition-colors duration-200 ease-in-out"
      />
      <router-link
        to="/nuevo"
        class="border-0 rounded py-1 px-4 focus:outline-none bg-green-500 hover:bg-green-600 text-white text-md tracking-wide"
      >
        Añadir cliente
      </router-link>
    </div>

    <div class="flex flex-col text-center w-full">
      <TheTitle
        :title="`Lista de clientes de: <small v-if='currentUser.email !== null' class='text-brand-300'>${currentUser.email}</small>`"
      />
    </div>

    <div class='overflow-x-auto w-full'>
      <!-- <table class='w-full whitespace-nowrap bg-white divide-y divide-gray-300 dark:divide-navy-700 overflow-hidden'> -->
      <transition name="page-transition">
        <TableLoader v-if="loader" />
        <table
          v-if="!loader"
          class='w-full bg-white divide-y divide-gray-300 dark:divide-navy-700 overflow-hidden'
        >
          <thead class="bg-gray-200 dark:bg-navy-700">
            <tr class=" text-gray-500 dark:text-navy-300 uppercase text-sm leading-normal">
              <th class="px-3 py-2 text-left">ID</th>
              <th class="px-3 py-2 text-left">Perrete</th>
              <th class="px-3 py-2 text-center">Caracter</th>
              <th class="px-3 py-2 text-left">Dueño</th>
              <th class="px-3 py-2 text-left">Citas</th>
              <th class="w-60 px-3 py-2 text-left">Notas</th>
              <th class="w-24 px-3 py-2 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-navy-700 text-gray-600 text-base font-light">
            <tr
              v-for="(client, index) in filteredCustomers"
              :key="index"
              class="border-b border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:bg-gray-50 dark:hover:bg-navy-700"
            >
              <!-- Client ID -->
              <td class="px-3 py-2">
                <p class="text-green-200 dark:text-green-700 text-sm font-semibold tracking-wide">
                  {{ index + 1 }}
                </p>
              </td>

              <!-- Doggie Name + Breed -->
              <td class="px-3 py-2">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 hidden lg:inline-flex churruskus">
                    <img
                      src="../assets/doggies/bichon-maltes.png"
                      class="w-10 h-10 object-cover rounded-full border-gray-200 border transform hover:scale-125"
                      title="Bichón maltés avatar por defecto"
                      alt="Bichón maltés avatar por defecto"
                    />
                  </div>
                  <div>
                    <p class="dark:text-sky-300 font-semibold tracking-wide">
                      {{ client.name }}
                    </p>
                    <p class="text-sm text-gray-400 dark:text-sky-300">
                      {{ client.breed }}
                    </p>
                  </div>
                </div>
              </td>

              <!-- Doggie Mood -->
              <td class="px-3 py-2 text-center">
                <span
                  v-if="client.mood"
                  class="py-0.5 px-2 rounded-full text-xs"
                  :class="`bg-${getColorMood(client.mood)}-200 text-${getColorMood(client.mood)}-700`"
                >
                  {{ client.mood }}
                </span>
              </td>

              <!-- Owner Name + Phone -->
              <td class="px-3 py-2">
                <p v-if="client.owner" class="dark:text-sky-300 capitalize">
                  {{ client.owner }}
                </p>
                <p v-if="client.ownerPhone" class="text-gray-500 dark:text-sky-300 text-xs font-semibold tracking-wide">
                  {{ client.ownerPhone }}
                </p>
                <p v-if="client.guardian" class="mt-1 dark:text-sky-300">
                  {{ client.guardian }}
                </p>
                <p v-if="client.guardianPhone" class="text-gray-500 dark:text-sky-300 text-xs font-semibold tracking-wide">
                  {{ client.guardianPhone }}
                </p>
              </td>

              <!-- Number of Dates -->
              <td class="px-3 py-2 text-center">
                <span class="text-blue-300 dark:text-blue-700 font-medium">
                  4
                </span>
              </td>

              <!-- Comments -->
              <td class="w-60 px-3 py-2 text-left">
                <p class="text-xs text-navy-700 dark:text-sky-300 leading-4 md:leading-5">
                  {{ client.comment }}
                </p>
              </td>

              <!-- Actions -->
              <td class="w-24 px-3 py-2 text-right">
                <p>
                  <router-link
                    :to="{ name: 'Editor', params: { id: client.id } }"
                    class="w-20 block border-0 rounded py-1 px-3 bg-blue-500 hover:bg-blue-600 focus:outline-none text-white hover:underline text-xs text-center tracking-wide"
                  >
                    Editar
                  </router-link>
                </p>
                <p class="mt-1">
                  <button
                    @click="removeClient(client.id)"
                    class="w-20 h-6 border-0 rounded py-1 px-3 bg-red-50 hover:bg-red-100 focus:outline-none text-red-500 hover:text-red-600 hover:underline text-xs tracking-wide"
                  >
                    Eliminar
                  </button>
                </p>
              </td>

            </tr>
          </tbody>
        </table>
      </transition>
    </div>

  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import TableLoader from '@/components/TableLoader.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    TheTitle,
    TableLoader
  },
  data() {
    return {
      searchQuery: '',
      currentUser: this.$store.state.user
    }
  },
  created() {
    this.getCustomers()
  },
  computed: {
    ...mapState(['customers', 'loader']),
    filteredCustomers() {
      return this.customers.filter(client => {
        const doggieName = client.name.toLowerCase();
        const doggieBreed = client.breed;
        // console.log(`${client.breed}`)
        const doggieMood = client.mood.toLowerCase();
        // const doggieOwner = this.getOwners(customer.owner);
        const ownerName = client.owner.toLowerCase();
        const ownerPhone = client.ownerPhone.toString();
        const guardianName = client.guardian.toLowerCase();
        const guardianPhone = client.guardianPhone.toString();
        const doggieComs = client.comment.toLowerCase();

        const searchTerm = this.searchQuery;

        return doggieName.match(searchTerm) ||
              //  doggieBreed.includes(searchTerm) ||
               doggieBreed.match(searchTerm) ||
               doggieMood.match(searchTerm) ||
               // doggieOwner.includes(searchTerm) ||
               ownerName.match(searchTerm) ||
               ownerPhone.match(searchTerm) ||
               guardianName.match(searchTerm) ||
               guardianPhone.match(searchTerm) ||
               doggieComs.match(searchTerm); // imp! "whatEverConst.includes(searchTerm)" works too!
      });
    },
  },
  methods: {
    ...mapActions([
      'getCustomers',
      'removeClient'
    ]),
    getColorMood(mood) {
      return (mood === 'simpatico' || mood === 'tranquilo') ? 'green'
           : (mood === 'nervioso' || mood === 'ladrador') ? 'yellow'
           : (mood === 'muerde' || mood === 'histerico') ? 'red'
           : 'purple'
    },
    // IMP! Set modal dialog to ensure "remove action"
    // toRemoveClient(clientId) {
    //   alert('¿Estás seguro de querer eliminar el usuario ' + clientId + '?')
    // }
  }
}
</script>
