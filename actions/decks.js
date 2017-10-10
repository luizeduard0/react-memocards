export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'


export const fetchDecks = ({ decks }) => {
  return {
    type: FETCH_DECKS,
    decks
  }
}

export const addDeck = ({ id, title, questions }) => {
  return {
    type: ADD_DECK,
    id,
    title,
    questions
  }
}


export const addQuestion = ({ id, question }) => {
  return {
    type: ADD_QUESTION,
    id,
    question
  }

}
