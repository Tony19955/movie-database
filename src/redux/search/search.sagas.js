/*
import { takeLatest, call, put, all } from 'redux-saga/effects';

import SearchActionTypes from './search.types';
import {fetchMovies, fetchMovie, fetchMoviesSuccess, fetchMoviesFailure, fetchMovieSuccess, fetchMovieFailure} from './search.actions';

export function* fetchMoviesAsync({ searchTerm }) {  
  try {
    const Search = yield call(fetchMovies, searchTerm);
    yield put(fetchMoviesSuccess(Search));
  } catch (error) {
    yield put(fetchMoviesFailure(error))
  }  
};

export function* fetchMoviesStart() {
  yield takeLatest(SearchActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
};

export function* fetchMovieAsync({ id }) {  
  try {
    const movie = yield call(fetchMovie, id);
    yield put(fetchMovieSuccess(movie));
  } catch (error) {
    yield put(fetchMovieFailure(error))
  }  
};

export function* fetchMovieStart() {
  yield takeLatest(SearchActionTypes.FETCH_MOVIE_START, fetchMovieAsync);
};

export function* searchSagas() {
  yield all([
    call(fetchMovieStart),
    call(fetchMoviesStart)
  ])
};
*/