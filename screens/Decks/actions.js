export const FETCH_DECKS = 'FETCH_DECKS'

export const fetchDecks = ({ decks }) => {
  return {
    type: FETCH_DECKS,
    decks
  }
}
