<template>
  <section class="basket-info-wrapper">
    <div class="basket-total">
      <h5>Сумма:</h5>
      <span v-text="+this.$store.state.totalPrice.toFixed(2) + '$'"></span>
    </div>
    <form action="" class="basket-form">
      <label for="">Имя</label><input type="text" placeholder="Введите имя" />
      <label for="">Телефон</label> <input type="tel" />
    </form>
    <button class="btn btn-pay"><span>Оформить заказ</span></button>
  </section>
</template>

<script>
export default {
  name: 'AcvBasketForm',
};
</script>

<style></style>
<style scoped>
.basket-info-wrapper {
  display: flex;
  width: 22rem;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: auto;
  border: 1px solid black;
  gap: 2rem;
  padding: 1rem;
  border-radius: 5px;
}
.basket-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
}
.basket-total {
  font-weight: 600;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.btn-pay {
  width: auto;
  height: 5rem;
  border-radius: 10px;
  border: 2px solid #75d5ce;
  background: #98c9c5;
  box-sizing: border-box;
  color: #fff;
}
</style>
