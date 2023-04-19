<template>
  <header class="header">
    <div class="header-counter">
      <h3 class="header-counter_label">Товаров:</h3>
      <span class="header-counter_number">0</span>
    </div>
    <img class="icon" src="../assets/icons/basket_icon.svg" />
  </header>
</template>

<script>
export default {
  name: 'AcvHeaderMain',
};
</script>

<style></style>
<style scoped>
.header {
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
}
.header-counter {
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
</style>
