import Vue from 'vue';

const state = {
    stocks: [],
    yesterdayStocks: [],
    stocksHistory: []
};

const mutations = {
    setStocks(state, stocks) {
        state.yesterdayStocks = JSON.parse(JSON.stringify(state.stocks));
        state.stocks = stocks;
    },
    addStocksHistory(state) {
        state.stocksHistory.push(JSON.parse(JSON.stringify(state.stocks)));
    }
};

const actions = {
    fetchStocks({ commit }) {
        Vue.http.get('stocks')
            .then((response) => {
                return response.json();
            })
            .then(json => {
                commit('setStocks', json);
            })
            .catch((error => {
                console.log('Error: ' + error.statusText);
                console.log(error);
            }));
    },
    addStocksHistory({ commit }) {
        commit('addStocksHistory');
    }
};

const getters = {
    stocks: state => {

        for(var i = 0; i < state.yesterdayStocks.length; i++) {

            let status = '-';
            if (state.stocks[i].price > state.yesterdayStocks[i].price)
                status = 'up';
            else if (state.stocks[i].price < state.yesterdayStocks[i].price)
                status = 'down';

            state.stocks[i].status = status;
        }

        return state.stocks;
    },
    stocksHistory: state => {
        return state.stocksHistory;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};