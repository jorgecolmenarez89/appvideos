export const addFavorite = (favorite) => {
    return {
        type: 'ADD_FAVORITE',
        payload: favorite
    }
}

export const removeFavorites = (favorite) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: favorite
    }
}

export const getFavorites = (favorites) => {
    return {
        type: 'GET_FAVORITES',
        favorites
    }
}