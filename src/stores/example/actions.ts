import { ActionTree, ActionContext } from 'vuex'

import { RootState } from '@/stores/rootState'

import { State } from './state'
import { Mutations } from './mutations'
//
import { ExampleList } from '@/@types/examplelist.interface'
import { EXAMLE_MUTATION_TYPES } from '@/@types/mutations.interface'
import { EXAMLE_ACTION_TYPES } from '@/@types/actions.interface'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [EXAMLE_ACTION_TYPES.fetchList](
    { commit }: AugmentedActionContext,
  ): Promise<ExampleList[]>;
  [EXAMLE_ACTION_TYPES.changeCount](
    { commit }: AugmentedActionContext,
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [EXAMLE_ACTION_TYPES.fetchList] ({ commit }) {
    const result:ExampleList[] = await new Promise((resolve) => {
      setTimeout(() => {
        const list:ExampleList[] = Array.from(Array(10).keys())
          .map(i => {
            return {
              id: i.toString(),
              title: 'Example ' + (i + 1),
              description: i % 3 === 0 ? 'hello from example' : ''
            }
          })
        commit(EXAMLE_MUTATION_TYPES.SET_LIST, list)
        resolve(list)
      }, 500)
    })

    return result
  },

  async [EXAMLE_ACTION_TYPES.changeCount] ({ commit }) {
    commit(EXAMLE_MUTATION_TYPES.UPDATE_COUNT, 1)
  }
}
