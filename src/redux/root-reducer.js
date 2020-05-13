import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import favouritesReducer from './favourites/favourites.reducer';

export default combineReducers({
  movies: searchReducer,
  favourites: favouritesReducer
});