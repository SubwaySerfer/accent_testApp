<template>
  <div>
    <ul class="catalog-list">
      <!-- <li class="list-item">
        <img class="list-item_img" src="@/assets/images/1.png" alt="img" />
        <h5 class="list-item_info">Product 1</h5>
        <h5 class="list-item_info">brand: 9</h5>
        <h6 class="list-item_info_price">Цена: 27.12 USD</h6>
      </li> -->

      <!-- <li class="list-item" v-for="value in this.list" :key="value.id"> -->
      <li class="list-item" v-for="value in currentList" :key="value.id">
        <!-- <img v-bind:src="value.image" alt="" /> -->
        <img class="list-item_img" :src="value.image" alt="product image" />
        <!-- {{ value }} -->
        <!-- {{ value.image }} -->
        <!-- <img v:src="require('@/assets/${value.image}')" /> -->
        <!-- <img class="list-item_img" src="@/assets/images/1.png" alt="img" />-->
        <h5 class="list-item_info">{{ value.title }}</h5>
        <h5 class="list-item_info">brand: {{ value.brand }}</h5>
        <h6 class="list-item_info_price">
          Цена: {{ value.regular_price.value }}
          {{ value.regular_price.currency }}
        </h6>
        <button class="list-item_btn btn">Добавить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import catalogList from '@/assets/json/products.json';

export default {
  name: 'AcvCatalogList',

  data() {
    return {
      list: [],
      currentList: [],
    };
  },
  methods: {},
  created() {
    this.list = [...catalogList];
    // this.list.forEach((el) => console.log(el));
    this.currentList = [...this.list.slice(0, 6)];
    // console.log('...', this.currentList);
    // console.log(this.list.slice(0, 6));
  },
};
</script>

<style></style>
<style scoped>
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
</style>
