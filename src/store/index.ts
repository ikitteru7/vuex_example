import Vue from 'vue';
import Vuex, { ActionContext, StoreOptions } from 'vuex';

Vue.use(Vuex);

interface State{
  count: number;
}

const store: StoreOptions<State> = {
  state:{
    // count 강제구현
    count: 0,
  },
  mutations:{
    setCount(state: State, count: number){
      state.count = count;
    },
  },
  actions:{
    increase({state, commit}: ActionContext<State, State>){
        //commit -> mutation호출
        commit('setCount', state.count + 1);
    },
    decrease({state, commit}: ActionContext<State, State>){
      //commit -> mutation호출
      commit('setCount', state.count - 1);
    },
  },
  getters:{
    count: (state: State) => state.count,
  },
};

export default new Vuex.Store(store);