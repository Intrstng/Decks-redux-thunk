import { AppRootState } from '../../app/store';
import { Deck } from './decks-api';
import { decksReducer } from './decks-reducer';

export const decksSelector = (state: AppRootState): Deck[] => state.decksReducer.decks;