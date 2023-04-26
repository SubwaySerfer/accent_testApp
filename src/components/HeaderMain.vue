<template>
  <header class="header">
    <div class="header-counter">
      <h3 class="header-counter_label">Товаров:</h3>
      <span
        class="header-counter_number"
        v-text="this.$store.state.counterItems"
      ></span>
    </div>
    <router-link to="/basket"
      ><img class="icon" src="../assets/icons/basket_icon.svg" onclick=""
    /></router-link>
  </header>
</template>

<script>
import '@/router/index';

export default {
  name: 'AcvHeaderMain',

  data() {
    return {};
  },
};
</script>

<style></style>
<style scoped>
.header {
  grid-area: 1 / 1 / 2 / end;
  display: flex;
  height: 8rem;
  background-color: #00b3a5;
  gap: 15px;
  padding: 0 20rem;
  align-items: center;
  justify-content: flex-end;
}
.icon {
  width: 3rem;
  cursor: pointer;
}
.header-counter {
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
@media (max-width: 1000px) {
  .header {
    padding: 0 4rem;
  }
}
</style>
