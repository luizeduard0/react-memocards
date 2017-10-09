export const ADD_DECK = 'ADD_DECK'

export const addDeck = ({ id, title, cards={} }) => {
  return {
    type: ADD_DECK,
    id,
    title,
    cards
  }
}
