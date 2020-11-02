const initialState = {
    favorites: []
}

const favoriteReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_FAVORITE':
            let filter = state.favorites.filter(el => el.id === action.payload.id );
            if(filter.length === 0){
                state.favorites.push(action.payload);
            }
            return state;
        case 'REMOVE_FAVORITE':
            return {
                favorites: [
                    ...state.favorites.filter(fav => fav.id !== action.payload.id)
                ]
            };
        case 'GET_FAVORITES':
            return state;
        default :
            return state;
    }
}

export default favoriteReducer