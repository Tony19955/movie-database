import SearchActionTypes from './search.types';
import axios from 'axios';
import APIkey from '../../APIkey';

export const setLoading = () => ({
  type: SearchActionTypes.LOADING
});

export const fetchMoviesStart = searchTerm => ({   
  type: SearchActionTypes.FETCH_MOVIES_START,
  payload: searchTerm    
});

export const fetchMovies = searchTerm => {  
  return dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIkey.APIkey}&s=${searchTerm}`)
    .then(response =>
      dispatch({
        type: SearchActionTypes.FETCH_MOVIES_SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: SearchActionTypes.FETCH_MOVIES_FAILURE,
        payload: error
      })
    ); 
  } 
};

export const fetchMovie = id => {
  return dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIkey.APIkey}&i=${id}`)
    .then(response =>
      dispatch({
        type: SearchActionTypes.FETCH_MOVIE_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => 
      dispatch({
        type: SearchActionTypes.FETCH_MOVIE_FAILURE,
        payload: error
      })
    );
  }
};

// PREPARED FOR REDUX-SAGA
/*
export const handleInput = searchTerm => ({
  type: SearchActionTypes.SEARCH_FOR,
  payload: searchTerm
});

export const fetchMoviesStart = searchTerm => ({
  type: SearchActionTypes.FETCH_MOVIES_START,
  payload: searchTerm
});

export const fetchMoviesSuccess = response => ({
  type: SearchActionTypes.FETCH_MOVIES_SUCCESS,
  payload: response
});

export const fetchMoviesFailure = error => ({
  type: SearchActionTypes.FETCH_MOVIES_FAILURE,
  payload: error
});

export const fetchMovieStart = () => ({
  type: SearchActionTypes.FETCH_MOVIE_START 
});

export const fetchMovieSuccess = response => ({
  type: SearchActionTypes.FETCH_MOVIE_SUCCESS,
  payload: response
});

export const fetchMovieFailure = error => ({
  type: SearchActionTypes.FETCH_MOVIE_FAILURE,
  payload: error
});


export const fetchMovies = searchTerm => {  
  axios
  .get(`https://www.omdbapi.com/?apikey=${APIkey}&s=${searchTerm}`)      
  .then(response => response.data)    
  .catch(error => console.log(error));
};

export const fetchMovie = id => {  
  axios
  .get(`https://www.omdbapi.com/?apikey=${APIkey}&i=${id}`)
  .then(response => response.data)    
  .catch(error => console.log(error)); 
};
*/