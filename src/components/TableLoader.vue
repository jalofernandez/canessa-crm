<template>
  <table class='w-full absolute z-0 bg-white divide-y divide-gray-300 dark:divide-navy-700 overflow-hidden animate-pulse'>
    <thead class="bg-gray-200 dark:bg-navy-700">
      <tr class=" bg-gray-200 text-gray-300 dark:bg-navy-700 dark:text-navy-500 uppercase text-sm leading-normal">
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
        class="border-b border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:bg-gray-100 dark:hover:bg-navy-700"
      >
        <!-- Client ID -->
        <td class="px-3 py-2">
          <p class="text-green-200 dark:text-green-700 text-sm font-semibold tracking-wide">
            0
          </p>
        </td>

        <!-- Doggie Name + Breed -->
        <td class="px-3 py-2">
          <div class="flex items-center space-x-3">
            <div class="inline-flex w-10 h-10 churruskus">
              <img
                src="../assets/doggies/bichon-maltes.png"
                class="w-10 h-10 object-cover rounded-full border-gray-200 border transform hover:scale-125"
                title="Bichón maltés avatar por defecto"
                alt="Bichón maltés avatar por defecto"
              />
            </div>
            <div>
              <p class="text-gray-200 dark:text-navy-700 font-semibold tracking-wide">
                Sparky
              </p>
              <p class="text-sm text-gray-200 dark:text-navy-700">
                bichón maltés
              </p>
            </div>
          </div>
        </td>

        <!-- Doggie Mood -->
        <td class="px-3 py-2 text-center">
          <span class="py-0.5 px-2 rounded-full bg-green-200 text-green-700 text-xs">
            Simpático
          </span>
        </td>

        <!-- Owner Name + Phone -->
        <td class="px-3 py-2">
          <p class="text-gray-200 dark:text-navy-700">
            John Doe
          </p>
          <p class="text-gray-200 dark:text-navy-700 text-xs font-semibold tracking-wide">
            698765432
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
          <p class="text-xs text-gray-200 dark:text-navy-700 leading-4 md:leading-5">
            Tiene nudos muy aplemazados. A veces chilla pero es para comérselo.
          </p>
        </td>

        <!-- Actions -->
        <td class="w-24 px-3 py-2 text-right">
          <p>
            <button class="w-20 block border-0 rounded py-1 px-3 bg-blue-500 hover:bg-blue-600 focus:outline-none text-white hover:underline text-xs text-center tracking-wide">
              Editar
            </button>
          </p>
          <p class="mt-1">
            <button class="w-20 h-6 border-0 rounded py-1 px-3 bg-red-50 hover:bg-red-100 focus:outline-none text-red-500 hover:text-red-600 hover:underline text-xs tracking-wide">
              Eliminar
            </button>
          </p>
        </td>

      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableLoader'
}
</script>
