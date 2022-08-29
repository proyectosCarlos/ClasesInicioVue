<template>
  <div>App</div>
  <fili />
  <felipe />
  <!-- <div class="grid-container">
    <header class="header">HEADER</header>
    <nav class="navbar">NAVBAR</nav>
    <aside class="sidebar">SIDEBAR</aside>
    <article class="main">MAIN</article>
    <footer class="footer">FOOTER</footer>
  </div> -->
</template>

<script>
import fili from "./components/home/headerInicio";
import felipe from "./components/home/footerInicio";
export default {
  components: { fili, felipe },
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}

.header {
  grid-area: header;
  background-color: brown;
}
.navbar {
  grid-area: navbar;
  background-color: rgb(42, 165, 118);
}
.sidebar {
  grid-area: sidebar;
  background-color: rgb(148, 146, 30);
}
.main {
  grid-area: main;
  background-color: rgb(184, 101, 6);
}
.footer {
  grid-area: footer;
  background-color: rgb(52, 6, 160);
}

.grid-container {
  height: 100vh;
  display: grid;
  margin: 0;
  grid-template:
    "header" 100px
    "navbar" 100px
    "sidebar" 100px
    "main" auto
    "footer" 100px;
}

@media (min-width: 900px) {
  .grid-container {
    height: 100vh;
    display: grid;
    margin: 0;
    grid-template:
      "header header header" 100px
      "navbar main   sidebar" auto
      "footer footer footer" 100px
      /200px auto 200px;
  }
}
</style>
