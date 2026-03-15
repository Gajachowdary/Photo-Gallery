export const initialState = JSON.parse(localStorage.getItem('favourites')) || [];

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const isFavourite = state.some(photo => photo.id === action.payload.id);
      let newState;
      if (isFavourite) {
        newState = state.filter(photo => photo.id !== action.payload.id);
      } else {
        newState = [...state, action.payload];
      }
      return newState;
    }
    case 'INIT_FAVOURITES':
      return action.payload;
    default:
      return state;
  }
};
