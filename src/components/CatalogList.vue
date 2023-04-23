<template>
  <section class="wrapper">
    <div class="catalog-wrapper">
      <div class="">
        <img
          src="@/assets/icons/left-icon.svg"
          alt="left arrow"
          class="catalog-wrapper-arrow_left"
          @click="prevPage"
        />
      </div>
      <ul class="catalog-list">
        <li class="list-item" v-for="value in currentList" :key="value.id">
          <img class="list-item_img" :src="value.image" alt="product image" />
          <h5 class="list-item_info">{{ value.title }}</h5>
          <h5 class="list-item_info">brand: {{ value.brand }}</h5>
          <h6 class="list-item_info_price">
            Цена: {{ value.regular_price.value }}
            {{ value.regular_price.currency }}
          </h6>
          <button @click="addItem" :name="value.id" class="list-item_btn btn">
            Добавить
          </button>
        </li>
      </ul>
      <div>
        <img
          src="@/assets/icons/right-icon.svg"
          alt="right arrow"
          class="catalog-wrapper-arrow_right"
          @click="nextPage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import catalogList from '@/assets/json/products.json';
import store from '@/store';

export default {
  name: 'AcvCatalogList',

  data() {
    return {
      list: [],
      currentList: [],
      currentFilters: [],
      otherItems: [],
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  watch: {
    '$store.state.filteredItems': function () {
      this.currentList = [];
      this.otherItems = [];
      if (this.$store.state.filteredItems.length != 0) {
        this.currentFilters = [...this.$store.state.filteredItems];
        this.currentFilters.forEach((el) => {
          this.otherItems.push(this.list.find((elem) => elem.brand == el));
        });
        this.currentList = this.otherItems.slice(0, 6);
      } else {
        this.currentList = [...this.list.slice(0, 6)];
      }
    },
  },
  methods: {
    // действует добавление, после перехода, уже фильтруется массив
    addItem() {
      this.$store.state.basketItems[event.target.name - 1][1]++;

      this.$store.state.basketItems[event.target.name - 1][2] =
        this.currentList.find((el) => el.id == event.target.name);

      this.checkCounter();
    },
    //TODO: сделать функцию глобальной есть повтор
    checkCounter() {
      let sum = 0;
      this.$store.state.basketItems.forEach((el) => {
        sum += el[1];
      });
      this.$store.state.counterItems = sum;
    },

    nextPage() {},
    prevPage() {},
  },

  created() {
    this.list = [...catalogList];
    this.currentList = [...this.list.slice(0, 6)];
    this.list.forEach((el) => {
      store.state.basketItems.push([el.id, 0]);
    });
  },
};
</script>

<style></style>
<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
}
.catalog-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.catalog-list {
  display: flex;
  gap: 2rem;
  flex-flow: row wrap;
  width: 50vw;
  padding: 0;
}
.list-item {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  flex: 1 0 25%;
  gap: 5px;
  box-sizing: border-box;
  padding: 1rem 2rem;
  border-radius: 15px;
}
.list-item_img {
  width: 8rem;
}
.list-item_info {
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
}
.list-item_info_price {
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
}
.list-item_btn {
  border-radius: 5px;
  height: 3rem;
  width: auto;
  border: 1px solid #00b3a5;
  background-color: #75d5ce;
}
.catalog-wrapper-arrow_left,
.catalog-wrapper-arrow_right {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
