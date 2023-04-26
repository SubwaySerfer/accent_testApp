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
  gap: 2rem;
  padding-top: 2rem;
}
@media (max-width: 1000px) {
  .catalog-wrapper {
    justify-content: flex-start;
    margin-left: 2.5rem;
    gap: 0;
  }
}
@media (max-width: 740px) {
  .catalog-wrapper {
    gap: 5px;
  }
}
@media (max-width: 560px) {
  .catalog-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
