Object.defineProperty(Vue.prototype, '$faker', { value: faker });

const Home = Vue.component('Home', {
  template: '#Home',
  data() {
    return {
      timeIntervalSelect: [],
    };
  },
  mounted() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const revenueArray = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 100; i++) {
      revenueArray[_.random(0, 6)] += 1;
    }
    const costArray = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 100; i++) {
      costArray[_.random(0, 6)] += 1;
    }
    const incomeArray = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 100; i++) {
      incomeArray[_.random(0, 6)] += 1;
    }
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: '#7ED321',
            borderColor: '#7ED321',
            data: revenueArray,
            fill: false,
            lineTension: 0,
          },
          {
            label: 'Cost',
            backgroundColor: '#D0021B',
            borderColor: '#D0021B',
            data: costArray,
            fill: false,
            lineTension: 0,
          },
          {
            label: 'Income',
            backgroundColor: '#4A90E2',
            borderColor: '#4A90E2',
            data: incomeArray,
            fill: false,
            lineTension: 0,
          },
        ],
      },
      // Configuration options go here
      options: {},
    });
  },
});

const Orders = {
  template: '#Orders',
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
  },
};

const Product = {
  template: '#Product',
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app',
  router,
  store,
});
