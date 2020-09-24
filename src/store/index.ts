/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createStore, MutationTree, ActionContext,
  ActionTree, GetterTree, createLogger,
} from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export type State = {
  counter: number
  locale: string
}

const state: State = {
  counter: 0,
  locale: 'en',
}

export enum MutationTypes {
  INC_COUNTER = 'SET_COUNTER'
}

export enum ActionTypes {
  INC_COUNTER = 'ACT_SET_COUNTER'
}

export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter += payload
  },
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload)
  },
}
export type Getters = {
  getCounter(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  getCounter: state => state.counter,
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
