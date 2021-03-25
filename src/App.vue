<template>
  <nav class="navbar fixed-top shadow-lg" id="nav">
    <div class="container-fluid p-0">
      <div class="row m-0">
      <!-- <a class="navbar-brand" href="#">
        <img class="" src="@/assets/logo.png" width="60">
      </a> -->
        <div class="col-sm-12 col-md-12 col-lg-12">
          <a class="nav-link d-inline" href="#"><i class="fab fa-instagram"></i></a>
          <a class="nav-link d-inline" href="#"><i class="fab fa-facebook"></i></a>
          <a class="nav-link d-inline" href="#"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
  
  <nav class="navbar footer fixed-bottom">
    <div class="conatiner">
      <div class="row m-0">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <small>Developed with ❤️ by <a href="https://facebook.com/realrecordzlab" target="_blank">realrecordzlab</a></small>
        </div>
      </div>
    </div>
  </nav>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  height: 50px;
  background: white;
}

a, .nav-link {
  color: black !important;
  text-decoration: none !important;
}

.footer {
  background: white;
}
</style>
