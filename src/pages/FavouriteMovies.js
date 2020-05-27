import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { selectFavouriteMovies } from '../redux/favourites/favourites.selectors';

import FavouriteMovie from '../components/favourite-movie';

const FavouriteMovies = ({ favouriteMovies }) => {  
  return (
    <Container>
      {favouriteMovies.map(movie => (
        <FavouriteMovie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
}

const Container = styled.div`  
  padding: 6rem 0;  
`;

const mapStateToProps = createStructuredSelector({
  favouriteMovies: selectFavouriteMovies
});

export default connect(mapStateToProps, null)(FavouriteMovies); 