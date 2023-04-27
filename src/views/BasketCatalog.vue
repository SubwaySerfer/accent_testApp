<template>
  <div class="basket-wrapper">
    <basket-list></basket-list>
    <basket-form></basket-form>
  </div>
</template>

<script>
import BasketList from '@/components/BasketList.vue';
import BasketForm from '@/components/BasketForm.vue';

export default {
  name: 'ActBasketCatalog',
  components: {
    BasketList,
    BasketForm,
  },
};
</script>

<style></style>
<style scoped>
.basket-wrapper {
  /* display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 1200px;
  padding: 0 auto;
  margin: 0 auto;
  width: 100vw; */

  height: 100%;
  width: 1000px;
  grid-area: 2 / 1 / end / end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  justify-self: center;
  gap: 2rem;
  padding-top: 2rem;
}
@media (max-width: 1035px) {
  .basket-wrapper {
    gap: 1rem;
    width: auto;
  }
}
@media (max-width: 620px) {
  .basket-wrapper {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
    justify-content: end;
  }
}
</style>
