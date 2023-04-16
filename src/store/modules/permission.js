import { getRouters } from '@/api/menu'
import { constantRoutes } from '@/router'
const state = {
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state, routes) => {
        state.defaultRoutes = constantRoutes.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state, routes) => {
        state.topbarRouters = routes
    },
    SET_SIDEBAR_ROUTERS: (state, routes) => {
        state.sidebarRouters = routes
    },
}

const actions = {
    GenerateRoutes({ commit }) {
        return new Promise(resolve => {
            getRouters().then(res => {
                commit('SET_SIDEBAR_ROUTERS',constantRoutes.concat(res.data))
                resolve(res)
            })
        })
    }
}

const permission = {
    state,
    mutations,
    actions
}
export default permission