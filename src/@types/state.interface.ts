import { ExampleList } from '@/@types/examplelist.interface'

export type ExampleState = {
  count: number,
  list: ExampleList[]
}

export enum EXAMPLE_GETTER_TYPES {
  exampleList = 'exampleList',
  count = 'count'
}

export interface RootState {
  example: ExampleState
}
