import { actionsTypes } from './actionsTypes'

const actions = {
  decrement: () => ({
    type: actionsTypes.COUNTER_DECREMENT
  }),
  increment: () => ({
    type: actionsTypes.COUNTER_INCREMENT
  })
}

export { actions }
