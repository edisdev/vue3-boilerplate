import { ExampleState } from '@/@types/state.interface'

export interface State extends ExampleState {}

export const state: State = {
  list: [],
  count: 1
}
