const store = new Vuex.Store({
  state: {
    orders: [
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
      {
        id: faker.random.uuid(),
        customer: faker.name.findName(),
        productList: [
          {
            name: faker.commerce.productName(),
            price: `$${faker.commerce.price()}`,
            quantity: _.random(1, 3),
          },
        ],
        total: `$${faker.commerce.price()}`,
        addToCart: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        checkout: moment(faker.date.recent()).format('YYYY/MM/DD HH:mm'),
        address: faker.address.streetAddress(),
        status: _.random(0, 3),
      },
    ],
    products: [
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
        ],
      },
      {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        picture: `https://picsum.photos/100/100/?image=${_.random(600, 800)}`,
        original: `$${faker.commerce.price()}`,
        discount: `$${faker.commerce.price()}`,
        details: [
          { size: 'L', color: faker.commerce.color(), inventory: 15 },
          { size: 'L', color: faker.commerce.color(), inventory: 20 },
          { size: 'M', color: faker.commerce.color(), inventory: 15 },
          { size: 'M', color: faker.commerce.color(), inventory: 20 },
          { size: 'S', color: faker.commerce.color(), inventory: 15 },
          { size: 'S', color: faker.commerce.color(), inventory: 20 },
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
