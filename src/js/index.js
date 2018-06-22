const Home = Vue.component('Home', {
  template: '#Home',
  data() {
    return {
      timeIntervalSelect: [],
    };
  },
  mounted() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: '#7ED321',
            borderColor: '#7ED321',
            data: [0, 10, 5, 2, 20, 30, 50],
            fill: false,
            lineTension: 0,
          },
          {
            label: 'Cost',
            backgroundColor: '#D0021B',
            borderColor: '#D0021B',
            data: [0, 10, 15, 5, 20, 30, 50],
            fill: false,
            lineTension: 0,
          },
          {
            label: 'Income',
            backgroundColor: '#4A90E2',
            borderColor: '#4A90E2',
            data: [0, 10, 5, 2, 30, 30, 50],
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
};
const Product = {
  template: '#Product',
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
});
