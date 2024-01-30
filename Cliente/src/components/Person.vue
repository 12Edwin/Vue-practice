<template>
    <b-container class="mt-5">
        <b-card class="p-2">
            <h4>Personas registradas</h4>
            <div class="overflow-auto">
                <b-table :fields="fields" id="my-table" :items="people" :per-page="perPage" :current-page="currentPage" small></b-table>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
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
            perPage: '3',
            currentPage: 1,
            people: [],
            fields:[
                {key:"name", label:"Nombre", sortable: true},
                {key:"firstname", label:"Primer nombre", sortable: true}
            ]
        }
    },
    computed: {
        rows() {
            return this.people.length
        }
    },
    methods:{
        async getPeople(){
            try{
                const data = await presonaService.obtenerPersonasPaginadas(
                    +this.currentPage,
                    +this.perPage
                )
                this.people = data.content
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getPeople()
    }
}
</script>