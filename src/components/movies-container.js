import React from 'react';
import { connect } from 'react-redux';

import MovieCard from './movie-card';

import { Grid, Box } from '@material-ui/core';

const MoviesContainer = ({ movies }) => {    
  
  const checkMovies = movies.Response === 'True';
    
  return (
    <Box p="4rem 6rem">
      <Grid container wrap="wrap" spacing={5}>        
        {checkMovies ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null }        
    </Grid>
    </Box> 
  );  
  
};

const mapStateToProps = state => ({
  movies: state.movies.movies 
})

export default connect(mapStateToProps, null)(MoviesContainer);