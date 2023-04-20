<template>
  <div class="brands-wrapper">
    <h2 @click="getCatalog" class="brands-label">Бренды</h2>
    <ul class="brands-filter_list">
      <!-- <li>brand 1</li> -->
      <li
        class="brands-filter_item"
        v-for="value in this.catalog"
        :key="value.id"
      >
        {{ value.title }}
      </li>
    </ul>
    <button class="btn btn-get">Применить</button>
    <div class="refresh-content">
      <div class="btn-refresh_across">
        <span class="btn-refresh_across_top"></span>
        <span class="btn-refresh_across_bot"></span>
      </div>
      <a class="btn-refresh">Сбросить</a>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import brands from '@/assets/json/brands.json';

export default {
  name: 'AcvFilterBrands',

  data() {
    return {
      catalog: [],
      currentFilters: [],
    };
  },

  methods: {
    // getDataProducts() {},
    // handleMouseOver() {
    //   console.log('mouse v3');
    // },
    // add() {
    //   if (this.ticker.length === 0) {
    //     return;
    //   }
    //   this.$emit('add-ticker', this.ticker);
    //   this.ticker = '';
    // },
    getCatalog() {
      console.log(this.catalog);
      // fetch('@/assets/json/brands.json')
      //   .then((response) => response.json())
      //   .then((catalog) => {
      //     console.log(catalog);
      //   });
      // console.log(this.catalog);
    },
  },
  created() {
    this.catalog = [...brands];
    // let items = [...brands];
    console.log(...brands);

    //   fetch('../src/assets/json/brands.json')
    //     .then((response) => response.json())
    //     .then((catalog) => {
    //       this.catalog = catalog;
    //     });
    //   // console.log(this.catalog);
  },
};
</script>

<style></style>

<style scoped>
.brands-wrapper {
  height: 100%;
  width: 20rem;
  background: greenyellow;
}

.brands-label {
  color: #4a908a;
  font-size: 1.8rem;
  font-weight: 600;
}
.brands-filter_list {
  padding-left: 2rem;
}
.brands-filter_item {
  list-style-type: none;
  font-size: 1.5rem;
  padding: 5px 0;
  position: relative;
  cursor: pointer;
}
.brands-filter_item::before {
  width: 12px;
  height: 12px;
  border: 1px solid #00b3a5;
  position: absolute;
  left: -18px;
  top: 0.7rem;
  content: '';
  cursor: pointer;
}
.btn {
  width: 170px;
  height: 4rem;
  border-radius: 15px;
  box-sizing: border-box;
  border: 1px solid #00b3a5;
  background-color: #00b3a5;
  color: #fff;
}
.refresh-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  font-size: 1.5rem;
}
.btn-refresh {
  color: #75d5ce;
  width: auto;
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px solid #75d5ce;
}
.btn-refresh_across {
  position: relative;
  width: 1rem;
  height: auto;
  cursor: pointer;
}
.btn-refresh_across_top {
  width: 10px;
  height: 1px;
  background-color: #75d5ce;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(135deg);
}
.btn-refresh_across_bot {
  width: 10px;
  height: 1px;
  background-color: #75d5ce;
  position: absolute;
  top: 0;
  left: -1;
  transform: rotate(45deg);
}
</style>
