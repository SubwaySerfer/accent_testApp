<template>
  <div class="main-wrapper">
    <header-main></header-main>
    <router-view class="router-wrapper"></router-view>
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
h4,
h5,
h6,
ul {
  margin: 0;
}
.btn {
  cursor: pointer;
}
</style>
<style scoped>
.main-wrapper {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 8rem repeat(8, 1fr);
  /* justify-content: center; */
}
/* .router-wrapper {
  grid-area: 2 / 1 / end / end;
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
} */
</style>
