import {getRouters} from '@/api/menu'
const state = {}

const mutations = {}

const actions = {
    GenerateRoutes({ commit }){
        return new Promise(resolve => {
            getRouters().then(res => {
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