import FavouritesActionTypes from './favourites.types';

export const addMovie = movie => ({   
  type: FavouritesActionTypes.ADD_MOVIE,
  payload: movie  
});

export const removeMovie = movie => ({    
  type: FavouritesActionTypes.REMOVE_MOVIE,
  payload: movie  
});