<template>
  <div id="app">
    <div id="nav">
      <!-- START 1110 -->
      <router-link to="/about">About</router-link> |
      <router-link to="/secret">Secret</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> 
      <!-- END 1110 -->

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
