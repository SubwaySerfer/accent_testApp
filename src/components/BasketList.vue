<template>
  <section class="list-wrapper">
    <ul class="basket-items">
      <li class="basket-card" v-for="value in this.currentArr" :key="value[0]">
        <!-- {{ value }} -->
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
          <input
            class="basket-card_count_inp"
            type="number"
            :id="value[2].id"
            :value="value[1]"
            @input="changeCount"
            placeholder="0"
          />
          <label>Кол-во</label>
        </div>
        <div class="basket-card_btns">
          <button
            class="basket-card_btns_add btn"
            :name="value[2].id"
            @click="addItem"
          >
            добавить
          </button>
          <button
            class="basket-card_btns_del btn"
            :name="value[2].id"
            @click="delItem"
          >
            удалить
          </button>
        </div>
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
      currentArr: [],
    };
  },
  methods: {
    changeCount() {
      this.$store.state.basketItems[event.target.id - 1][1] =
        event.target.value;
      this.checkPrice();
      this.checkCounter();
    },
    refreshArray() {
      this.$store.state.basketItems.forEach((el, idx) => {
        if (el.length > 2) {
          this.currentArr.find((elem) => elem[2].id == el[2].id)[1] =
            this.$store.state.basketItems[idx][1];
        }
      });
    },
    checkCounter() {
      let sum = 0;
      this.$store.state.basketItems.forEach((el) => {
        sum += +el[1];
      });
      this.$store.state.counterItems = sum;
    },
    checkPrice() {
      let priceSum = 0;
      this.$store.state.basketItems.forEach((el) => {
        if (el.length > 2) {
          priceSum += el[1] * el[2].regular_price.value;
        }
      });
      this.$store.state.totalPrice = priceSum;
    },
    addItem() {
      console.log(
        this.$store.state.basketItems[event.target.name - 1][2].regular_price
      );
      this.$store.state.basketItems[event.target.name - 1][1]++;
      // this.$store.state.totalPrice +=
      //   this.currentArr[event.target.name - 1][2].regular_price.value;

      this.refreshArray();
      this.checkCounter();
      this.checkPrice();
    },
    delItem() {
      if (this.$store.state.basketItems[event.target.name - 1][1] > 0) {
        this.$store.state.basketItems[event.target.name - 1][1]--;
        // this.$store.state.totalPrice -=
        //   this.currentArr[event.target.name - 1][2].regular_price.value;
        this.refreshArray();
        this.checkCounter();
        this.checkPrice();
      }
    },
  },
  //TODO: нужно сделать отслеживание изменений в basketItems
  created() {
    this.$store.state.basketItems.forEach((el) => {
      if (el.length > 2) {
        this.currentArr.push(el);
      }
    });
    this.checkPrice();
    // this.$store.state.basketItems = this.$store.state.basketItems.filter(
    //   (el) => el[1] != 0
    // );
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

.basket-card_btns {
  display: flex;
  flex-direction: column;
  width: 8rem;
  gap: 1rem;
}
.basket-card_btns_add {
  background-color: #55cd5f;
  border: 1px solid #55cd5f;
  border-radius: 10px;
  font-weight: 600;
}
.basket-card_btns_del {
  background-color: #e93758;
  border: 1px solid #e93758;
  border-radius: 10px;
  font-weight: 600;
}
.btn {
  height: 2.5rem;
}
</style>
