<template>
  <b-container class="mt-5">
    <b-card class="p-2">
      <h4>Personas registradas</h4>
      <div class="overflow-auto">
        <b-input type="text" placeholder="Filtro" v-model="filter"/>
        <b-table :filter="filter" :fields="fields" id="my-table" :items="getPeople" :per-page="perPage"
                 :current-page="currentPage" small></b-table>
        <b-pagination v-model="currentPage" :total-rows="total" :per-page="perPage"
                      aria-controls="my-table"></b-pagination>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import presonaService from '../services/Person'

export default {

  data() {
    return {
      filter: null,
      perPage: '3',
      total: null,
      currentPage: 1,
      people: [],
      fields: [
        {key: "name", label: "Nombre", sortable: true},
        {key: "firstname", label: "Primer nombre", sortable: true}
      ]
    }
  },
  computed: {
    rows() {
      return this.people.length
    }
  },
  methods: {
    async getPeople(ctx) {
      try {
        const data = await presonaService.obtenerPersonasPaginadas(
            +this.currentPage,
            +this.perPage,
            ctx.filter
        )
        console.log(data)
        this.currentPage = data.number
        this.total = data.totalElements
        return data.content
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getPeople()
  }
}
</script>