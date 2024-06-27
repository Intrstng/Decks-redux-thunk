import { decksApi } from './decks-api';
import { fetchDecksAC } from './decks-reducer';
import { AppThunk } from '../../app/store';

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
    const response = await decksApi.fetchDecks();
    dispatch(fetchDecksAC(response.data.items));
};