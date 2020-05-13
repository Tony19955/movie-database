import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovie } from '../redux/favourites/favourites.actions'

import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, IconButton } from '@material-ui/core';

const FavouriteMovie = ({ movie, removeMovie }) => {
  const { Title, Poster, imdbID } = movie;
  return (
    <MovieContainer>
      <img src={Poster} alt='Favourite Movie Wallpaper' />
      <MovieTitle>{Title}</MovieTitle>
      <Link to={'/movie/' + imdbID}>          
        <Button variant="contained" color="secondary">Movie detail</Button>          
      </Link>
      <IconButton color='primary' onClick={() => removeMovie(movie)}><DeleteIcon /></IconButton>
    </MovieContainer>
  );
} 

const MovieContainer = styled.div`
  display: flex;  
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
`;

const MovieTitle = styled.h4`
  color: white;
`;

const mapDispatchToProps = dispatch => ({
  removeMovie: movie => dispatch(removeMovie(movie))
});

export default connect(null, mapDispatchToProps)(FavouriteMovie);