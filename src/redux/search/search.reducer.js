import SearchActionTypes from './search.types';

const INITIAL_STATE = {     
  searchTerm: '',
  movies: [],
  loading: false,
  movie: [],
  error: undefined
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {      
    case SearchActionTypes.FETCH_MOVIES_START:
      return {
        ...state,    
        searchTerm: action.payload,                         
        loading: false     
      };
    case SearchActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,        
        loading: false       
      };
    case SearchActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,        
        error: action.payload,
        loading: false   
      };    
    case SearchActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case SearchActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,        
        error: action.payload,
        loading: false
      };   
    case SearchActionTypes.LOADING:
      return {
        ...state,
        loading: true
      }; 
    default: 
      return state;
  }
};

export default searchReducer;