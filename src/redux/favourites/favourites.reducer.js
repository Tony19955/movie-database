import FavouritesActionTypes from './favourites.types';
import { addMovieToFavourites } from './favourites.utils';

const INITIAL_STATE = {   
  favouriteMovies: []
};

const favouritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouritesActionTypes.ADD_MOVIE:
      return {
        ...state,
        favouriteMovies: addMovieToFavourites(state.favouriteMovies, action.payload)
      };    
    case FavouritesActionTypes.REMOVE_MOVIE:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter(
          favouriteMovie => favouriteMovie !== action.payload
        )
      };
    default: 
      return state;
  }
};

export default favouritesReducer;