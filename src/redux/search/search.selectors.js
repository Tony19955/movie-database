import { createSelector } from 'reselect';

const selectSearch = state => state.movies;

export const selectMovies = createSelector(
  [selectSearch],
  movies => movies.movies
); 

export const selectMovie = createSelector(
  [selectSearch],
  movies => movies.movie
); 

export const selectSearchTerm = createSelector(
  [selectSearch],
  movies => movies.searchTerm
); 

export const selectLoading = createSelector(
  [selectSearch],
  movies => movies.loading 
); 