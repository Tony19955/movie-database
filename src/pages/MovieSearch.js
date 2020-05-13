import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/search';
import Spinner from '../components/spinner';
import MoviesContainer from '../components/movies-container';

import { Grid, Box } from '@material-ui/core';

const MovieSearch = ({ loading }) => {      
  return (
    <Box component="div" display="flex" flexDirection="column" alignItems="center" width="100%" height="100%" p="6rem 0">
      <Grid container justify="center">
        <Grid item xs={11} sm={9} md={6} lg={4} xl={4}>
          <Search />
        </Grid>
      </Grid>
      {loading ? <Spinner /> : <MoviesContainer />}
    </Box>
  );  
};

const mapStateToProps = state => ({    
  loading: state.movies.loading
})

export default connect(mapStateToProps, null)(MovieSearch); 