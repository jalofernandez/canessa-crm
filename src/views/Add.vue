<template>
  <main>
    <TheTitle msg="Añadir nuevo cliente"/>
    <section>
      <form @submit.prevent="addClient(client)">
        <!-- "NAME" input -->
        <div>
          <label for="clientName">
            Nombre del perrete: {{ client.name }}
          </label>
          <input
            v-model="client.name"
            type="text"
            id="clientName"
            name="clientName"
            placeholder="E.j. Sparky"
          />
          </div>
        <br/>

        <!-- "BREED" input -->
        <div>
          <label for="clientBreed">
            Raza del perrete: {{ client.breed }}
          </label>
          <input
            v-model="client.breed"
            type="text"
            id="clientBreed"
            name="clientBreed"
            placeholder="E.j. Mestizo pastór alemán chihuahua"
          />
        </div>
        <br/>

        <!-- "MOOD" Radio btns -->
        <div>
          <h5>Carácter del perrete: {{ client.mood }}</h5>
          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="muerde">
          <label class="" for="inlineRadio1">Muerde</label>

          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="miedoso">
          <label class="" for="inlineRadio2">Miedoso</label>

          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="simpatico">
          <label class="" for="inlineRadio3">Simpático</label>

          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="histerico">
          <label class="" for="inlineRadio4">Histérico</label>

          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="ladrador">
          <label class="" for="inlineRadio5">Ladrador</label>

          <input v-model="client.mood" class="" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="tranquilo">
          <label class="" for="inlineRadio6">Tranquilo</label>
        </div>
        <br/>

        <!-- "OWNER" input -->
        <div>
          <label for="clientName">
            Nombre del dueño: {{ client.owner }}
          </label>
          <input
            v-model="client.owner"
            type="text"
            id="clientOwner"
            name="clientOwner"
            placeholder="E.j. Pepi"
          />
        </div>
        <br/>

        <!-- "OWNER´S PHONE" input -->
        <div>
          <label for="ownerPhone">
            Teléfono del dueño: <b>{{ client.ownerPhone }}</b>
          </label>
          <input
            v-model.number="client.ownerPhone"
            id="ownerPhone"
            type="text"
            class=""
            aria-describedby="ownerPhone"
            placeholder="E.j. 666111666"
          >
          <small id="ownerPhoneError" class="">
            That´s a f***ckin´numbah, folk!
          </small>
        </div>
        <br/>

        <!-- "GUARDIAN" input -->
        <div>
          <label for="guardianName">
            Nombre del responsable: {{ client.guardian }}
          </label>
          <input
            v-model="client.guardian"
            type="text"
            id="guardianName"
            name="guardianName"
            placeholder="E.j. Susana hija de Pepi"
          />
        </div>
        <br/>

        <!-- "GUARDIAN PHONE" input -->
        <div>
          <label for="guardianPhone">
            Teléfono del responsable: <b>{{ client.guardianPhone }}</b>
          </label>
          <input
            v-model.number="client.guardianPhone"
            id="guardianPhone"
            type="text"
            class=""
            aria-describedby="guardianPhone"
            placeholder="E.j. 666232323"
          >
          <small id="guardianPhoneError" class="">
            That´s another cell´numbah, dude!
          </small>
        </div>
        <br/>

        <!-- "COMMENT" input -->
        <div>
          <label for="ownerPhone">
            Comentarios adicionales:
          </label>
          <textarea
            v-model="client.comment"
            id="ownerPhone"
            type="text"
            class=""
            aria-describedby="emailHelp"
            placeholder="E.j. Corte a tijera 3mm. Llora muchísimo."
          ></textarea>
        </div>
        <br/>

        <!-- Submit btn -->
        <div>
          <button type="submit">
            Añadir cliente
          </button>
        </div>
      </form>
    </section>
  </main>
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
        ownerPhone: 0,
        guardian: '',
        guardianPhone: 0,
        comment: ''
      }
    }
  },
  methods: {
    ...mapActions(['addClient'])
  }
}
</script>

<style>

</style>
