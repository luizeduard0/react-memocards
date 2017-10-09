import { FETCH_DECKS } from './actions'
import { ADD_DECK } from './../AddDeck/actions'

export default function decks(state={}, action) {
  const { id, title, cards } = action
  switch(action.type) {
    case FETCH_DECKS:
      return {}

    case ADD_DECK:
      return {
        ...state,
        [id]: {
          id,
          title,
          cards
        }
      }
    default:
      return state
  }
}
