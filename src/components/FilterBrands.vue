<template>
  <div class="brands-wrapper">
    <h2 @click="getCatalog" class="brands-label">Бренды</h2>
    <ul class="brands-filter_list">
      <li
        class="brands-filter_item"
        v-for="value in this.catalog"
        :key="value.id"
      >
        <input
          type="checkbox"
          :name="value.id"
          :id="value.id"
          class="brands-filter_inp"
        />
        <label class="brands-filter_label" :for="value.id">{{
          value.title
        }}</label>
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
import brands from '@/assets/json/brands.json';

export default {
  name: 'AcvFilterBrands',

  data() {
    return {
      catalog: [],
      currentFilters: [],
    };
  },

  methods: {},
  created() {
    this.catalog = [...brands];
  },
};
</script>

<style></style>

<style scoped>
.brands-wrapper {
  height: 100%;
  width: 20rem;
  /* background: greenyellow; */
}

.brands-label {
  color: #4a908a;
  font-size: 1.8rem;
  font-weight: 600;
}
.brands-filter_list {
  padding-left: 0;
  margin-bottom: 3rem;
}
.brands-filter_item {
  list-style-type: none;
  font-size: 1.5rem;
  padding: 5px 0;
  gap: 5px;
  display: flex;
  cursor: pointer;
}
.brands-filter_label::before {
  width: 12px;
  height: 12px;
  border: 1px solid #00b3a5;
  position: absolute;
  left: -21px;
  top: 3px;
  content: '';
  cursor: pointer;
}
.brands-filter_inp:checked ~ .brands-filter_label::after {
  content: url('@/assets/icons/filters_icon.svg');
  stroke: red;
  position: absolute;
  left: -22px;
  top: 1px;
}

/* .brands-filter_inp:checked ~ .brands-filter_label::before {
} */
.brands-filter_label {
  position: relative;
}

.brands-filter_inp {
  /* background-color: transparent;
  border: 1px solid transparent; */
  opacity: 0;
  margin-left: 0;
  position: relative;
}
.brands-filter_inp {
}
.btn {
  width: 175px;
  height: 45px;
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
