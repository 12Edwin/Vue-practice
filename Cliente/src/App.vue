<script setup>
import { faAddressCard, faUserCircle } from '@fortawesome/free-regular-svg-icons';

</script>

<template>
  <div id="app">
    <header>
      <img class="mx-2" alt="Vue logo" src="./assets/logo.svg" width="50" height="50" />
      <b-button variant="info" class="mx-2" pill v-b-toggle.sidebar-1><font-awesome-icon :icon="faUserCircle"/></b-button>
      
      <b-breadcrumb :items="items" class="mx-2 mb-0"></b-breadcrumb>
    </header>

    <div class="main">
      <b-sidebar id="sidebar-1" class="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-nav-item >
          <b-link :to="{ name: 'inicio' }">Opcion 1</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'component1' }">Opcion 1</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'component2' }">Opcion 2</b-link>
        </b-nav-item>
      </div>
    </b-sidebar>
      <div class="content">
        <router-view></router-view>
      </div> 
    </div>
  </div>
</template>

<script >
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
    background-color: rgb(107, 138, 138);
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