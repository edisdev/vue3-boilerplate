import { ExampleState } from '@/@types/state.interface'
import { ExampleStore } from './example/index'

export type RootState = {
  example: ExampleState
}

export type Store = ExampleStore<Pick<RootState, 'example'>>;
