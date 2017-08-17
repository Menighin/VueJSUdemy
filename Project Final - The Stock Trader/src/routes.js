import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: Home, name: 1},
    { path: '/portfolio', component: Portfolio, name: 2},
    { path: '/stocks', component: Stocks, name: 3}
];