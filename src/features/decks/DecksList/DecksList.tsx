import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem';
import { useFetchDecks } from '../../../hooks/useFetchDecks';

export const DecksList = () => {
    const {decks} = useFetchDecks();

    return (
        <ul className={s.list}>
            {decks.map(d => (
                <DeckItem key={d.id} deck={d}/>
            ))}
        </ul>
    );
}
