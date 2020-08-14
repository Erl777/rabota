import * as type from './types';
import actions from './actions';

const state = {
    categories: [],
    category: {}
};

const mutations = {
    [type.GET_CATEGORIES](state, payload) {
        state.categories = payload;
    },
};

const getters = {
    categories: state => {
        return state.categories;
    },
    category: state => {
        return state.category;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};