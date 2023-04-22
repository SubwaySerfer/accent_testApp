<template>
  <section class="list-wrapper">
    <!-- <p v-text="$store.state.basketItems"></p>
    <p v-text="$store.state.counterItems"></p> -->
    <ul class="basket-items">
      <li
        class="basket-card"
        v-for="value in this.$store.state.basketItems"
        :key="value[0]"
      >
        {{ value[1] }}
      </li>
    </ul>
    <!-- {{ $store.state.basketItems[2] }} -->
  </section>
</template>

<script>
export default {
  name: 'AcvBasketList',

  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.state.basketItems = this.$store.state.basketItems.filter(
      (el) => el[1] != 0
    );
  },
};
</script>

<style></style>

<style scoped>
.basket-items {
  display: flex;
  flex-flow: column wrap;
  width: 500px;
}
.basket-card {
  width: auto;
  height: 50px;
  background: greenyellow;
  list-style-type: none;
}
</style>
