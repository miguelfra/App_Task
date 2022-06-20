<template>
  <div id="app">
    <nav>
      <router-link to="/">Task</router-link> |
      <router-link to="/newTask">New Task</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1981e9fe;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1981e9fe;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
