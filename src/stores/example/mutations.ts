import { MutationTree } from 'vuex'

import { State } from './state'
import { ExampleList } from '@/@types/examplelist.interface'

import { EXAMLE_MUTATION_TYPES } from '@/@types/mutations.interface'

export type Mutations<S = State> = {
  [EXAMLE_MUTATION_TYPES.SET_LIST](state: S, payload: ExampleList[]): void,
  [EXAMLE_MUTATION_TYPES.UPDATE_COUNT](state: S, payload: number) : void
}

export const mutations: MutationTree<State> & Mutations = {
  [EXAMLE_MUTATION_TYPES.SET_LIST] (state: State, list: ExampleList[]) {
    state.list = list
  },
  [EXAMLE_MUTATION_TYPES.UPDATE_COUNT] (state: State, count: number) {
    state.count = count
  }
}
