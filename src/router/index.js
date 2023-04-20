import { createRouter, createWebHashHistory } from 'vue-router';
import BasketCatalog from '@/views/BasketCatalog.vue';
// import Contacts from '@/views/Contacts.vue';
import MainCatalog from '@/views/MainCatalog.vue';
// import PortfolioProjects from '@/views/PortfolioProjects';
// import MyOffer from '@/views/MyOffer.vue';
// import MyHobbies from '@/views/MyHobbies.vue';
// import MyCv from '@/views/MyCv.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/main', component: MainCatalog, alias: '/' },
    { path: '/basket', component: BasketCatalog },
  ],
});
