import { FETCH_DECKS, ADD_DECK, ADD_QUESTION } from './../actions/decks'

export default function decks(state={}, action) {
  const { id, title, questions, question } = action
  switch(action.type) {
    case FETCH_DECKS:
      return {}

    case ADD_DECK:
      return {
        ...state,
        [id]: {
          id,
          title,
          questions
        }
      }

    case ADD_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: {
            ...state[action.id].questions,
            [question.id]: {
              id: question.id,
              title: question.title,
              correctAnswer: question.correctAnswer
            }
          }
        }
      }

    default:
      return state
  }
}
