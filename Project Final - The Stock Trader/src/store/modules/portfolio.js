const state = {
    portfolio: []
};

const mutations = {
    buyStock(state, buyOrder) {
        
        let found = false;
        for (var i = 0; i < state.portfolio.length; i++) {
            if (state.portfolio[i].name === buyOrder.name) {
                state.portfolio[i].quantity += buyOrder.quantity;
                found = true;
                break;
            }
        }

        if (!found)
            state.portfolio.push(buyOrder);

    },
    sellStock(state, salesOrder) {
        for (var i = 0; i < state.portfolio.length; i++) {
            if (state.portfolio[i].name === salesOrder.name) {
                state.portfolio[i].quantity -= salesOrder.quantity;
                break;
            }
        }
    },
    setPortfolio(state, portfolio) {
        state.portfolio = portfolio;
    }
};

const actions = {
    buyStock({ commit, rootState }, { buyOrder }) {
        commit('buyStock', buyOrder);
        rootState.money -= buyOrder.price * buyOrder.quantity;
    },
    sellStock({ commit, rootState }, { salesOrder }) {
        commit('sellStock', salesOrder);
        rootState.money += salesOrder.price * salesOrder.quantity;
    },
    setPortfolio({ commit }, { portfolio }) {
        commit('setPortfolio', portfolio);
    }
};

const getters = {
    portfolio: state => {
        return state.portfolio;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};