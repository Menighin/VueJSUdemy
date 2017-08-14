import Vue from 'vue';

const state = {
    stocks: []
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    }
};

const actions = {
    fetchStocks({ commit }) {
        Vue.http.get('http://localhost:8000/stocks')
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