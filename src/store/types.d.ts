import {
  ActionTypes_APP,
  GetterTypes_APP,
  MutationTypes_APP,
} from './modules/app/types.d'

// mutation
export const MutationTypes = {
  APP: MutationTypes_APP
} as const

// action
export const ActionTypes = {
  APP: ActionTypes_APP
} as const

// getter
export const GetterTypes = {
  APP: GetterTypes_APP
} as const
