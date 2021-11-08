import { GetterTree } from 'vuex'

import { RootState } from '@/stores/rootState'
import { State } from './state'

import { EXAMPLE_GETTER_TYPES } from '@/@types/state.interface'
import { ExampleList } from '@/@types/examplelist.interface'

export type Getters = {
  [EXAMPLE_GETTER_TYPES.exampleList](state: State): ExampleList[] | [];
  [EXAMPLE_GETTER_TYPES.count](state: State): number
}

export const getters: GetterTree<State, RootState> & Getters = {
  [EXAMPLE_GETTER_TYPES.exampleList]: (state) => state.list,
  [EXAMPLE_GETTER_TYPES.count]: (state) => state.count
}
