import { Deck } from '../decks/decks-api';

const SET_DECKS = 'DECKS/SET-DECKS';

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
    default:
      return state
  }
}

export type DecksActions = FetchDecksACType

type FetchDecksACType = ReturnType<typeof fetchDecksAC>

export const fetchDecksAC = (decks: Deck[]) => ({
  type: SET_DECKS,
  payload: {
    decks
  }
}) as const