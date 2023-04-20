<template>
  <div class="catalog-wrapper">
    <filter-brands></filter-brands>
    <catalog-list></catalog-list>
  </div>
</template>

<script>
import FilterBrands from '@/components/FilterBrands.vue';
import CatalogList from '@/components/CatalogList.vue';

export default {
  name: 'AcvMainCatalog',
  components: {
    FilterBrands,
    CatalogList,
  },
};
</script>

<style></style>
<style scoped>
.catalog-wrapper {
  height: 100%;
  grid-area: 2 / 1 / end / end;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
