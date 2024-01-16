<template>
  <div>
        <h1>Inicio</h1>
        <b-breadcrumb :items="items" class="mx-2 mb-0"></b-breadcrumb>
    </div>
</template>

<script>
export default {

    methods:{
        change(value){
            this.items[value].active = true
        }
    },
    data(){
        return{
            items: [
                {
                text: "Inicio",
                href: "#1",
                name:"inicio",
                onclick: () => this.change(0)
                },
                {
                text: "Primero",
                href: "#2",
                name:"component1"
                },
                {
                text: "Segundo",
                href: "#3",
                name:'component2'
                },
            ],
        }
    }
}
</script>

<style>

</style>