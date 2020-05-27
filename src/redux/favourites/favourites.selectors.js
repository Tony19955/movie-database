import { createSelector } from 'reselect';

const selectFavourites = state => state.favourites;

export const selectFavouriteMovies = createSelector(
  [selectFavourites],
  favourites => favourites.favouriteMovies
); 