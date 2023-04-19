<template>
  <div class="main-wrapper">
    <header-main></header-main>
    <section></section>
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
export default {
  name: 'App',
  components: {
    HeaderMain,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html {
  font-size: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
body,
h1,
h2,
h3,
ul {
  margin: 0;
}
</style>
<style scoped>
.main-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
}
</style>
