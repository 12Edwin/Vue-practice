<script setup>
</script>

<template>
  <div id="app">
    <header>
      <b-button pill v-b-toggle.sidebar-variant></b-button>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
      
    </header>

    <div class="main">
      <b-sidebar id="sidebar-variant" class="sidebar" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
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
    width: 18vw;
    height: 92vh;
    position: relative;
  }


</style>

<style>
  .b-sidebar{
    position: relative;
  }
</style>