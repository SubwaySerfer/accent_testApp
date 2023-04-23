import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      basketItems: [],
      counterItems: 0,
      totalPrice: Math.floor(0),
    };
  },
});

export default store;
