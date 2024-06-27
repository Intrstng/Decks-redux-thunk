import { decksApi, RequestAddDeck } from './decks-api';
import { addDeckAC, fetchDecksAC } from './decks-reducer';
import { AppThunk } from '../../app/store';

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
    const response = await decksApi.fetchDecks();
    dispatch(fetchDecksAC(response.data.items));
};

export const addDeckTC = (params: RequestAddDeck): AppThunk => async (dispatch) => {
    const response = await decksApi.addDeck(params);
    dispatch(addDeckAC(response.data));
};