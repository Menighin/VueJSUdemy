import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        money: 10000
    },
    getters: {
        getMoney(state) {
            return state.money;
        }
    },
    modules: {
        stocks,
        portfolio
    }
});