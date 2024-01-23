<template>
  <div id="app">
    <header>
      <img class="mx-2" alt="Vue logo" src="./assets/logo.svg" width="50" height="50" />
      <b-button variant="info" class="mx-2" pill v-b-toggle.sidebar-1><font-awesome-icon :icon="faUserCircle"/></b-button>
    </header>

    <div class="main">
      <b-sidebar id="sidebar-1" class="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-nav-item >
          <b-link :to="{ name: 'inicio' }">Tienda de videojuegos</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'component1' }">Tenda de electrodomésticos</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'component2' }">Productos pra el hogar</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'formulario' }">Formulario</b-link>
        </b-nav-item>
      </div>
    </b-sidebar>
      <div class="content">
        <router-view></router-view>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items: [
                {
                text: "Tienda de juguetes",
                href: "inicio",
                name:""
                },
                {
                text: "Tienda de electrodomésticos",
                href: "component1",
                name:""
                },
                {
                text: "Productos para el hogar",
                href: "component2",
                },
            ],
        }
    },
    methods:{
      changeActive(bread){
        this.items.forEach(item => {
          item.active = false;
        });
        bread.active = true
      }
    },
    computed:{

    },
    methods:{

    },
    watch:{

    }
}
</script>

<style scoped>

header{
    display: flex;
    width: 100%;
    align-items: center;
    height: 8vh;
    background-color: antiquewhite;
    padding-left: 50px;
  }
  .main{
    height: 92vh;
    display: flex;
  }

  .sidebar{
    height: 92vh;
    position: relative;
  }


</style>

<style>
  .b-sidebar{
    position: relative !important;
  }
</style>