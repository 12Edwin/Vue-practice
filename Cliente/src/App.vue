<script setup>
import { faAddressCard, faUserCircle } from '@fortawesome/free-regular-svg-icons';

</script>

<template>
  <div id="app">
    <header>
      <b-button variant="info" class="mx-2" pill v-b-toggle.sidebar-1><font-awesome-icon :icon="faUserCircle"/></b-button>
      <img class="mx-2" alt="Vue logo" src="./assets/logo.svg" width="50" height="50" />
      <h3 class="mx-2">Cliente</h3>
    </header>

    <div class="main">
      <b-sidebar id="sidebar-1" class="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
      <div class="content">
      </div> 
    </div>
  </div>
</template>

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