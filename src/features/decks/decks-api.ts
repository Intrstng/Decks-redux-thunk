import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

// export type DeckType = {
//     isFavorite: boolean,
//     author: DeckAuthor,
//     id: string,
//     userId: string,
//     name: string,
//     isPrivate: true,
//     cover: string,
//     created: Date,
//     updated: Date,
//     cardsCount: number
// }


export type DeckAuthor = {
    id: string
    name: string
}
export type Deck = {
    isFavorite: boolean
    author: DeckAuthor
    id: string
    userId: string
    name: string
    isPrivate: boolean
    cover: string
    created: string
    updated: string
    cardsCount: number
}
export type DeckPagination = {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
}

export type ResponseDecksType<D = []> = {
    items: D,
    pagination: DeckPagination
}


export type RequestAddDeck = {
    cover?: string
    name: string
    isPrivate?: boolean
}

// export type ResponseDeck = {
//     isFavorite: boolean
//     author: DeckAuthor
//     id: string
//     userId: string
//     name: string
//     isPrivate: boolean
//     cover: string
//     created: string
//     updated: string
//     cardsCount: number
// }

export const decksApi = {
    fetchDecks() {
        return instance.get<ResponseDecksType<Deck[]>>('/v2/decks')
    },
    addDeck(params: RequestAddDeck) {
        return instance.post<Deck>('/v1/decks', params)
    },
}