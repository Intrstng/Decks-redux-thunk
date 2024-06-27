import { Deck } from '../decks/decks-api';

const SET_DECKS = 'DECKS/SET-DECKS';
const ADD_DECK = 'DECKS/ADD-DECK';

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case SET_DECKS: {
      return {...state, decks: action.payload.decks}
    }
    case ADD_DECK: {
      return {...state, decks: [action.payload.deck, ...state.decks]}
    }
    default:
      return state
  }
}

export type DecksActions = FetchDecksACType | AddDeckACType

type FetchDecksACType = ReturnType<typeof fetchDecksAC>

export const fetchDecksAC = (decks: Deck[]) => ({
  type: SET_DECKS,
  payload: {
    decks
  }
}) as const

type AddDeckACType = ReturnType<typeof addDeckAC>

export const addDeckAC = (deck: Deck) => ({
  type: ADD_DECK,
  payload: {
    deck
  }
}) as const