import { useAppDispatch, useAppSelector } from '../app/store';
import { decksSelector } from '../features/decks/decks-selectors';
import { useEffect } from 'react';
import { fetchDecksTC } from '../features/decks/decks-thunks';
import { useSelector } from 'react-redux';

export const useFetchDecks = () => {
    const dispatch = useAppDispatch();
    const decks = useAppSelector(decksSelector);
    // const decks = useSelector(decksSelector);
    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [dispatch])
    return {
        decks,
    }
}