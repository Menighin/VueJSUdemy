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
    mutations: {
        setMoney(state, money) {
            state.money = money;
        }
    },
    actions: {
        setMoney( { commit }, { money }) {
            commit('setMoney', money);
        }
    },
    modules: {
        stocks,
        portfolio
    }
});