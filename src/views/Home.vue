<template>
  <section class="container px-5 pt-5 pb-24 mx-auto relative">

    <div class="sticky top-20 z-50 pb-2 flex justify-between items-center bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
      <input
        v-model.trim="searchQuery"
        type="text"
        placeholder="Para buscar o filtrar..."
        class="rounded border-2 border-gray-200 focus:border-brand-500 outline-none py-1 px-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-100 bg-opacity-50 text-base text-gray-800 leading-8 transition-colors duration-200 ease-in-out"
      />
      <router-link
        to="/nuevo"
        class="border-0 rounded py-1 px-4 focus:outline-none bg-green-500 hover:bg-green-600 text-white text-md tracking-wide"
      >
        Añadir cliente
      </router-link>
    </div>

    <div class="flex flex-col text-center w-full">
      <TheTitle :title="`Lista de clientes de: <small class='text-brand-300'>${currentUser.email}</small>`"/>
    </div>

    <div class="overflow-x-auto">
      <div class="min-w-screen flex items-center justify-center font-sans overflow-hidden">
        <div class="w-full">
          <div class="bg-white dark:text-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-500 dark:bg-navy-700 dark:text-navy-300 uppercase text-sm leading-normal">
                  <th class="py-3 px-2 text-center">Acciones</th>
                  <th class="py-3 px-2 text-left">ID</th>
                  <th class="py-3 px-2 text-left">Raza</th>
                  <th class="py-3 px-2 text-left">Perrete</th>
                  <th class="py-3 px-2 text-center">Caracter</th>
                  <th class="py-3 px-2 text-left">Dueño</th> 
                  <!-- <th class="py-3 px-2 text-left">Notas</th> -->
                  <!-- <th class="py-3 px-2 text-right">Citas</th> -->
                </tr>
              </thead>
              <tbody class="text-gray-600 text-base font-light">
                <tr
                  v-for="(client, index) in filteredCustomers"
                  :key="index"
                  class="border-b border-gray-200 dark:border-navy-700 
                  bg-white 
                  dark:bg-navy-900 hover:bg-gray-100 dark:hover:bg-navy-700"
                >
                  <!-- Actions -->
                  <td class="py-3 px-2 text-center">
                    <div class="flex item-center justify-center">
                      <router-link
                        :to="{ name: 'Editor', params: { id: client.id } }"
                        class="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-xs tracking-wide mr-2"
                      >
                        Editar
                      </router-link>
                      <button @click="removeClient(client.id)" class="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-xs tracking-wide h-6">
                        Eliminar
                      </button>
                    </div>
                  </td>
                  <!-- Client ID -->
                  <td class="py-3 px-2 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <span class="font-xs text-green-200">
                        {{ index + 1 }}
                      </span>
                    </div>
                  </td>
                  <!-- Doggie Breed -->
                  <td class="py-3 px-2 text-center">
                    <div class="flex items-center">
                      <div class="flex items-center justify-center mr-2 churruskus">
                        <img
                          src="../assets/doggies/bichon-maltes.png"
                          class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                        />
                      </div>
                      <small class="mr-1 text-navy-700 dark:text-sky-300">
                        {{ client.breed }}
                      </small>
                    </div>
                  </td>
                  <!-- Doggie Name -->
                  <td class="py-3 px-2 text-left">
                    <div class="flex items-center">
                      <span class="font-medium capitalize text-navy-700 dark:text-sky-300">
                        {{ client.name }}
                      </span>
                    </div>
                  </td>
                  <!-- Doggie Mood -->
                  <td class="py-3 px-2 text-center">
                    <span
                      v-if="client.mood"
                      class="py-0.5 px-2 rounded-full text-xs"
                      :class="`bg-${getColorMood(
                        client.mood
                      )}-200 text-${getColorMood(client.mood)}-700`"
                    >
                      {{ client.mood }}
                    </span>
                  </td>
                  <!-- Owner Name + Phone -->
                  <td class="py-3 px-2 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <span
                        v-if="client.ownerPhone != ''"
                        class="mr-2 text-sm font-medium text-navy-700 dark:text-sky-300"
                      >
                        {{ client.ownerPhone }}
                      </span>
                      <span v-else class="mr-2 text-sm text-gray-300 dark:text-navy-700">
                        600000000
                      </span>
                      <span v-if="client.owner != ''" class="capitalize text-navy-900 dark:text-sky-100">
                        {{ client.owner }}
                      </span>
                    </div>
                  </td>
                  <!-- Comments -->
                  <!-- <td class="py-3 px-2 text-left whitespace-nowrap">
                    <div class="flex items-center text-navy-700 dark:text-sky-300">
                      <small>{{ client.comment }}</small>
                    </div>
                  </td> -->
                  <!-- Number of Dates -->
                  <!-- <td class="py-3 px-2 text-left whitespace-nowrap">
                    <div class="flex items-center justify-end">
                      <span class="font-bold text-indigo-300">
                        {{ client.dates.length }}
                      </span>
                    </div>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    TheTitle
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
    ...mapState(['customers']),
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
