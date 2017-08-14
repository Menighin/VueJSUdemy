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

    }
};

const actions = {
    buyStock({ commit, rootState }, { buyOrder }) {
        commit('buyStock', buyOrder);
        rootState.money -= buyOrder.price * buyOrder.quantity;
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