const store = new Vuex.Store({
  state: {
    orders: [
      {
        id: faker.random.uuid(),
        customer: 'A先生',
        productList: [
          {
            name: '樸素大衣',
            price: 12,
            quantity: 1,
          },
        ],
        total: 12,
        addToCart: '2018/06/06 13:39',
        checkout: '2018/06/06 15:20',
        address: '台南市永康區五王里6000號',
        status: 0,
      },
      {
        id: faker.random.uuid(),
        customer: 'A先生',
        productList: [
          {
            name: '樸素大衣',
            price: 12,
            quantity: 1,
          },
        ],
        total: 12,
        addToCart: '2018/06/06 13:39',
        checkout: '2018/06/06 15:20',
        address: '台南市永康區五王里6000號',
        status: 0,
      },
    ],
    products: [
      {
        id: faker.random.uuid(),
        name: '樸素大衣',
        picture: '',
        original: 13,
        discount: 12,
        details: [
          {
            size: 'L',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'L',
            color: 'Black',
            inventory: 20,
          },
          {
            size: 'M',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'M',
            color: 'Black',
            inventory: 20,
          },
          {
            size: 'S',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'S',
            color: 'Black',
            inventory: 20,
          },
        ],
      },
      {
        id: faker.random.uuid(),
        name: '樸素大衣',
        picture: '',
        original: 13,
        discount: 12,
        details: [
          {
            size: 'L',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'L',
            color: 'Black',
            inventory: 20,
          },
          {
            size: 'M',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'M',
            color: 'Black',
            inventory: 20,
          },
          {
            size: 'S',
            color: 'gray',
            inventory: 15,
          },
          {
            size: 'S',
            color: 'Black',
            inventory: 20,
          },
        ],
      },
    ],
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    updateChecked({ commit }, payload) {
      commit('updateChecked', payload);
    },
  },
  mutations: {
    updateChecked(state, payload) {
      state.checkedNames = payload;
    },
  },
});
