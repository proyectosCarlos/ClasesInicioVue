<template>
  <h1>Vista principal</h1>
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
    <router-link to="/Erick">Formulario registro</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
