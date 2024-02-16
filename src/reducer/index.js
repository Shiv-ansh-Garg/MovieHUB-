//Reducer/index.js


import {
    ADD_MOVIES,
    ADD_TO_FAVOURITES,
    SET_SHOW_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT,
    DELETE_MOVIE
  } from '../action';
  
  import { combineReducers } from 'redux';
  
  const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
  };
  export function movies(state = initialMoviesState, action) {
    // // fetch movies and save in store, for now we are getting it from a file
    // // later we will get it from an API
    // if (action.type === ADD_MOVIES) {
    //   // movies coming from action obj, explain we can add any props to action obj
    //   return {
    //     ...state,
    //     list: action.movies
    //   }; // returning a new array not changing in state
    // }
  
    // // if no action type matches
    // return state;
  
    switch (action.type) {
      case ADD_MOVIES:
        return {
          ...state,
          list: action.movies,
        }; // returning a new array not changing in state
      case ADD_TO_FAVOURITES:
        console.log('Movie',movies);
        return {
          ...state,
          favourites: [action.movie, ...state.favourites],
        };
      case SET_SHOW_FAVOURITES:
        return {
          ...state,
          showFavourites: action.val,
        };
      case REMOVE_FROM_FAVOURITES:
        const filteredArray = state.favourites.filter(
          (movie) => movie.Title !== action.movie.Title
        );
        return {
          ...state,
          favourites: filteredArray,
        };
      case ADD_MOVIE_TO_LIST:
        return {
          ...state,
          list: [action.movie, ...state.list],
        };
      case DELETE_MOVIE:
        console.log('Movieszzz',state.list);
        const deleteMovie = state.list.filter((movie) => movie.Title !== action.movie.Title);
        console.log('Movieszzz',deleteMovie);
        return{
          ...state,
          list: deleteMovie,
        };
      default:
        return state;
    }
  }
  
  const initialSearchState = {
    results: {},
    showSearchResults: false,
  };
  
  export function search(state = initialSearchState, action) {
    switch (action.type) {
      case ADD_SEARCH_RESULT:
        return {
          ...state,
          results: action.movie,
          showSearchResults: true,
        };
      case ADD_MOVIE_TO_LIST:
        return {
          ...state,
          showSearchResults: false,
        };
      default:
        return state;
    }
  }
  
  // const initialRootState = {
  //   movies: initialMoviesState,
  //   search: []
  // };
  
  // export default function rootReducer(state = initialRootState, action) {
  //   return {
  //     movies: movies(state.movies, action),
  //     search: search(state.search, action)
  //   };
  // }
  
  export default combineReducers({
    movies,
    search,
  });
  