import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import searchReducer from './search/search.reducer';
import favouritesReducer from './favourites/favourites.reducer';

const persistConfig = { 
  key: 'root',
  storage,
  whitelist: ['movies', 'favourites']
}

const rootReducer = combineReducers({
  movies: searchReducer,
  favourites: favouritesReducer
})

export default persistReducer(persistConfig, rootReducer);