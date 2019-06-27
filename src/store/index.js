import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Api from '@/services/api.services'

export default new Vuex.Store({
    strict: true,
    plugins: [],
    modules: {},
    state: {
        loading: false,
        cities: [],
        regions: [],
        requestError: {
            status: false,
            message: ''
        }
    },
    getters: {
        cities: state => {
            return state.cities
        },
        cities: state => {
            return state.cities
        },
        regions: state => {
            return state.regions
        },
        requestError: state => {
            return state.requestError
        }
    },
    mutations: {
        setCities(state, data) {
            state.cities = data
        },
        setRegions(state, data) {
            state.regions = data
        },
        requestError(state, data) {
            state.requestError = data
        },
        requestSuccess(state, data) {
            state.requestError = {
                status: false,
                message: ''
            }
        }
    },
    actions: {
        async getRegions({
            commit
        }) {
            try {
                const response = await Api.getRegions();
                const data = await response.data

                commit('setRegions', data)

                commit('requestSuccess')

                return data

            } catch (error) {
                console.log('Error', error)
                commit('requestError', {
                    status: true,
                    message: error.message
                });
            }
        },
        async getCities(context, identifier) {
            try {
                const response = await Api.getCities(identifier);
                const data = await response.data

                context.commit('setCities', data);

                context.commit('requestSuccess')

                return data

            } catch (error) {
                console.log('Error', error)
                commit('requestError', {
                    status: true,
                    message: error.message
                });
            }
        }
    }
})