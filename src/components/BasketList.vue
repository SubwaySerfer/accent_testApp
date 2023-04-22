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
        <img
          class="basket-card_img"
          :src="value[2]['image']"
          alt="product image"
        />
        <div class="card_info">
          <h5 class="list-item_info">{{ value[2].title }}</h5>
          <h5 class="list-item_info">brand: {{ value[2].brand }}</h5>
        </div>

        <h6 class="list-item_info_price">
          Цена: {{ value[2].regular_price.value }}
          {{ value[2].regular_price.currency }}
        </h6>
        <div class="basket-card_count">
          <input class="basket-card_count_inp" type="text" :value="value[1]" />
          <label>Кол-во</label>
        </div>
        <div><button>plus</button><button>min</button></div>
        <!-- {{ value }} -->
        <!-- {{ value[2] }}
        {{ value[2]['image'] }} -->
      </li>
    </ul>
  </section>
</template>

<script>
import catalogList from '@/assets/json/products.json';

export default {
  name: 'AcvBasketList',

  data() {
    return {
      catalog: [],
    };
  },
  methods: {},
  created() {
    this.$store.state.basketItems = this.$store.state.basketItems.filter(
      (el) => el[1] != 0
    );
    this.catalog = [...catalogList];
  },
};
</script>

<style></style>

<style scoped>
.list-wrapper {
  flex: 1 0;
}
.basket-items {
  display: flex;
  flex-flow: column wrap;
  width: auto;
  flex: 1 0;
  gap: 2rem;
}
.basket-card {
  width: 100%;
  height: auto;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  background: greenyellow;
  list-style-type: none;
  display: flex;
  font-size: 1.6rem;
  flex-direction: row;
  box-sizing: border-box;
  padding: 5px 10px;
}
.basket-card_img {
  width: 65px;
}

.card_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.basket-card_count {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.basket-card_count_inp {
  width: 40px;
}
</style>
