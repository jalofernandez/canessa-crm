<template>
  <main class="home">
    <TheTitle msg="Canessa manager for doggies"/>
    <section>
      <router-link to="/nuevo">
          <button>Añadir cliente</button>
        </router-link>
      <ul>
        <li v-for="(client, index) in customers" :id="index">
          <b>{{ client.name }}</b> - <small>{{ client.id }}</small> -
          <router-link :to="{ name: 'Editor', params: { id: client.id } }">
            <button>Editar</button>
          </router-link>
          <!-- <button @click="toRemoveClient(client.id)">Eliminar</button> -->
          <button @click="removeClient(client.id)">Eliminar</button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    TheTitle
  },
  created() {
    this.getCustomers()
  },
  computed: {
    ...mapState(['customers'])
  },
  methods: {
    ...mapActions([
      'getCustomers',
      'removeClient'
    ]),
    // IMP! Set modal dialog to ensure "remove action"
    // toRemoveClient(clientId) {
    //   alert('¿Estás seguro de querer eliminar el usuario ' + clientId + '?')
    // }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: .5rem .75rem;
}
h1 {
  color: #42b983;
  font-size: 1.5rem;
}
</style>
