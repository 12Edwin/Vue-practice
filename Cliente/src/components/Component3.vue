<template>
  <div>
        <h1>Component 3</h1>
        <b-breadcrumb :items="items" class="mx-2 mb-0"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items: [
                {
                text: "Inicio",
                href: "inicio",
                name:""
                },
                {
                text: "Primero",
                href: "component1",
                name:""
                },
                {
                text: "Segundo",
                href: "component2",
                },
            ],
        }
    },
}
</script>

<style>

</style>