const state = {
    stocks: []
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    randomStocks(state) {

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();
    },
    initStocks: ({ commit }) => {
        commit('setStocks', []);
    },
    randomizeStocks: ({ commit }) => {
        commit('randomStocks');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};